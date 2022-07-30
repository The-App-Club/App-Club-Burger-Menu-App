import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import {useEffect, useCallback, useMemo, useRef, useState} from 'react';
import {Button} from '@mui/material';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import {ScrollToTop} from './components/ScrollToTop';
import {Nav} from './components/Nav';

import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import {ContactPage} from './pages/contact';
import {PricePage} from './pages/price';

import logo from './assets/logo.png';

import data from './data/dump';
import '@fontsource/inter';
import './styles/index.scss';
import {Footer} from './components/Footer';

const App = () => {
  const navigate = useNavigate();

  const outerContainerDomRef = useRef(null);
  const [tik, setTik] = useState(null);

  const navCloseNotifierWhenRouting = useCallback((e) => {
    setTik(new Date());
  }, []);

  const location = useLocation();

  return (
    <div
      ref={outerContainerDomRef}
      id="outer-container"
      className={css`
        position: absolute;
        width: 100%;
        &.nav-active {
          touch-action: none;
          overflow: hidden;
          height: 100%;
        }
      `}
    >
      <ScrollToTop />
      <header
        className={css`
          background: wheat;
          position: sticky;
          width: 100%;
          top: 0;
          z-index: 1;
        `}
      >
        <div
          className={css`
            position: relative;
            width: 100%;
          `}
        >
          <div
            className={css`
              z-index: 1;
              position: absolute;
              top: 0;
              left: -16px;
              display: flex;
              justify-content: center;
              align-items: center;
              :hover {
                cursor: pointer;
              }
            `}
            onClick={(e) => {
              navigate('/', {
                state: {},
              });
            }}
          >
            <img src={logo} alt={`logo`} height={50} />
            <h5 className={css`
              margin-left: -1rem;
              font-size: 1.2rem;
              @media (max-width: 768px) {
                font-size: 0.85rem;
        }
            `}>Malibu Nights Lion</h5>
          </div>
          <Nav
            tik={tik}
            isRight={true}
            outerContainerDomRef={outerContainerDomRef}
          />
        </div>
      </header>
      <main
        id="page-wrap"
        className={css`
          width: 100%;
          height: 100%;
        `}
      >
        <article>
          <Routes location={location}>
            <Route
              path="/"
              element={
                <HomePage
                  pageName={location.pathname}
                  notifier={navCloseNotifierWhenRouting}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  pageName={location.pathname}
                  notifier={navCloseNotifierWhenRouting}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactPage
                  pageName={location.pathname}
                  notifier={navCloseNotifierWhenRouting}
                />
              }
            />
            <Route
              path="/price"
              element={
                <PricePage
                  pageName={location.pathname}
                  notifier={navCloseNotifierWhenRouting}
                />
              }
            />
          </Routes>
        </article>
      </main>
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
