import { Link } from 'react-router-dom';
import { ASSETS } from '../../assets/constants';
import styles from './ExtensionPopup.module.css';

export function ExtensionPopup() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <Link to="/" className={styles.brand}>
            <img src={ASSETS.logoPopup} alt="" className={styles.logo} />
            <div className={styles.brandText}>
              <h2>好运</h2>
              <p>求职好运从现在开始</p>
            </div>
          </Link>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>运行中</span>
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.resumeCard}>
          <div className={styles.resumeCardHeader}>
            <div className={styles.resumeCardBrand}>
              <div className={styles.resumeIcon}>
                <img src={ASSETS.popupDoc} alt="" />
              </div>
              <div>
                <p className={styles.resumeTitle}>产品经理版简历</p>
                <p className={styles.resumeDate}>更新于 2024.03.10</p>
              </div>
            </div>
            <span className={styles.coreTag}>核心</span>
          </div>
          <div className={styles.resumeCardBody}>
            <div className={styles.resumeField}>
              <span className={styles.resumeFieldLabel}>姓名</span>
              <span className={styles.resumeFieldValue}>张好运</span>
            </div>
            <div className={styles.resumeField}>
              <span className={styles.resumeFieldLabel}>学校</span>
              <span className={styles.resumeFieldValue}>华中科技大学</span>
            </div>
            <div className={`${styles.resumeField} ${styles.resumeFieldFull}`}>
              <span className={styles.resumeFieldLabel}>核心技能</span>
              <span className={`${styles.resumeFieldValue} ${styles.resumeFieldValueMuted}`}>
                数据分析、Axure、需求拆解...
              </span>
            </div>
          </div>
        </div>

        <div className={styles.formNotice}>
          <div className={styles.formNoticeIcon}>
            <img src={ASSETS.popupFormRecognized} alt="" />
          </div>
          <div>
            <p className={styles.formNoticeTitle}>已识别到申请表单</p>
            <p className={styles.formNoticeSub}>发现 12 个可填入字段</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.primaryBtn}>
            <img src={ASSETS.popupLightning} alt="" />
            立即开始自动填写
          </button>
          <div className={styles.secondaryRow}>
            <button type="button" className={styles.secondaryBtn}>
              <img src={ASSETS.popupSwitch} alt="" />
              切换简历
            </button>
            <button type="button" className={styles.secondaryBtn}>
              <img src={ASSETS.popupFullPage} alt="" />
              完整页面
              <img src={ASSETS.popupExternal} alt="" />
            </button>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinkGroup}>
            <a href="#" className={styles.footerLink}>
              <img src={ASSETS.popupSettings} alt="" />
              设置
            </a>
            <a href="#" className={styles.footerLink}>
              <img src={ASSETS.popupHelp} alt="" />
              帮助
            </a>
          </div>
          <Link to="/" className={styles.footerLink}>
            管理简历库
            <img src={ASSETS.popupArrow} alt="" />
          </Link>
        </div>
        <div className={styles.userBar}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
              <img src={ASSETS.popupUser} alt="" />
            </div>
            <span className={styles.userEmail}>已登录：lucky@pm.com</span>
          </div>
          <span className={styles.vipBadge}>VIP 剩余 22 天</span>
        </div>
      </footer>
    </div>
    </div>
  );
}
