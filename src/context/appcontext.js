import { createContext, useState } from "react";
import { baseUrl } from "./baseutl";
import axios from 'axios'
export const Appcontext=createContext();

export default function AppcontextProvider({children}){
    const [loading,setloading]=useState(false);
    const [posts,setposts]=useState([]);
    const [page,setpage]=useState(1);
    const [totalPages,settotalpages]=useState(null);

    async function fetchblogpost(page=1){
        setloading(true);
        let url=`${baseUrl}?page=${page}`;

            try{
                const result=await fetch(url)
                // result.then((res)=>res.json());
                const data=await result.json();
                console.log(data);
                setpage(data.page);
                setposts(data.posts);
                settotalpages(data.totalPages);
                // setloading(false);
                console.log(data.totalPages);
            }
            catch(err){
                console.log(err);
                setpage(1);
                setposts([]);
                settotalpages(null);
            }
        setloading(false);

    }
    function handlepagexhange(page){
        setpage(page);
        fetchblogpost(page);
    }
    const value={
        loading,setloading,posts,setposts,page,setpage,totalPages,settotalpages,fetchblogpost,handlepagexhange
    };

    return <Appcontext.Provider value={value}>
    {children}
    </Appcontext.Provider>


}