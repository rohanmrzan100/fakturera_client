import PricelistComp from '../../components/Pricelist';
import SideNav from '../../components/SideNav';
import styles from './index.module.css';

const Pricelist = () => {
  return (
    <div className={styles.pricelistMain}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <img
            src="https://connectuni.ai/assets/images/avatars/avatar_12.jpg"
            className={styles.avatar}
            alt="avatar"
          ></img>

          <div>
            <h3>John Andre</h3>
            <p>Storfjord AS</p>
          </div>
        </div>

        <div className="open-menu-dds">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="navigation-svg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </div>

        <div className={styles.headerActions}>
          <p>English</p>
          <img
            src="https://storage.123fakturere.no/public/flags/GB.png"
            alt="Eng"
            className={styles.flag}
          />
        </div>
      </header>

      <div className={styles.container}>
        <SideNav />
        <PricelistComp />
      </div>
    </div>
  );
};

export default Pricelist;
