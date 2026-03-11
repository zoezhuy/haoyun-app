import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ASSETS } from '../../assets/constants';
import styles from './ExtensionPopup.module.css';

export function ExtensionPopup() {
  return (
    <div className={styles.page}>
      <Header activeTab="preview" />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>插件遥控器预览</h1>
          <p>在网页侧边或顶部召唤“好运”插件，极简视觉风格与网页端保持高度一致，助您在任何招聘网站都能一键好运。</p>

          <div className={styles.deviceWrap}>
            <div className={styles.notch} />
            <div className={styles.device}>
              <div className={styles.popupHeader}>
                <div className={styles.brandRow}>
                  <img src={ASSETS.logoPopup} alt="好运" className={styles.logo} />
                  <div>
                    <h2>好运</h2>
                    <p>求职好运从现在开始</p>
                  </div>
                </div>
                <span className={styles.running}><span />运行中</span>
              </div>

              <div className={styles.popupBody}>
                <div className={styles.emptyCard}>
                  <div className={styles.emptyIcon}>📄</div>
                  <h3>暂无简历数据</h3>
                  <p>上传后将自动提取核心字段并展示在这里</p>
                  <button type="button">去上传</button>
                </div>

                <div className={styles.notice}>
                  <div className={styles.noticeIcon}>◎</div>
                  <div>
                    <strong>已识别到申请表单</strong>
                    <p>发现 12 个可填入字段</p>
                  </div>
                </div>

                <button type="button" className={styles.primaryAction}>⚡ 立即开始自动填写</button>
                <div className={styles.rowActions}>
                  <button type="button">切换简历</button>
                  <button type="button">完整页面 ↗</button>
                </div>
              </div>

              <div className={styles.popupFooter}>
                <div className={styles.links}>
                  <span>设置</span>
                  <span>帮助</span>
                  <span>管理简历库</span>
                </div>
                <div className={styles.account}>已登录：lucky@pm.com</div>
              </div>
            </div>
          </div>

          <p className={styles.sizeText}>尺寸演示: 360 x 560 (Chrome Extension Popup 标准)</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
