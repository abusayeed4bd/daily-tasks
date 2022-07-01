
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import RequireAuth from './components/RequireAuth';
import UpdataTodo from './UpdataTodo';
import Completed from './components/Completed';
import DateTodo from './components/DateTodo';
import About from './components/About';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/todos/:id" element={<UpdataTodo></UpdataTodo>}></Route>
        <Route path="/complete" element={
          <RequireAuth>
            <Completed></Completed>
          </RequireAuth>
        }></Route>
        <Route path="/date" element={<RequireAuth><DateTodo></DateTodo></RequireAuth>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
