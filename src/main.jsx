import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pages from './pages/pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pages/>
  </StrictMode>,
)
