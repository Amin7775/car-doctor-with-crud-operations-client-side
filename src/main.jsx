import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <AuthProvider>

    <React.StrictMode>
    <RouterProvider router={routes}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
    </AuthProvider>
  </div>
)
