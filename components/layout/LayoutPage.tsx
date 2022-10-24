import Head from 'next/head';
import React, { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    title: string;
}

export const LayoutPage: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title> { title } </title>
            </Head>
            <header></header>
            <main>
                { children }
            </main>
            <footer></footer>
        </>
    )
}
