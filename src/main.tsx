import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppWrapper from './App.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(<AppWrapper />);
