import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.scss';
import '@fontsource-variable/work-sans';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext.tsx';
import { ProtectedRoute } from './components/index.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    errorElement: <div>Error page</div>,
    children: [
      {
        errorElement: <div>Error page</div>,
        children: [
          {
            // default path
            index: true,
            element: <div>Default page</div>,
          },
          {
            path: '*',
            element: <div>Page Not Found!</div>,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <div>Login page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
