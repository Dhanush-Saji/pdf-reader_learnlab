import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const [ImageURL, setImageURL] = useState('')
  const getFile = async () => {
    try {
      let payload = {
        user_id:"1"
    }
      const res = await axios.post('https://rusanapi.online/rapidread/details?slug=Comparison-of-nalbuphine-versus-fentanyl-as-intrathecal-adjuvant-to-bupivacaine-for-orthopedic-surgeries--A-randomized-controlled-double---blind-trial',payload)
      const data = res?.data?.data?.details[0]?.external_url
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setImageURL(url);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    getFile()
  },[])
  console.log(ImageURL);
  return (
    <>
      <div className="w-full h-full relative">
       {ImageURL && <embed width="100%" title={''} height={'50vh'} src={ImageURL} />}
       {ImageURL && <iframe src={ImageURL} width="100%" height="600px"></iframe>}
      </div>
      <div></div>
    </>
  )
}

export default App
