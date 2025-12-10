import { useParams } from "react-router-dom"


export default function ProductDetails() {
    const params = useParams()
    console.log(params)
    return <div>
        product details
        {params.id}
    </div>
}