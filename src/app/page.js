import Link from "next/link";

export default function Page() {
    return (
        <div className="main">
            <h1>UIVerse</h1>
            <div className="styles-container">
                <Link href={"/components/skeuomorphism"} className="styles">
                    Skeuomorphism
                </Link>
                <Link href={"/components/clay"} className="styles">
                    Claymorphism
                </Link>
                <Link href={"/components/organic"} className="styles">
                    Organic
                </Link>
                <Link href={"/components/material"} className="styles">
                    Material
                </Link>
                <Link href={"/components/neumorphism"} className="styles">
                    Neumorphism
                </Link>
                <Link href={"/components/glassmorphism"} className="styles">
                    Glassmorphism
                </Link>
                <Link href={"/components/liquidGlass"} className="styles">
                    Liquid Glass
                </Link>
                <Link href={"/components/holographic"} className="styles">
                    Holographic
                </Link>
            </div>
        </div>
    );
}
