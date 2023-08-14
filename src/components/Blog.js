import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import createClient from "../client"
import selfie from "../images/tegning-louie.JPG";
import loreen from "../images/loreen.jpeg";

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
     <h1>Huldrablog</h1>
     <div className="banner"></div>
     <h2>Blog page</h2>
     </header>
     
     <aside>
        <nav>navigation here</nav>
        <img src={selfie} alt="selfie louisebellingmo drawing" style={{width: "300px", height: "300px", borderRadius: "50%"}}></img>
        <button>About</button>
        <h2>I am Louise Bellingmo</h2>
        <p>This is my blog about lifestyle and my own pictures from nature.</p>
        <br/>
        <p>This is my blog and more info will be added here in this text. </p>
        <br/>
        <h2>Instagram</h2>
        <hr/>
        <h2>images from instagram here</h2>
        <img src={loreen} alt="loreen tattoo" style={{width: "250px", height: "200px"}}></img>
        <br/>
        <button>Contact</button>
        <br/>
        <h2>Link to Portfolio</h2>
        <p>A short video imported here</p>
        <br/>
        </aside>
       
        <main>
          {posts.map((post) => (
            <article key={post.slug.current}>
                <div className="card">
              <img src={post.mainImage.asset.url} alt={post.title} />
              <Link to={`/${post.slug.current}`}> READ POST</Link>
              <hr/>
              </div>
            </article>
          ))}
      </main>
      </body>
    </>
  )
}