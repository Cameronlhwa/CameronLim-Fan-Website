import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import Card from '../ui/Card';
import PrimaryButton from '../ui/PrimaryButton';
import TextInput from '../ui/TextInput';
import Container from '../ui/Container';
import './AuthStyles.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.email.toLowerCase() === 'cameronlimhwa@gmail.com'){
        navigate('/admin');
      }
      else {
        navigate('/user')
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Ensure loading is always reset
    }
  };

  return (
    <div className="auth-container">
      <Container>
        <Card className="auth-card">
          <h2>Sign In</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <TextInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <PrimaryButton type="submit" disabled={loading} className="auth-submit-button">
              {loading ? 'Signing In...' : 'Sign In'}
            </PrimaryButton>
          </form>
          <div className="auth-links">
            <Link to="/createaccount">Create New Account</Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default SignInPage;
// hi