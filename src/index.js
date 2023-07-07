import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import './font/pretendard.css';
import App from './App';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import ProductDetail from './pages/Project/ProjectDetail';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
            { index:true, path: '/', element: <About/> },
            { path: '/project', element: <Project/> },
            { path: '/project/:id', element: <ProductDetail/> },
            { path: '/contact', element: <Contact/> },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);