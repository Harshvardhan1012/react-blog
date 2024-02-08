import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../context/appcontext'

export const Footer = () => {
    // const [next,setnext]=useState('next');
    // const [prev,setprev]=useState('prev');

    const {loading,setloading,posts,setposts,page,setpage,totalPages,settotalpages,fetchblogpost,handlepagexhange}=useContext(Appcontext);
//    useEffect(()=>{
    const handlernext=()=>{
       handlepagexhange(page+1);
      //  console.log("next");
    }

    

const handlerprev=()=>{
    
    // console.log('dd');
    handlepagexhange(page-1);
}
    
//     console.log(page);
//     // console.log(totalPages);
    
// }
//    },[handlernext,handlerprev]) 
  return (
    <div className='foot'>

      {page>1 && (<button onClick={handlerprev}>prev</button>)}


        {page<totalPages && (<button onClick={handlernext}>next</button>)}
        <p>Page{page}of{totalPages}</p>
        {/* <p>{totalpages}</p> */}
    </div>
  )
}
