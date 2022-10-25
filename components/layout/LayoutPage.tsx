import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { Nav } from '../UI/Nav';

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
            <Nav />
            <main>
                { children }
            </main>
            <footer></footer>
        </>
    )
}
