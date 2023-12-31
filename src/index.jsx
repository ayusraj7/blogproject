import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContextProvider from './context/Appcontext'
import {Toaster} from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <AppContextProvider>
		<App />
      <Toaster/>
    </AppContextProvider>
	</React.StrictMode>
)