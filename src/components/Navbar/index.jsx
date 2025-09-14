import { useState, useEffect, useRef } from 'react';
import styles from './index.module.css';
import { useTranslation } from 'react-i18next';

const languages = [
  { label: 'Svenska', flag: 'SE', lang: 'se' },
  { label: 'English', flag: 'GB', lang: 'en' },
];

const Navbar = () => {
  const [showLangDropDown, setShowLangDropDown] = useState(false);
  const [showMenuDropDown, setShowMenuDropDown] = useState(false);
  const [language, setLanguage] = useState(languages[1]);
  const dropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowLangDropDown(false);
      }
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(e.target)) {
        setShowMenuDropDown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const handleMenuClick = () => setShowMenuDropDown((p) => !p);
  const handleLangDrop = () => setShowLangDropDown((p) => !p);

  const handleLangSelect = (label) => {
    const selected = languages.find((l) => l.label === label);
    if (selected) {
      changeLanguage(selected.lang);
      setLanguage(selected);
      setShowLangDropDown(false);
    }
  };

  return (
    <nav className={styles.navigationOut}>
      <header className={styles.navigationHeader}>
        <section className={styles.navigationSection}>
          <div className={styles.logoa}>
            <a href="/">
              <img
                alt="Logo"
                className={styles.navigationLogo}
                src="https://storage.123fakturera.se/public/icons/diamond.png"
              />
            </a>
          </div>
          <div ref={menuDropdownRef}>
            <button className={styles.openMenuDds} onClick={handleMenuClick}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className={styles.navigationSvg}
                height="1em"
                width="1em"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </button>

            <div
              className={`${styles.menuDropDown} ${
                showMenuDropDown ? styles.slideDownActive : styles.slideDownHidden
              }`}
            >
              <div className={styles.menuDropDownContainer}>
                {[
                  { label: t('home'), href: '/index.html' },
                  { label: t('order'), href: '/bestall.html' },
                  { label: t('customer'), href: '/kunder.html' },
                  { label: t('about'), href: '/omoss.html' },
                  { label: t('contact'), href: '/kontaktaoss.html' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    className={styles.menuDropDownItem}
                    href={`https://www.123fakturera.se${href}`}
                  >
                    <span className={styles.collectionSpan}>
                      <p className={styles.menuItemName}>{label}</p>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.navigationMenuBar}>
            <div className={styles.pcMenu}>
              {[
                { label: t('home'), href: '/index.html' },
                { label: t('order'), href: '/bestall.html' },
                { label: t('customer'), href: '/kunder.html' },
                { label: t('about'), href: '/omoss.html' },
                { label: t('contact'), href: '/kontaktaoss.html' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  className={styles.pcMenuItems}
                  href={`https://www.123fakturera.se${href}`}
                >
                  <span className={styles.collectionSpan}>
                    <span className={styles.collectionitem}>{label}</span>
                  </span>
                </a>
              ))}
            </div>

            <div ref={dropdownRef}>
              <button
                className={`${styles.langSelectBtn} ${styles.languagePcMenuItems}`}
                onClick={handleLangDrop}
              >
                <div className={styles.languageTitleBox}>
                  <span className={styles.languageName}>{language.label}</span>
                  <img
                    src={`https://storage.123fakturera.se/public/flags/${language.flag}.png`}
                    className={`${styles.flagIcon} ${styles.dropDownImage}`}
                    alt={language.label}
                  />
                </div>
              </button>

              {showLangDropDown && (
                <div className={`${styles.langDropWrapper} ${showLangDropDown ? styles.open : ''}`}>
                  <div className={styles.langDropContainer}>
                    <div className={styles.dropdownList}>
                      {languages.map(({ label, flag }) => (
                        <div
                          key={label}
                          className={`${styles[`language${label}`]} ${styles.dropDownElement}`}
                          onClick={() => handleLangSelect(label)}
                        >
                          <div className={styles.dropDownLangName}>{label}</div>
                          <div className={styles.dropDownImageDiv}>
                            <img
                              src={`https://storage.123fakturera.se/public/flags/${flag}.png`}
                              className={styles.dropDownImage}
                              alt={label}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </header>
    </nav>
  );
};

export default Navbar;
