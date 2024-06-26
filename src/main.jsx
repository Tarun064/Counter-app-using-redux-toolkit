import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import counterStore from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* isse hmne ek conection build krr diya hai apne pure app ke code ko apne redux store se */}
    <Provider store={counterStore}> 
     <App />
    </Provider>
  </React.StrictMode>,
)
