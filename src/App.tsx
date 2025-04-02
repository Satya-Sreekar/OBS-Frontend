import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './lib/auth/LoginScreen';
import RegisterScreen from './lib/auth/RegisterScreen';
import './App.css';
import ChatInterface from './lib/home/HomeScreen';
import SessionSummary from './lib/session/SessionSummary';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/home" element={<ChatInterface />} />
          <Route path="/session" element={<SessionSummary />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
