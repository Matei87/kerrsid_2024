import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import CheckEmail from './pages/CheckEmail';
import ResetPassword from './pages/ResetPassword';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Classroom from './pages/Classroom';
import Calendars from './pages/Calendars';
import Grades from './pages/Grades';
import Chats from './pages/Chats';
import Rewards from './pages/Rewards';
import Curriculum from './pages/Curriculum';
import Psihological from './pages/Psihological';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='/forgot' element={<ForgotPassword />} />
      <Route path='/check' element={<CheckEmail />} />
      <Route path='/reset' element={<ResetPassword />} />

      <Route element={<AppLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/students' element={<Students />} />
        <Route path='/classroom' element={<Classroom />} />
        <Route path='/calendars' element={<Calendars />} />
        <Route path='/grades' element={<Grades />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/curriculum' element={<Curriculum />} />
        <Route path='/psihological' element={<Psihological />} />
        <Route path='/settings' element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
