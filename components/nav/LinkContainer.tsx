import Link from 'next/link'
import React from 'react'
import { EnlaceColumn } from '../../styled/nav/navigation'

export const LinkContainer = () => {
    return (
        <>
            <Link href="/">
                <EnlaceColumn>Imágenes</EnlaceColumn>
            </Link>
            <Link href="/videos">
                <EnlaceColumn>Videos</EnlaceColumn>
            </Link>
            <Link href="/gifs">
                <EnlaceColumn>Gifs</EnlaceColumn>
            </Link>
            <Link href="/stickers">
                <EnlaceColumn>Stickers</EnlaceColumn>
            </Link>
        </>
    )
}
