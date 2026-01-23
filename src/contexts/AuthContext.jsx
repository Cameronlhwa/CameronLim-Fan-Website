import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { updateProfile } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUsername = async (newName) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: newName
      });
      return true;
    }
    catch (error) {
      console.error("Error updating username:", error)
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []); // Remove navigate from dependencies

  const value = {
    currentUser,
    loading,
    updateUsername
  };

  return (
    <AuthContext.Provider value={value}>
      {children} {/* Always render children */}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}