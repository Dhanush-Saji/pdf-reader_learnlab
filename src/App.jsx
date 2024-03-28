import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

import {pdfjs } from 'react-pdf';
import Method1 from './Components/Method1';
import Method2 from './Components/Method2';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


function App() {
  
  return (
    <div style={{ width: '100%',display:'flex' }}>
     {/* <Method1 /> */}
      <Method2 />
    </div>
  )
}

export default App
