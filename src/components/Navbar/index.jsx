import { useState, useEffect, useRef } from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
const languages = [
  {
    label: 'Svenska',
    flag: 'SE',
    lang: 'se',
  },
  {
    label: 'English',
    flag: 'GB',
    lang: 'en',
  },
];
const Navbar = () => {
  const [showLangDropDown, setShowLangDropDown] = useState(false);
  const [language, setLanguage] = useState(languages[1]);
  const dropdownRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLangDropDown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  function handleLangDrop() {
    setShowLangDropDown((prev) => !prev);
  }

  function handleLangSelect(lang) {
    const selectedLanguage = languages.find((l) => l.label === lang);
    if (selectedLanguage) {
      changeLanguage(selectedLanguage.lang);
      setLanguage(selectedLanguage);
      setShowLangDropDown(false);
    }
  }

  return (
    <nav className="navigation-out">
      <header className="navigation-header">
        <section className="navigation-section">
          {/* Logo */}
          <div className="logoa">
            <a href="/">
              <img
                alt="Logo"
                className="navigation-logo"
                src="https://storage.123fakturera.se/public/icons/diamond.png"
              />
            </a>
          </div>

          {/* Mobile menu hamburger icon */}
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

          {/* Mobile  menu */}
          <div className="navigation-menu-bar">
            <div className="menu-drop-down">
              <div className="menu-drop-down-container">
                {[
                  { label: t('home'), href: '/index.html' },
                  { label: t('order'), href: '/bestall.html' },
                  { label: t('customer'), href: '/kunder.html' },
                  { label: t('about'), href: '/omoss.html' },
                  { label: t('contact'), href: '/kontaktaoss.html' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    className="menu-drop-down-item"
                    href={`https://www.123fakturera.se${href}`}
                  >
                    <span className="collectionSpan">
                      <span className="menu-item-name">{label}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* desktop navbar with language select */}
            <div className="pc-menu">
              {[
                { label: t('home'), href: '/index.html' },
                { label: t('order'), href: '/bestall.html' },
                { label: t('customer'), href: '/kunder.html' },
                { label: t('about'), href: '/omoss.html' },
                { label: t('contact'), href: '/kontaktaoss.html' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  className="pc-menu-items"
                  href={`https://www.123fakturera.se${href}`}
                >
                  <span className="collectionSpan">
                    <span className="collectionitem">{label}</span>
                  </span>
                </a>
              ))}
            </div>

            <button className=" lang-select-btn  language-pc-menu-items" onClick={handleLangDrop}>
              <div className="language-title-box">
                <span className="language-name">{language.label}</span>
                <img
                  src={`https://storage.123fakturere.no/public/flags/${language.flag}.png`}
                  className="flag-icon drop-down-image"
                  alt={language.label}
                />
              </div>
              {/* Language dropdowns */}
            </button>
            {showLangDropDown && (
              <div
                className={`lang-drop-wrapper ${showLangDropDown ? 'open' : ''}`}
                ref={dropdownRef}
              >
                <div className="lang-drop-container">
                  <div className="dropdownList">
                    {languages.map(({ label, flag }) => (
                      <div
                        key={label}
                        className={`language-${label} drop-down-element`}
                        onClick={() => handleLangSelect(label)}
                      >
                        <div className="drop-down-lang-name">{label}</div>
                        <div className="drop-down-image-div">
                          <img
                            src={`https://storage.123fakturere.no/public/flags/${flag}.png`}
                            className="drop-down-image"
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
        </section>
      </header>
    </nav>
  );
};

export default Navbar;
