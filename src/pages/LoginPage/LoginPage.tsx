import { Link } from 'react-router-dom';
import { ASSETS } from '../../assets/constants';
import styles from './LoginPage.module.css';

export function LoginPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.card}>
          <div className={styles.logoWrap}>
            <img src={ASSETS.logoLogin} alt="好运" className={styles.logo} />
            <span className={styles.badge}>✦</span>
          </div>

          <h1>Let's 好运</h1>
          <p className={styles.subtitle}>求职好运，从现在开始</p>

          <label className={styles.inputWrap}>
            <span>✉</span>
            <input type="email" placeholder="您的工作邮箱" aria-label="工作邮箱" />
          </label>

          <button type="button" className={styles.submit}>获取验证码 →</button>

          <p className={styles.legal}>
            登录即代表您同意我们的 <a href="#">《用户协议》</a> 及 <a href="#">《隐私政策》</a>
          </p>
        </section>

        <Link to="/" className={styles.back}>返回首页</Link>
      </main>
    </div>
  );
}
