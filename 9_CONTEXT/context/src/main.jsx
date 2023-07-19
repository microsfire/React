import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 2 - criando provider
import { CounterContextProvider } from './context/CounterContext.jsx'

// 5 - context mais complexo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/** 2 - criando provider */}
    <CounterContextProvider>
      {/** 5 - context mai complexo */}
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
