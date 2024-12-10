import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Store.js/Store.js'
import { Provider } from 'react-redux'

/*
redux warpper : to root eliment :
step: 
1. import store from store.js
2. call a provider componet form react-redux and warrped app componet form this.
3.  then create props provider to store= store. 
done
*/ 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {Store}>
    <App />
    </Provider>
    
  </StrictMode>,
)
