import Link from "next/link"
export function Header() {
    return(
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/posts">Posts</Link></li>
            </ul>
        </nav>
    )
}