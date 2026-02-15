import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import { GithubProvider } from './components/providers/GithubProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GithubProvider>
            <CssBaseline>
                <App />
            </CssBaseline>
        </GithubProvider>
    </StrictMode>
)
