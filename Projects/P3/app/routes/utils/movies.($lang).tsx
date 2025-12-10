import { useParams } from "@remix-run/react"

export default function Component() {
    const {lang}= useParams();
    return (
        <div>Movies:{lang }</div>
    )
}