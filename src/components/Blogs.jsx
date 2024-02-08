import React, { useContext } from 'react'
import { Appcontext } from '../context/appcontext'
import { Spinner } from './Spinner'
import './loader.css'
export const Blogs = () => {
    const {loading,posts} =useContext(Appcontext)
  
  return (
    <div className='upper'>
        {
            loading?(<Spinner/>):(posts.length==0)?
            (<p>No posts found</p>):
            (posts.map(post=>{
                return(
                <div key={post.id} className='box'>

                <h3>{post.title}</h3>
                <p>{post.author}</p>
                <p>{post.date}</p>
                <p>{post.content}</p>
                <p>{post.tags.map((e,index)=>{
                    return(<span key={index}><a href='#'>#{e}</a></span>)})}</p>


                </div>
                )
            }
            ))
            
        }
    </div>
  )
}
