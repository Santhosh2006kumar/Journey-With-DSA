import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Arrays from './arrays'
import Basics from './basics'
import TcSc from './tcsc'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:'/arrays',
    element:<Arrays />,
  },
  {
    path:'/basics',
    element:<Basics />,
  },
  {
    path:'/tcsc',
    element:<TcSc />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
