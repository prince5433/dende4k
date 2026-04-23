import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserPlus } from 'lucide-react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all">
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-center">
        <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
          <UserPlus className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-extrabold text-white">Create Account</h2>
        <p className="text-primary-100 mt-2">Join us today</p>
      </div>
      
      <div className="p-8">
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center">{error}</div>}
        
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="johndoe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-primary-500/30 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 disabled:transform-none mt-2"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-500 transition-colors">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
