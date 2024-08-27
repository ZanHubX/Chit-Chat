import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
       <Register/>
       <Login/>
       <Signup/>
       <ResetPassword/>
       <Home/>
    </div>
   

  )
}

export default App