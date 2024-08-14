import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Table from './components/Table/Table.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Table/>
  </StrictMode>,
)
