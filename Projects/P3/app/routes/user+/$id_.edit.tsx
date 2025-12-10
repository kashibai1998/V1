import { useParams } from "@remix-run/react"

export default function User() {
    const {id} = useParams();
    return (
        <h1>User Edit Id: {id }</h1>
    )
}