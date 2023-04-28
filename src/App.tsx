import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
// import TestingPage from './pages/TestingPage';

export type User = {
  name: string;
  email: string;
  token: string;
};

export type TodoItem = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  tags?: string[];
  reminderDate?: Date;
  reminderTime?: Date;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage type="login" />} />
        <Route path="/signup" element={<LoginPage type="signup" />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        {/* <Route path="/testing" element={<TestingPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
