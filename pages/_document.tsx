import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Reggae+One&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            
        </Html>
    )
}

export default Document