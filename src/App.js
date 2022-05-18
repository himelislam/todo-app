import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Pages/Shared/Navbar';
import MyTasks from './components/Pages/MyTask/MyTasks';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/Login/SignUp';
import RequireAuth from './components/Pages/Login/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='myTodo' element={<RequireAuth><MyTasks></MyTasks></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
