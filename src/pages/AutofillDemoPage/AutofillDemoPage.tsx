import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ASSETS } from '../../assets/constants';
import styles from './AutofillDemoPage.module.css';

const summaryRows = [
  ['教育背景要点', '某重点高校 · 计算机科学 · 荣誉毕业生'],
  ['核心技能要点', '精通 Python/React, 具备 2 年 AI 产品设计经验'],
  ['项目经历要点', '曾主导千万级用户社交 App 的需求分析与迭代'],
  ['实习经历要点', '某头部互联网公司 6 个月产品经理实习经验'],
  ['求职方向总结', '目标定位：中高级产品经理 / AI 创新业务'],
];

const fields = ['最高学历背景', '专业技能描述', '项目背景摘要', '关键优势提炼'];

export function AutofillDemoPage() {
  return (
    <div className={styles.page}>
      <Header activeTab="demo" />

      <main className={styles.main}>
        <section className={styles.container}>
          <h1>智能填写演示</h1>
          <p className={styles.desc}>实时预览您的 AI 简历摘要如何精准映射到各种复杂的招聘表单中。</p>

          <div className={styles.divider} />

          <div className={styles.badge}>AI 智能提炼与映射演示</div>

          <div className={styles.headRow}>
            <div>
              <h2>简历智能摘要演示</h2>
              <p>上传简历后，系统将自动提炼关键背景与技能要点，并精准映射至招聘表单。此演示展示了 AI 如何理解并转化您的简历内容。</p>
            </div>
            <button type="button" className={styles.actionBtn}>⚡ 演示智能提炼与映射</button>
          </div>

          <div className={styles.cards}>
            <article className={styles.summaryCard}>
              <header>
                <div className={styles.summaryTitle}>
                  <img src={ASSETS.iconCheck} alt="" />
                  <div>
                    <h3>AI 智能提炼摘要</h3>
                    <p>EXTRACTED KEY POINTS</p>
                  </div>
                </div>
                <span>智能摘要</span>
              </header>

              <div className={styles.rows}>
                {summaryRows.map(([label, value]) => (
                  <div key={label} className={styles.row}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>

              <footer>“上传简历后，系统会自动为您生成上述关键点，作为后续表单填写的核心支撑。”</footer>
            </article>

            <article className={styles.mappingCard}>
              <header>
                <div className={styles.mappingTitle}>
                  <img src={ASSETS.iconSparkleSmall} alt="" />
                  <h3>智能摘要映射示意</h3>
                </div>
                <span>示例映射结果</span>
              </header>

              <div className={styles.fields}>
                {fields.map((field) => (
                  <div key={field} className={styles.fieldItem}>
                    <p>{field}</p>
                    <div>摘要生成中...</div>
                  </div>
                ))}
              </div>

              <p className={styles.mappingHint}>演示：自动提炼后可用于填写</p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
