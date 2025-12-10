import { Link } from "@remix-run/react";

export const loader = () => {
    console.log('loader sales list component');
    return null;
}
export default function SalesList() {
    return (
        <div>
            <h1>This is SalesList Component</h1>
            <h2><Link to="/login">1 Login</Link></h2>
        </div>
    )
}