import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// import Todo from './pages/Todo.jsx'

createRoot(document.getElementById('root')).render(
  < StrictMode>
    <App/>
  </StrictMode>

)
