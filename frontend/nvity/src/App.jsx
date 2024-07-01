import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateTask from './components/CreateTask';
import Dashboard from './pages/Dashboard';
import Important from './pages/Important';
import Complete from './pages/Complete';
import Uncomplete from './pages/Uncomplete';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/' Component={Dashboard}></Route>
        <Route path='/create' Component={CreateTask}></Route>
        <Route path='/important' Component={Important}></Route>
        <Route path='/complete' Component={Complete}></Route>
        <Route path='/uncomplete' Component={Uncomplete}></Route>
      </Routes>
    </Router>
  )
}

export default App;