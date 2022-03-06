import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <hr className={styles.line}></hr>
      <section className={styles.footerText}>
        <h3>
          Made by Ketan Saraf <i>(Keshraf)</i>
        </h3>
        <a className={styles.link} href="www.github.com/Keshraf">
          GitHub
        </a>
      </section>
    </footer>
  );
};

export default Footer;
