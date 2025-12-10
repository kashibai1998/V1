import { useParams } from "@remix-run/react";

export const loader = () => {
    console.log('loader sales list component');
    return null;
}
export default function SalesList() {
    const { id } = useParams();
    return (
        <div>
            <h1>This is Id: { id}</h1>
        </div>
    )
}