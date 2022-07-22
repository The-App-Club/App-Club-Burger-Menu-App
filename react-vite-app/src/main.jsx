import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {useCallback, useState} from 'react';

import {Nav} from './components/Nav';

import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import {ContactPage} from './pages/contact';
import {WorkPage} from './pages/work';

import '@fontsource/inter';
import './styles/index.scss';
import {ScrollToTop} from './components/ScrollToTop';

const App = ({magic}) => {
  const [tik, setTik] = useState(null);

  const navCloseNotifierWhenRouting = useCallback((e) => {
    setTik(new Date());
  }, []);

  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {/* not work after build with react18 but work on dev mode */}
      <Nav tik={tik} />
      <main>
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
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App magic={0} />
  </BrowserRouter>
);
