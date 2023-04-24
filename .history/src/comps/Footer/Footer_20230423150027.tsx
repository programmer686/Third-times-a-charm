import Link from "next/link";

export default function Navbar() {
    return (
        <main>
            <nav>
                <section>
                    <ul>
                        <li>
                            <Link href="/">
                                Overview
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Materials
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Who we Are
                            </Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </main>
    )
}