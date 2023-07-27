import Link from "next/link"
export function Header() {
    return(
        <nav className="flex content-center justify-between flex-wrap bg-stone-800 p-6">
            <ul className="w-full flex justify-center content-center">
                <li className="text-stone-400 hover:text-white mr-4"><Link href="/">Home</Link></li>
                <li className="text-stone-400 hover:text-white mr-4"><Link href="/about">About</Link></li>
                <li className="text-stone-400 hover:text-white mr-4"><Link href="/posts">Posts</Link></li>
            </ul>
        </nav>
    )
}