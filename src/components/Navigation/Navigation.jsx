import styles from "./Navigation.module.css"
import { FaQrcode, FaBox } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <ul>
        <li>
          <Link to="/">
            <FaQrcode size={32} color="white" />
          </Link>
        </li>
        <li>
          <Link to="/qr-code">
            <FaBox size={32} color="white" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
