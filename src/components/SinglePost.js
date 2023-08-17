import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import createClient from "../client"
import BlockContent from "@sanity/block-content-to-react"
import Header from "./Header"
import Aside from "./Aside"

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    createClient
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {asset -> {_id,url},alt}
      }`
      )
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <>
      {isLoading ? (
        <h1 >  Loading...</h1>
      ) : (
        <body>
            <Header /> 
            <Aside />
        <main>
          <h1>{singlePost.title}</h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img src={singlePost.mainImage.asset.url} alt={singlePost.title}
              title={singlePost.title} style={{width: "600px", height: "600px"}}
              className="blogsection"/>
          )}
          <p>By Louise Bellingmo</p>

          <div className="singlepost-block">
            <BlockContent
              blocks={singlePost.body}
              projectId="5w9wd3qu"
              dataset="production"
            />
          </div>

          <button className="blog-btn">
            <Link to="/"> Back to Blog articles </Link>
          </button>
        </main>
        </body>
      )}
    </>
  )
}