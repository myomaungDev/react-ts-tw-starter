import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { AuthContextProvider } from './Providers/AuthProvider'
import { AppRoot } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <AuthContextProvider>
        <AppRoot />
     </AuthContextProvider>
  </React.StrictMode>,
)
