import styles from "./Navigation.module.css";
import { FaQrcode, FaBox } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <footer className={styles.footer}>
        <nav className={styles.Navigation}>
          <ul>
            <li className={styles.ofAdd}>
              <Link to="/offAdd">
                <FaBoxesPacking size={42} className={styles.icon} />
              </Link>
            </li>
            <li className={styles.qrIcon}>
              <Link to="/qr-code">
                <FaQrcode size={65} className={styles.iconQR} />
              </Link>
            </li>
            <li className={styles.history}>
              <Link to="/history">
                <FaBox size={42} className={styles.icon} />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
