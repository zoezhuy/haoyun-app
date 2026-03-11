import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ASSETS } from '../../assets/constants';
import styles from './HomePage.module.css';

const features = [
  {
    title: '上传多个简历',
    description: '支持上传多个不同版本的简历',
    icon: ASSETS.iconUpload,
  },
  {
    title: '选择当前使用版本',
    description: '根据不同岗位选择最合适的简历',
    icon: ASSETS.iconCheck,
  },
  {
    title: '自动填写申请表',
    description: '减省更多时间，使求职更有效',
    icon: ASSETS.iconSparkle,
  },
];

export function HomePage() {
  return (
    <div className={styles.page}>
      <Header activeTab="home" />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroBlur} aria-hidden />
          <div className={styles.heroInner}>
            <div className={styles.pill}>
              <span className={styles.pillDot} />
              <span>现已支持主流招聘平台</span>
            </div>
            <h1 className={styles.title}>一键好运</h1>
            <p className={styles.desc}>告别重复输入。管理多版本简历，精准自动填充中国各大招聘平台表单，让您的求职更从容、更有效。</p>
            <div className={styles.actions}>
              <Link to="/login" className={styles.primaryBtn}>
                立即免费开始
                <img src={ASSETS.iconArrowUp} alt="" />
              </Link>
              <Link to="/library" className={styles.secondaryBtn}>
                <img src={ASSETS.iconIn} alt="" />
                管理简历库
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featuresInner}>
            {features.map((item) => (
              <article key={item.title} className={styles.card}>
                <div className={styles.iconWrap}>
                  <img src={item.icon} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
