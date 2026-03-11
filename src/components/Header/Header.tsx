import { Link } from 'react-router-dom';
import { ASSETS } from '../../assets/constants';
import styles from './Header.module.css';

export type HeaderTab = 'home' | 'preview' | 'library' | 'demo' | 'none';

interface HeaderProps {
  activeTab?: HeaderTab;
}

export function Header({ activeTab = 'none' }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          <img src={ASSETS.logo} alt="好运" className={styles.logo} />
          <span className={styles.brandName}>好运</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={activeTab === 'home' ? styles.navLinkActive : styles.navLink}>首页</Link>
          <Link to="/preview" className={activeTab === 'preview' ? styles.navLinkActive : styles.navLink}>插件预览</Link>
          <Link to="/library" className={activeTab === 'library' ? styles.navLinkActive : styles.navLink}>简历库</Link>
          <Link to="/demo" className={activeTab === 'demo' ? styles.navLinkActive : styles.navLink}>填写演示</Link>
        </nav>

        <div className={styles.actions}>
          <Link to="/login" className={styles.loginLink}>登录</Link>
          <Link to="/login" className={styles.ctaButton}>免费开始</Link>
        </div>
      </div>
    </header>
  );
}
