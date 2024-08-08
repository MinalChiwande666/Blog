import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h1>404 Error</h1>
            <p>page not you are not looking for</p>
            <Link href={"/"}>Return to Home Page</Link>
        </div>
    )
}

export default NotFound