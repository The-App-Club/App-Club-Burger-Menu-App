import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from 'react-router-dom';
import {useCallback, useRef, useState} from 'react';

import {Nav} from './components/Nav';

import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import {ContactPage} from './pages/contact';
import {WorkPage} from './pages/work';

import '@fontsource/inter';
import './styles/index.scss';
import {ScrollToTop} from './components/ScrollToTop';
import {default as Breadcrumbs} from './components/Breadcrumbs';

import {Header} from './components/Header';

const App = () => {
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
      <Nav
        tik={tik}
        isRight={true}
        outerContainerDomRef={outerContainerDomRef}
        pageName={location.pathname}
      />
      <Header notifier={navCloseNotifierWhenRouting} />
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
              path="/work"
              element={
                <WorkPage
                  pageName={location.pathname}
                  notifier={navCloseNotifierWhenRouting}
                />
              }
            />
          </Routes>
        </article>
      </main>
      <footer
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          font-size: 4rem;
        `}
      >
        Bye
      </footer>
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
