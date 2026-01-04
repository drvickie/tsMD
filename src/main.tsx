import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MarkdownEditor from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MarkdownEditor />
  </StrictMode>,
)
