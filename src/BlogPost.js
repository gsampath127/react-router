import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BlogPost = ()=>{


    const {postSlug} = useParams();
    const [post,setPost] = useState(null);
    console.log(postSlug);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postSlug}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
    },[postSlug]);
    if (!post) return null;
    return(
        <>
        <h1>{post.title}</h1>
        <h1>{post.description}</h1>
        </>
    )
}

export default BlogPost;