"use client";

import Link from "next/link";

export default function Logo(){
    return(
    <>
        <h1>I think you clicked here by mistake</h1>
        <Link href="/name">
            <p>Go back</p>
        </Link>
       
        </>
    )
}