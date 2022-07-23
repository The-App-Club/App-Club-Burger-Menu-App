import {css} from '@emotion/css';
import {Link} from 'react-router-dom';
import {default as Breadcrumbs} from './Breadcrumbs';
import logo from '../assets/logo.png';

const Header = ({notifier}) => {
  return (
    <header
      className={css`
        width: 100%;
        height: 70px;
        position: sticky;
        top: 0;
        z-index: 1;
        background: wheat;
      `}
    >
      <div
        className={css`
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        `}
      >
        <div
          className={css`
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            @media (max-width: 768px) {
              gap: 0.5rem;
            }
          `}
        >
          <Link to={`/`}>
            <img
              alt={'logo'}
              src={logo}
              height={60}
              className={css`
                display: block;
                padding-bottom: 3px;
              `}
            />
          </Link>
          <Breadcrumbs notifier={notifier} />
        </div>
      </div>
    </header>
  );
};

export {Header};
