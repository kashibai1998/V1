import { Link } from "react-router-dom";

const products = [
  {
    name: 'p1',
    id: 'p1',
  },
  {
    name: 'p2',
    id: 'p2',
  },
];

export default function Products() {
    return <div>
        <ul>
            {products.map((prod) => (
                <li key={prod.id}>
                    <Link to={`/products/${prod.id}`}>{ prod.name}</Link>
                </li>
            ))}
      </ul>
  </div>;
}
