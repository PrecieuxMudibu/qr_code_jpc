"use client"
// import React, { useEffect, useState } from 'react';
// import QRCode from "qrcode";

// export default function App () {
//   const [url, setUrl] = useState('https://www.instagram.com/precieuxmudibu');
//   const [src, setSrc] = useState('');

//   const generateQrCode = () => {
//     QRCode.toDataURL(url).then(setSrc)
//     // QRCode.toDataURL("BEGIN:VCARD FN:John Doe TEL:888-555-1234 EMAIL;TYPE=INTERNET:johndoe@gmail.com END:VCARD").then(setSrc)
//   };


//   useEffect(()=>{
//     generateQrCode()
//   },[])
  
//   return (
//     <div className='bg-white h-screen flex flex-col items-center justify-center p-4'>
//       <h1 className='text-center mb-8'>Scannez le code QR pour visiter notre chaîne</h1>
//       <img className='w-fit h-52 text-4xl' src={src} alt="" />
//       <p className='text-sm text-center mt-8'>Par Précieux Mudibu (+243 979 544 988)</p>
//     </div>
//   );
// };


// import React, { useEffect, useState } from 'react';
// import QRCode from 'qrcode';

// const QRCodeVCards = () => {
//   const [vCardData, setVCardsData] = useState('');

//   const handleGenerate = () => {
//     // Génération de la chaîne vCard
//     const vCardString = `BEGIN:VCARD
//                         VERSION:3.0
//                         FN:Précieux Mudibu
//                         TITLE:Dévelopeur web
//                         EMAIL:precieuxmudibu@itmafrica.com
//                         TEL:+1234567890
//                         ADR:Maniema 8, Kintambo
//                         NOTE:Ne jamais abandonner
//                         END:VCARD`;

//     // Génération du QR Code à partir de la chaîne vCard
//     QRCode.toDataURL(vCardString, { errorCorrectionLevel: 'H', size: 200 })
//       .then((dataURL) => {
//         setVCardsData(dataURL);
//       })
//       .catch((error) => {
//         console.error('Error generating QR Code:', error);
//       });
//   };

//     useEffect(()=>{
//       handleGenerate()
//     },[])

//   return (
//     <div>
//     <button onClick={handleGenerate}>Générer QR Code vCard</button>
//       {vCardData && <img src={vCardData} alt="QR Code vCard" />}
//     </div>
//   );
// };

// export default QRCodeVCards;


import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const QRCodeVCards = () => {
  const [vCardData, setVCardsData] = useState('');

  const handleGenerate = () => {
    // Génération de la chaîne vCard
    const vCardString = `BEGIN:VCARD
VERSION:3.0
FN:Uliss Klaue
TITLE:Software Engineer
EMAIL:johndoe@example.com
TEL:+33333333
ADR:123 Main Street, Anytown, CA 12345
NOTE:This is an example vCard
END:VCARD`;

    // Génération du QR Code à partir de la chaîne vCard
    QRCode.toDataURL(vCardString)
      .then((dataURL) => {
        setVCardsData(dataURL);
      })
      .catch((error) => {
        console.error('Error generating QR Code:', error);
      });
  };

      useEffect(()=>{
        handleGenerate()
      },[])

  return (
    <div>
      <button onClick={handleGenerate}>Générer QR Code vCard</button>
      {vCardData && <img src={vCardData} alt="QR Code vCard" />}
    </div>
  );
};

export default QRCodeVCards;
