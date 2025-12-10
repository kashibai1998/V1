import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await data.json();
    return {res, apiName:"Post Api details"}
}

export default function Component() {
    const {res, apiName} = useLoaderData<typeof loader>();
    return (
        <div>
            Events Data: {apiName}
            {
                res.map((item:{title: string, id: number}) => {
                    return (
                        <h1 className="font-bold" key={ item.id}>{ item.title }</h1>
                    )
                })
            }
        </div>
    )
}