import { useState } from 'react';
import './index.css';
const languages = [
  {
    lang: 'Svenska',
    flag: 'SE',
  },
  {
    lang: 'English',
    flag: 'GB',
  },
];
const Navbar = () => {
  const [showLangDropDown, setShowLangDropDown] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  function handleLangDrop() {
    setShowLangDropDown((prev) => !prev);
  }
  function handleLangSelect(lang) {
    const selectedLanguage = languages.find((l) => l.lang === lang);
    if (selectedLanguage) {
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
                  { label: 'Homeeee', href: '/index.html' },
                  { label: 'Order', href: '/bestall.html' },
                  { label: 'Our Customers', href: '/kunder.html' },
                  { label: 'About us', href: '/omoss.html' },
                  { label: 'Contact Us', href: '/kontaktaoss.html' },
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
                { label: 'Home', href: '/index.html' },
                { label: 'Order', href: '/bestall.html' },
                { label: 'Our Customers', href: '/kunder.html' },
                { label: 'About us', href: '/omoss.html' },
                { label: 'Contact Us', href: '/kontaktaoss.html' },
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

              <button className="pc-menu-items language-pc-menu-items" onClick={handleLangDrop}>
                <div className="language-title-box">
                  <span className="language-name">{language.lang}</span>
                  <img
                    src={`https://storage.123fakturere.no/public/flags/${language.flag}.png`}
                    className="flag-icon drop-down-image"
                    alt={language.lang}
                  />
                </div>
              </button>
            </div>

            {/* Language dropdowns */}
            {showLangDropDown && (
              <div className="lang-drop">
                <div className="lang-drop-container">
                  <div className="dropdownList">
                    {languages.map(({ lang, flag }) => (
                      <div
                        key={lang}
                        className={`language-${lang} drop-down-element`}
                        onClick={() => handleLangSelect(lang)}
                      >
                        <div className="drop-down-lang-name">{lang}</div>
                        <div className="drop-down-image-div">
                          <img
                            src={`https://storage.123fakturere.no/public/flags/${flag}.png`}
                            className="drop-down-image"
                            alt={lang}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="lang-dropk" onClick={handleLangDrop}>
              <div className="dropdownContainer">
                <div className="language-box">
                  <span className="flag-name collectionitem">English</span>
                  <img
                    src="https://storage.123fakturere.no/public/flags/GB.png"
                    className="icon-flag-nav"
                    alt="English"
                  />
                </div>
                {showLangDropDown && (
                  <div className="dropdownList">
                    {languages.map(({ lang, flag }) => (
                      <div key={lang} className={`language-${lang} drop-down-element`}>
                        <div className="drop-down-lang-name">{lang}</div>
                        <div className="drop-down-image-div">
                          <img
                            src={`https://storage.123fakturere.no/public/flags/${flag}.png`}
                            className="drop-down-image"
                            alt={lang}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </header>
    </nav>
  );
};

export default Navbar;
