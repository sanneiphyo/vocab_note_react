import React, { useState } from 'react';
import { Card, Carousel } from 'antd';
import { RotateRightOutlined } from '@ant-design/icons';
import Text from "./Text"

const cards = [
  {
    english: "Hello",
    burmese: "မင်္ဂလာပါ",
  },
  {
    english: "Thank you",
    burmese: "ကျေးဇူးတင်ပါတယ်",
  },
  {
    english: "Goodbye",
    burmese: "သွားတော့မယ်",
  },
  {
    english: "Yes",
    burmese: "ဟုတ်ကဲ့",
  },
  {
    english: "No",
    burmese: "မဟုတ်ဘူး",
  },
];

const Flashcard = ({ english, burmese }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };


  return (
    <>
      <Card
      className="w-full shadow-lg bg-gray-50 rounded-xl  cursor-pointer transition-transform transform-gpu hover:scale-105"
      onClick={handleFlip}
      cover={
        <div className="flex px-[8rem] w-full py-[4rem] h-48 bg-slate-700 text-white text-3xl  ">
          {flipped ? burmese : english}
        </div>
      }
      actions={[
        <RotateRightOutlined key="flip" onClick={handleFlip} />,
      ]}
    >
      <div className="text-center text-lg">
        {flipped ? 'Burmese' : 'English'}
      </div>
    </Card>
    </>
  
  );
};

function App() {
  return (

    <>
      <div  className='text-2xl '>
      <Text/>
      </div>
     <div className="p-4 gap-3 w-[25rem] sm:ml-[23rem] mt-[4rem] " >
     
     <Carousel arrows infinite={true}>

       {cards.map((card, index) => (
         <div key={index} className="flex justify-center ">
           <Flashcard
           english={card.english} 
           burmese={card.burmese}
           />
         </div>
       ))}
     </Carousel>
   </div>
    </>

   
  );
}

export default App;
