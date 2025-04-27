import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './pages/Signup';
import Login from './pages/Login';

/**
 * App component wrapping the entire application with an AuthProvider,
 * a BrowserRouter and Route definitions.
 *
 * The App component provides the following routes:
 * - / (root): Signup component
 * - /login: Login component
 * - /dashboard (protected): Dashboard component, only accessible if authenticated
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard /> {/* Only accessible if authenticated */}
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
