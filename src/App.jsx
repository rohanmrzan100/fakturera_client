import { useTranslation } from 'react-i18next';
import './App.css';
import Navbar from './components/Navbar';
import HtmlContent from './components/HtmlContent';

function App() {
  const handleGoBack = () => {
    return;
  };
  const { t } = useTranslation();
  return (
    <main>
      <div className="terms-container">
        <div className="background-container">
          <img
            src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
            alt=""
            id="background-image"
          />
        </div>

        <Navbar />
        {/* Terms section */}
        <div className="content">
          <section className="terms-section">
            <div className="terms-top-text">
              <h1 className="terms-heading">{t('term')}</h1>
              <button className="go-back-button" onClick={handleGoBack}>
                {t('close_go_back')}
              </button>
            </div>

            <div className="back-terms">
              <HtmlContent htmlString={t('term_text')} />
            </div>

            <div className="terms-top-text">
              <button className="go-back-button lower-back-button" onClick={handleGoBack}>
                {t('close_go_back')}
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
