import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Method1 = () => {
    const [ImageURL, setImageURL] = useState('')
  const getFile = async () => {
    try {
      let payload = {
        user_id: "1"
      }
      const res = await axios.post('https://rusanapi.online/rapidread/details?slug=Comparison-of-nalbuphine-versus-fentanyl-as-intrathecal-adjuvant-to-bupivacaine-for-orthopedic-surgeries--A-randomized-controlled-double---blind-trial', payload)
      const data = res?.data?.data?.details[0]?.external_url
      // const blob = new Blob([data], { type: 'application/pdf' });
      // const url = URL.createObjectURL(blob);
      setImageURL(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFile()
  }, [])
  return (
    <embed
    title="PDF Viewer"
    src={ImageURL}
    type="application/pdf"
    width="100%"
    height="600px"
  />
  )
}

export default Method1