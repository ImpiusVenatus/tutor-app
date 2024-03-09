import { useState } from 'react';
import '../styles/auth.css'
import { BASE_URL } from '../utils/config'

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, phone, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Redirect to login page or show success message
        console.log('Registration successful');
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      // Handle error (e.g., show error message)
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
