import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Arrays from './arrays'
import Basics from './basics'
import TcSc from './tcsc'
import Patterns from './patterns'
import Sort from './sort'

import AIChat from './chatbot'
import TwoPointers from './twopointers.jsx'
import LinkedList from './linkedlist.jsx'

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
    path:'/2pointers',
    element:<TwoPointers/>,
  },
  {
    path:'/basics',
    element:<Basics />,
  },
  {
    path:'/tcsc',
    element:<TcSc />
  },
  {
    path:'/patterns',
    element:<Patterns/>
  },
  {
    path:'/ai-chat',
    element:<AIChat/>
  },
  {
    path:'/sort',
    element:<Sort/>
  },
  {
    path:'/linkedlist',
    element:<LinkedList/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
