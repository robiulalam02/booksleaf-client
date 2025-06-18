import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import { router } from './router/router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} >
          <ScrollRestoration />
        </RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
