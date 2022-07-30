import {css} from '@emotion/css';
import {Link, useNavigate} from 'react-router-dom';

import logo from '../assets/logo.png';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className={css`
        min-height: 8vh;
        margin: auto;
        max-width: 30rem;
        width: 100%;
        padding: 1rem 1rem 3rem;
        position: relative;
      `}
    >
      <div
        className={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        `}
      >
        <h2
          className={css`
            padding-bottom: 0.5rem;
          `}
        >
          Malibu Nights Lion
        </h2>
        <img
          className={css`
            :hover {
              cursor: pointer;
            }
          `}
          src={logo}
          alt={``}
          width={120}
          onClick={(e) => {
            navigate('/', {
              state: {},
            });
          }}
        />
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 2rem;
        `}
      >
        <div
          className={css`
            padding-top: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 1rem;
          `}
        >
          <h3>Menu</h3>
          <ul
            className={css`
              list-style: none;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 0.5rem;
            `}
          >
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'/price'}>Price</Link>
            </li>
          </ul>
        </div>
        <div
          className={css`
            padding-top: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 1rem;
          `}
        >
          <h3>Social Link</h3>
          <ul
            className={css`
              list-style: none;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 0.5rem;
            `}
          >
            <li>
              <a
                href={`https://example.com/`}
                referrerPolicy={'no-referrer'}
                target={'_blank'}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href={`https://example.com/`}
                referrerPolicy={'no-referrer'}
                target={'_blank'}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={`https://example.com/`}
                referrerPolicy={'no-referrer'}
                target={'_blank'}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`https://example.com/`}
                referrerPolicy={'no-referrer'}
                target={'_blank'}
              >
                Pinterest
              </a>
            </li>
            <li>
              <a
                href={`https://example.com/`}
                referrerPolicy={'no-referrer'}
                target={'_blank'}
              >
                Facebook(Meta)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export {Footer};
