import { Link } from 'react-router-dom';
import { ASSETS } from '../../assets/constants';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <Link to="/" className={styles.brandRow}>
            <img src={ASSETS.logo} alt="好运" className={styles.logo} />
            <span className={styles.brand}>好运</span>
          </Link>
          <p className={styles.sub}>求职好运从现在开始</p>
        </div>

        <div className={styles.links}>
          <a href="#">隐私政策</a>
          <a href="#">服务条款</a>
          <a href="#">意见反馈</a>
        </div>

        <p className={styles.copy}>© 2026 好运 - 让求职更有效</p>
      </div>
    </footer>
  );
}
