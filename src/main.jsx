import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Layouts/Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 text-white'><RouterProvider router={router} /></div>
  </React.StrictMode>,
)
