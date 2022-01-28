import Head from "next/head";
import { ReactNode } from "react";

interface BuilderProps {
    children?: ReactNode;
    title: string;
}

export default function LayoutBuilder({ children, title }: BuilderProps) {
    return (
        <div>
            <Head>
                <title>{title} | Spark Music Streaming</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {children}
        </div>
    );
}