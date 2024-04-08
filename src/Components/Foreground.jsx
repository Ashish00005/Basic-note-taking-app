import React, { useRef } from 'react'
import Card from './Card'
import AddCardbtn from './AddCardbtn';


const Foreground = () => {
  const ref = useRef(null)

    const data =[
        {desc: "This is a  description of the first card.",
         fileSize: ".5mb",
         close: false,
         tag:{
            isOpen: false,
            tagTitle: "Download Now",
            tagColor: "green"
         },

        },
        {desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
         fileSize: ".2mb",
         close: true,
         tag:{
            isOpen: true,
            tagTitle: "Upload",
            tagColor: "blue"
         },

        },
        {desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
         fileSize: ".9mb",
         close: true,
         tag:{
            isOpen: true,
            tagTitle: "Download Now",
            tagColor: "green"
         },

        },
    ];

  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 w-full h-full flex gap-10 flex-wrap p-4 cursor-pointer'>
        {data.map((item,index)=>(
            <Card data={item} key={index} reference={ref}/>
            
        ))}
      </div>
      <AddCardbtn className="absolute flex  bottom-5 right-5 cursor-pointer"/>      
    </>
  )
}

export default Foreground