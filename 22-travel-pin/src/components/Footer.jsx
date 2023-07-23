import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &cop; Copyright {new Date().getFullYear()} by TravelPin Inc.
      </p>
    </footer>
  );
}

export default Footer;
