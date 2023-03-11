import Link from "next/link";

const Links = () => {
    return <div >
        <Link href="/mid/layout">Middleware Layout</Link> <br></br><br></br>
        <Link href="/mid/layout-alt">Middleware Layout Alt</Link> <br></br><br></br>
        <Link href="/mid/no-layout">Middleware No Layout</Link> <br></br><br></br>
        <Link href="/no-mid/layout">No Middleware Layout</Link> <br></br><br></br>
        <Link href="/no-mid/layout-alt">No Middleware Layout Alt</Link> <br></br><br></br>
        <Link href="/no-mid/no-layout">No Middleware No Layout</Link><br></br><br></br>
        <Link href="/">Go Home</Link>
    </div>
}

export default Links;