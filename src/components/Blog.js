import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import createClient from "../client"
import selfie from "../images/tegning-louie.JPG";

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
     </header>

     <aside>
        <img src={selfie} alt="selfie louisebellingmo drawing" style={{width: "300px", height: "300px", borderRadius: "50%"}}></img>
        <h2>I am Louise Bellingmo</h2>
        </aside>

     <main>
        <h2>Blog page</h2>
        <section className="container">
            <div>
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} style={{width: "400px", height: "100%"}} />
              <h4>{post.title}</h4>
              <button>
                <Link to={`/${post.slug.current}`}> READ POST </Link>
              </button>
            </article>
          ))}
          </div>
        </section>
      </main>
      </body>
    </>
  )
}