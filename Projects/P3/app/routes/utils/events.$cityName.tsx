import { useParams } from "@remix-run/react"

export default function Component() {
    const {cityName} = useParams();
    return (
        <div className="flex h-screen items-center justify-center">Hello city:{cityName }</div>
    )
}