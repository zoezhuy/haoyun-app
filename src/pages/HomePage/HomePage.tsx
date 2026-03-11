import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { ASSETS } from '../../assets/constants';
import styles from './HomePage.module.css';

const DocIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const resumeCards = [
  { id: '1', title: '产品经理版简历', date: '2026年3月5日', active: true },
  { id: '2', title: 'UX 设计版简历', date: '2026年3月3日', active: false },
  { id: '3', title: 'AI 产品版简历', date: '2026年2月28日', active: false },
];

export function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroBlur} aria-hidden />
          <div className={styles.heroInner}>
            <div className={styles.heroPill}>
              <span className={styles.heroPillDot} />
              <span className={styles.heroPillText}>现已支持主流招聘平台</span>
            </div>
            <h1 className={styles.heroTitle}>一键好运</h1>
            <p className={styles.heroDesc}>
              告别重复输入。管理多版本简历，精准自动填充中国各大招聘平台表单，让您的求职更从容、更有效。
            </p>
            <div className={styles.heroActions}>
              <Link to="/login" className={styles.heroBtnPrimary}>
                立即免费开始
                <img src={ASSETS.iconArrowUp} alt="" className={styles.heroBtnIcon} />
              </Link>
              <button type="button" className={styles.heroBtnSecondary}>
                <img src={ASSETS.iconIn} alt="" className={styles.heroBtnIcon} />
                管理简历库
              </button>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <img src={ASSETS.iconUpload} alt="" />
              </div>
              <h3 className={styles.featureTitle}>上传多个简历</h3>
              <p className={styles.featureDesc}>支持上传多个不同版本的简历</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <img src={ASSETS.iconCheck} alt="" />
              </div>
              <h3 className={styles.featureTitle}>选择当前使用版本</h3>
              <p className={styles.featureDesc}>根据不同岗位选择最合适的简历</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <img src={ASSETS.iconSparkle} alt="" />
              </div>
              <h3 className={styles.featureTitle}>自动填写申请表</h3>
              <p className={styles.featureDesc}>减省更多时间，使求职更有效</p>
            </div>
          </div>
        </section>

        <section className={styles.resumeSection}>
          <div className={styles.resumeInner}>
            <div className={styles.sectionHead}>
              <div className={styles.sectionTitleBlock}>
                <h2>简历库</h2>
                <p>管理您的不同简历版本，为每个职位匹配最合适的表达。</p>
              </div>
              <button type="button" className={styles.uploadBtn}>
                <img src={ASSETS.iconUploadSmall} alt="" />
                上传新简历
              </button>
            </div>
            <div className={styles.resumeGrid}>
              {resumeCards.map((card) => (
                <div
                  key={card.id}
                  className={`${styles.resumeCard} ${card.active ? styles.resumeCardActive : ''}`}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.cardIcon}>
                      <DocIcon />
                    </div>
                    {card.active ? (
                      <span className={styles.activeBadge}>当前活动</span>
                    ) : (
                      <button type="button" className={styles.cardBtnIcon} aria-label="删除"><DeleteIcon /></button>
                    )}
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDate}>更新于 {card.date}</p>
                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      className={`${styles.cardBtn} ${card.active ? styles.cardBtnActive : ''}`}
                    >
                      {card.active ? '活动中' : '设为活动'}
                    </button>
                    <button type="button" className={styles.cardBtnIcon} aria-label="删除">
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.autofillSection}>
          <div className={styles.autofillInner}>
            <div className={styles.autofillHead}>
              <div className={styles.autofillTitleBlock}>
                <h2>自动填写演示</h2>
                <p>实时预览您的简历数据如何精准映射到繁杂的招聘表格中，全程自动，告别手动输入。</p>
              </div>
              <div className={styles.autofillActions}>
                <div>
                  <p className={styles.quotaLabel}>当前使用额度</p>
                  <p className={styles.quotaValue}>0 / 5 次免费</p>
                </div>
                <button type="button" className={styles.autofillBtn}>
                  <img src={ASSETS.iconSparkleSmall} alt="" />
                  开始自动填写
                </button>
              </div>
            </div>
            <div className={styles.demoGrid}>
              <div className={`${styles.demoCard} ${styles.demoCardSource}`}>
                <div className={styles.demoCardHeader}>
                  <span className={styles.sourceDot} />
                  <h3 className={styles.demoCardTitle}>简历来源：产品经理版</h3>
                </div>
                <div className={styles.demoRows}>
                  <div className={styles.demoRow}>
                    <span className={styles.demoLabel}>姓名</span>
                    <span className={styles.demoValue}>张明</span>
                  </div>
                  <div className={styles.demoRow}>
                    <span className={styles.demoLabel}>手机号</span>
                    <span className={styles.demoValue}>138-1234-5678</span>
                  </div>
                  <div className={styles.demoRow}>
                    <span className={styles.demoLabel}>学校</span>
                    <span className={styles.demoValue}>清华大学</span>
                  </div>
                  <div className={styles.demoRow}>
                    <span className={styles.demoLabel}>核心技能</span>
                    <span className={styles.demoValue}>产品设计、用户研究、数据分析、敏捷开发</span>
                  </div>
                </div>
              </div>
              <div className={styles.demoCard}>
                <div className={styles.demoFormHeader}>
                  <div className={styles.demoFormTitle}>
                    <img src={ASSETS.iconForm} alt="" />
                    目标职位申请表
                  </div>
                  <span className={styles.autoFillBadge}>自动填充中</span>
                </div>
                <div className={styles.demoFormLabels}>
                  <span className={styles.demoFormLabel}>姓名 *</span>
                  <span className={styles.demoFormLabel}>联系电话 *</span>
                  <span className={styles.demoFormLabel}>毕业院校</span>
                  <span className={styles.demoFormLabel}>项目经验与技能</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <div className={styles.footerBrandRow}>
                <img src={ASSETS.logo} alt="" className={styles.footerLogo} />
                <span className={styles.footerBrandName}>好运</span>
              </div>
              <p className={styles.footerTagline}>求职好运从现在开始</p>
            </div>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>隐私政策</a>
              <a href="#" className={styles.footerLink}>服务条款</a>
              <a href="#" className={styles.footerLink}>意见反馈</a>
            </div>
            <p className={styles.footerCopy}>© 2026 好运 - 让求职更有效</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
