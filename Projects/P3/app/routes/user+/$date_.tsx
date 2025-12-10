import { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";


const user = {
    loggedIn: true,
}
export const loader = ({request}:LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const month = url.searchParams.get("month");
    return {month}
}


export default function Date() {
    const {month} = useLoaderData<typeof loader>();
    return (
        <div>Date data : { month}</div>
    )
}