import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Homepage from './Homepage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <>
     <Homepage/>
    </>
  </BrowserRouter>
)
