// pages/Login.js
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Admin_State } from '../App'
import axios from 'axios'


const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const setAuth = useSetRecoilState(Admin_State);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/adminAuth',{
        user: credentials.email,
        password: credentials.password
      });
      

      if (response.status===200) {
      setAuth(true)
      localStorage.setItem('Admin_State', 'true');
        navigate('/admin-panel');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <input
            type='string'
            value={credentials.email}
            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            placeholder="Username"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border"
          />
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            placeholder="Password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border"
          />
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;