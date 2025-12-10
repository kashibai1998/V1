import { useLoaderData } from "@remix-run/react";
import { Key } from "react";
import Component from "~/components/component";

export const loader = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const res1 = await res.json();
    return {res1, appName:'Comments Post'};
}
    

export default function Info() {

    const loaderData = useLoaderData<typeof loader>();

    return (
        <div>
            <h1 className="font-bold from-neutral-800">User Details are:</h1>
            <h2 className="font-bold from-neutral-800">{loaderData.appName}</h2>
            {
                loaderData.res1.map((item1: { name: string }, index: Key | null | undefined) => {
                    return (
                        <li key={index}>{item1.name}</li>
                    )
                })
            }
            <Component/>
        </div>
    )
}