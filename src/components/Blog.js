import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import createClient from "../client"
import Aside from "./Aside"; 
import banner from "../images/huldra-banner.png"; 
import Footer from "./Footer";


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
        <header>
     <div className="banner">
     <img src={banner} alt="huldrablog banner" />
     </div>
     <h1>by Louise</h1>
     </header>
       <Aside/>
        <main>
          {posts.map((post) => (
            <article key={post.slug.current}>
                <div className="card">
                <br />
                <br/>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4>{post.title}</h4>  
              <Link to={`/${post.slug.current}`}>Read Post... </Link>    
              <hr/>
              </div>
            </article>
          ))}
      </main>
      <div style={{height: "150px"}}></div>
      <br/>
      </body>
      <Footer />
    </>
  )
}