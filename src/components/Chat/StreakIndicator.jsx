import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import './StreakIndicator.css';

const StreakIndicator = () => {
  const { currentUser } = useAuth();
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (!currentUser) return;

    const updateStreak = async () => {
      const userStreakRef = doc(db, 'userStreaks', currentUser.uid);
      
      try {
        const streakDoc = await getDoc(userStreakRef);
        const today = new Date().toDateString();
        
        if (streakDoc.exists()) {
          const data = streakDoc.data();
          const lastActiveDate = data.lastActiveDate?.toDate?.() || (data.lastActiveDate ? new Date(data.lastActiveDate.seconds * 1000) : new Date(0));
          const lastActiveStr = lastActiveDate.toDateString();
          
          if (lastActiveStr === today) {
            // Already active today, don't increment
            setStreak(data.currentStreak || 0);
          } else {
            // Check if yesterday
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toDateString();
            
            if (lastActiveStr === yesterdayStr) {
              // Consecutive day - increment streak
              const newStreak = (data.currentStreak || 0) + 1;
              await setDoc(userStreakRef, {
                currentStreak: newStreak,
                lastActiveDate: serverTimestamp(),
                updatedAt: serverTimestamp()
              }, { merge: true });
              setStreak(newStreak);
            } else {
              // Streak broken - reset to 1
              await setDoc(userStreakRef, {
                currentStreak: 1,
                lastActiveDate: serverTimestamp(),
                updatedAt: serverTimestamp()
              }, { merge: true });
              setStreak(1);
            }
          }
        } else {
          // First time - start streak at 1
          await setDoc(userStreakRef, {
            currentStreak: 1,
            lastActiveDate: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
          setStreak(1);
        }
      } catch (error) {
        console.error('Error updating streak:', error);
      }
    };

    // Update streak when chat page is opened
    updateStreak();
  }, [currentUser]);

  if (!currentUser || streak === 0) return null;

  return (
    <div className="streak-indicator">
      Day {streak} together 💬
    </div>
  );
};

export default StreakIndicator;

