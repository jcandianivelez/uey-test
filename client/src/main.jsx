import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { App } from './App.jsx'

import './index.css'

import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { ErrorPage } from './pages/ErrorPage.jsx';
import { CategoryPage } from './pages/CategoryPage.jsx';
import { ProductPage } from './pages/ProductPage.jsx';
import { HomePage } from './pages/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/:categorySlug',
        element: <CategoryPage />
      },
      {
        path: '/:categorySlug/:productId',
        element: <ProductPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <SnackbarProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </SnackbarProvider>
  </React.StrictMode>,
)
