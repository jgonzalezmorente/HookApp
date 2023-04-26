import { Navigate } from 'react-router-dom';

import { MainApp } from './MainApp';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';

export const routesConfig = [
    { 
      path: '/',
      element: <MainApp/>,
      errorElement: <Navigate to='/about' />,
      children: [
        { path: '', element: <HomePage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'about', element: <AboutPage /> },
      ]
    },  
  ];