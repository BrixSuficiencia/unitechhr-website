import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../App.css';
import UnitechLogo from '../../images/UNITECH_Logo.png';
import UserIcon from '../../images/User.png';
import PasswordIcon from '../../images/Password.png';

const Login = () => {
  const [username, setEmail] = useState('test'); // Initial value set for testing
  const [password, setPassword] = useState('test'); // Initial value set for testing
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'test' && password === 'test') {
      navigate('/Developer/Dashboard'); // Redirect to dashboard
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="login-container">
      <img src={UnitechLogo} alt="UNITECH Logo" className="unitech-logo" />
      <h2>Developer Login</h2>
      <div className="input-container">
        <input
          type="username"
          value={username} // Pre-filled value for testing
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
        />
        <img src={UserIcon} alt="User Icon" />
      </div>
      <div className="input-container">
        <input
          type={showPassword ? 'text' : 'password'} // Toggle between text and password
          value={password} // Pre-filled value for testing
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <img src={PasswordIcon} alt="Password Icon" />
        <button
          className="reveal-button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <button 
        className="login-button"
        onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
