import { Link } from 'react-router-dom';
import { ASSETS } from '../../assets/constants';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          <img src={ASSETS.logo} alt="" className={styles.logo} />
          <span className={styles.brandName}>好运</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLinkActive}>首页</Link>
          <Link to="/popup" className={styles.navLink}>插件预览</Link>
          <Link to="/" className={styles.navLink}>简历库</Link>
          <Link to="/" className={styles.navLink}>填写演示</Link>
          <Link to="/" className={styles.navLink}>高级版</Link>
        </nav>
        <div className={styles.actions}>
          <Link to="/login" className={styles.loginLink}>登录</Link>
          <Link to="/" className={styles.ctaButton}>免费开始</Link>
        </div>
      </div>
    </header>
  );
}
