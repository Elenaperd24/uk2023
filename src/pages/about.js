import Link from "next/link"
export default function About () {
    return(
        <>
        <h1>testing About page</h1>
        <p>A tiny VS(About) Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.</p>
        <Link href="/">go back to Home page..</Link>
        </>
    )
}