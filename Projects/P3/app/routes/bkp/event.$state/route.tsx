import { useParams } from "@remix-run/react"

export default function Events() {
    const{ state } = useParams();
    return (
        <div>{ state }</div>
    )
}