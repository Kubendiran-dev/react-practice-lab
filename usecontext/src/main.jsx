
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from "./ThemeContext";
import CounterProvider from "./CounterContext";

createRoot(document.getElementById('root')).render(
  <CounterProvider>
 <ThemeProvider>
    <App />
  </ThemeProvider>
  </CounterProvider>
)
