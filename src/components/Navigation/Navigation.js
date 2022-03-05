import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <header className={styles.navBar}>
        <h1 className={styles.title}>Simply Track...</h1>
        <section className={styles.linkList}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/analytics" className={styles.link}>
            Analytics
          </Link>
          <Link to="/create" className={styles.link}>
            Create
          </Link>
          <Link to="/habits" className={styles.link}>
            All Habits
          </Link>
        </section>
      </header>
      <hr className={styles.line} />
    </>
  );
};

export default Navigation;
