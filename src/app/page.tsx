"use client"
import React, { useEffect, useState } from 'react';
import QRCode from "qrcode";

export default function App () {
  const [url, setUrl] = useState('https://web.facebook.com/jpc.kintambo.7/?locale=fr_FR&_rdc=1&_rdr');
  const [src, setSrc] = useState('');

  const generateQrCode = () => {
    QRCode.toDataURL(url).then(setSrc)
  };


  useEffect(()=>{
    generateQrCode()
  },[])
  
  return (
    <div className='bg-white h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl'>Scannez le code QR pour visiter notre chaîne</h1>
      <img className='w-fit h-52 text-4xl' src={src} alt="" />
    </div>
  );
};

