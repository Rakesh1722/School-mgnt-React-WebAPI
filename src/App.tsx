import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import AdminSignUp from './components/AdminSignUp';
import Login from './components/Login';
import AdminDashBoard from './pages/AdminDashBoard';
import Teacher from './pages/Teacher';
import AdminViewTeacher from './pages/AdminViewTeacher';
import Edit from './pages/Edit';
import Student from './Students/Student';
import StudentSignUp from './Students/StudentSignUp';
import StudentLogin from './Students/StudentLogin';
import AdminViewStudent from './pages/AdminViewStudent';
import StudentDashBoard from './Students/StudentDashBoard';
import AdminAddTeacher from './components/AdminAddTeacher';
import AdminAddStudent from './components/AdminAddStudent';
import connectedLogin from './components/Login';
import TeacherDashBoard from './components/TeacherDashBoard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home }></Route>
          <Route path={'/Admin'} component={Admin }></Route>
          <Route path={'/AdminSignUp'} component={AdminSignUp }></Route>
          <Route path={'/AdminDashBoard'} component={() => <AdminDashBoard />} ></Route>
          <Route path={'/login'} component={connectedLogin }></Route>
          {/* <Route path={'/login'} component={Login }></Route> */}
          <Route path={'/admin-Teacher'} component={Teacher }></Route>
          <Route path={'/TeacherDashBoard'} component={TeacherDashBoard} ></Route>
          <Route path={'/AdminViewTeacher'} component={AdminViewTeacher }></Route>
          <Route path={'/admin-add-teacher'} component={AdminAddTeacher} />
          <Route path={'/Edit'} component={Edit} />
          <Route path={'/admin-add-student'} component={AdminAddStudent} />
          <Route path={'/Student'} component={Student} />
          <Route path={'/StudentSignUp'} component={StudentSignUp} />
          <Route path={'/StudentLogin'} component={StudentLogin} />
          <Route path={'/AdminViewStudent'} component={AdminViewStudent} />
          <Route path={'/admin-Student'} component={StudentDashBoard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
