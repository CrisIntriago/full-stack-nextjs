import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Bravo</div>
      <div className={styles.text}>
        Bravo Social Media Agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
