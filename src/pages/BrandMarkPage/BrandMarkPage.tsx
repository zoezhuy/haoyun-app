import { ASSETS } from '../../assets/constants';
import styles from './BrandMarkPage.module.css';

export function BrandMarkPage() {
  return (
    <main className={styles.page}>
      <img src={ASSETS.logoStandalone} alt="好运图标" className={styles.logo} />
    </main>
  );
}
