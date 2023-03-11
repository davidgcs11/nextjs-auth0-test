import Link from "next/link";

const Links = () => {
    return <div >
        <Link href="/middleware/layout">Middleware Layout</Link> <br></br><br></br>
        <Link href="/middleware/layout-alt">Middleware Layout Alt</Link> <br></br><br></br>
        <Link href="/middleware/no-layout">Middleware No Layout</Link> <br></br><br></br>
        <Link href="/no-middleware/layout">No Middleware Layout</Link> <br></br><br></br>
        <Link href="/no-middleware/layout-alt">No Middleware Layout Alt</Link> <br></br><br></br>
        <Link href="/no-middleware/no-layout">No Middleware No Layout</Link><br></br><br></br>
        <Link href="/">Go Home</Link>
    </div>
}

export default Links;