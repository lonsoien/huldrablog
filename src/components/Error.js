import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div className="">
      <h1 className=""> Error 404 | Page Not Found </h1>
      <Link to="/" className=""> Back to homepage </Link>
    </div>
  )
}