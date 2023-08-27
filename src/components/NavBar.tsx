import { Link, Element } from "react-scroll";
import menuItems from "../data/source";

export default function NavBar() {
  return (
    <header>
      <nav>
        <h2>Logo</h2>

        <ul>
          {menuItems.map((menu, id) => (
            <li key={id}>
              <Link to={menu.title} smooth={true} offset={0} duration={500}>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
