import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import WishlistProvider from './components/Context/WishlistContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <WishlistProvider>
      <HelmetProvider>
      <App />
      </HelmetProvider>
      </WishlistProvider>
  </React.StrictMode>,
)
