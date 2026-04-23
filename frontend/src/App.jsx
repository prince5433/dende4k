import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary-600">InternApp</div>
          <div>
            {token ? (
              <button 
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.href = '/login';
                }}
                className="text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            ) : null}
          </div>
        </nav>
        
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          <Routes>
            <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
