import React from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import App from './App'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="min-h-screen bg-background text-foreground">
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>,
)
