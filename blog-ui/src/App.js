import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Icon, Label, Menu, Table, Button, Segment,Container,Form } from 'semantic-ui-react'
import bloglogo from './img/blog-app.jpg';
import Home from './components/Home/Home';
import NewBlog from './components/NewBlog/NewBlog';
import EditBlog from './components/EditBlog/EditBlog';
import BlogList from './components/BlogList/BlogList';
import Login from './components/Login/Login';

function App() {
  return (
    <>
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
       <img className='ms-100' id='logo' src={bloglogo} alt="logo" />
         <h3 className="text-white ml-2">Blog App</h3>
         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
         </ul>

         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item active">
             <Link className='nav-link nav-item-active' to='/'>Home</Link>
           </li>

           <li className="nav-item active">
             <Link className='nav-link nav-item-active' to='/login'>Login</Link>
           </li>

         </ul>
       </div>
     </nav>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/cpanel" element={<BlogList/>} />
       <Route path="/newblog" element={<NewBlog/>} />
       <Route path="/editblog" element={<EditBlog/>} />
     </Routes>
     </Router>

     <footer className='bg-secondary text-white fixed-bottom'>
   <div className='container text-center text-white'>
     <small>BlogApp &copy; PVShafeeq</small>
   </div>
 </footer>
   </>
  );
}

export default App;
