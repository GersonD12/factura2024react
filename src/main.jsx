import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InvoiceApp } from './InvoiceApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvoiceApp>
    </InvoiceApp>
  </StrictMode>
)
