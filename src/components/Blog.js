import { useState, useEffect } from "react";

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7070/blogposts')
        .then((res) => res.json())
        .then((res) => setBlogPosts(res));
      },[])
  
    return (
        <>
         {blogPosts.map((post, index) =>
            (<>
              <h1>{post.blogTitle}</h1>
            <p>{post.blogText}</p>
            </>
            ))
          }
        </>
    )
}