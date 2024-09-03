
import './App.css'
import Signup from './Signup';
import Login from './login';
import NotFound from './NotFound.jsx';
 import { createBrowserRouter, RouterProvider} from 'react-router-dom'
  export default function App() {
     const router = createBrowserRouter([
    { path: "/signup", element: <Signup/>},
    { path:"/login", element:<Login/>},
    { path:"/notfound",element:<NotFound/>} 
  ])

    return (
    <>
      
      <RouterProvider router={router}/>
    </>
     )
  }
  
