import { Link } from 'react-router-dom';
import { ASSETS } from '../../assets/constants';
import styles from './LoginPage.module.css';

const BackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 15l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="12" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
    <path d="M5 8V5a4 4 0 018 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export function LoginPage() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        <BackIcon />
        返回首页
      </Link>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <img src={ASSETS.logoLogin} alt="好运" />
          </div>
          <h1 className={styles.brandTitle}>Let's 好运</h1>
          <p className={styles.brandSub}>求职好运从现在开始</p>
        </div>
        <div className={styles.formCard}>
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon} aria-hidden>
              <EmailIcon />
            </span>
            <input
              type="email"
              className={styles.input}
              placeholder="请输入邮箱地址"
              aria-label="邮箱地址"
            />
          </div>
          <div className={`${styles.inputGroup} ${styles.codeRow}`}>
            <span className={styles.inputIcon} aria-hidden>
              <LockIcon />
            </span>
            <input
              type="text"
              className={styles.input}
              placeholder="请输入验证码"
              aria-label="验证码"
            />
            <button type="button" className={styles.getCodeBtn}>
              获取验证码
            </button>
          </div>
          <div className={styles.extraLinks}>
            <button type="button" className={styles.extraLink}>
              使用密码登录
            </button>
            <a href="#" className={styles.extraLink}>
              忘记密码？
            </a>
          </div>
          <button type="button" className={styles.submitBtn}>
            登录 / 注册
            <img src={ASSETS.iconSubmitArrow} alt="" />
          </button>
          <p className={styles.legal}>
            继续即表示同意
            <a href="#">用户协议</a>
            与
            <a href="#">隐私政策</a>
          </p>
        </div>
      </div>
    </div>
  );
}
