import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import createClient from "../client"
import Aside from "./Aside"; 
import Footer from "./Footer";
import Header from "./Header";


export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {asset -> {_id,url},alt}
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <>
    <body>
        <Header />
       <Aside/>
        <main>
          {posts.map((post) => (
            <article key={post.slug.current}>
                <div className="card">       
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4>{post.title}</h4>  
              <button className="singelpostbutton">
              <Link to={`/${post.slug.current}`}>Read Post... </Link> 
              </button>   
              <hr/>
              </div>
            </article>
          ))}
      </main>
      <div style={{height: "150px"}}></div>
      </body>
      <Footer />
    </>
  )
}