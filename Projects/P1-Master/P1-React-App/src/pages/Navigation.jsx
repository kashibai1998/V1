import { Link, NavLink } from "react-router-dom";
import csss from './pages.css'

export default function Navigation() {
    return (
      <div>
        <nav>
          <ul className={csss.ul}>
            <li className={csss.list}>
              <NavLink to="/" className={({isActive})=> isActive?csss.active:undefined}  end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
}