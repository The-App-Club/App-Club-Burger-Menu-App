import {Link} from 'react-router-dom';
import {memo, useMemo} from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {css} from '@emotion/css';

const Breadcrumbs = ({notifier}) => {
  const routes = useMemo(() => {
    return [
      {
        path: `/`,
        breadcrumb: `top`,
        props: {
          pageName: `/`,
          notifier,
        },
      },
      {
        path: `/about`,
        breadcrumb: `about`,
        props: {
          pageName: `/about`,
          notifier,
        },
      },
      {
        path: `/contact`,
        breadcrumb: `contact`,
        props: {
          pageName: `/contact`,
          notifier,
        },
      },
      {
        path: `/work`,
        breadcrumb: `work`,
        props: {
          pageName: `/work`,
          notifier,
        },
      },
    ];
  }, [notifier]);

  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <>
      {breadcrumbs.map(({match, breadcrumb}, index) => {
        return (
          <span
            key={match.pathname}
            className={css`
              display: inline-flex;
              align-items: center;
              gap: 0.6rem;
              @media (max-width: 768px) {
                gap: 0.5rem;
              }
            `}
          >
            {index === 0 ? null : (
              <span
                className={css`
                  display: inline-block;
                  width: 10px;
                `}
              >
                >
              </span>
            )}
            <Link
              to={match.pathname}
              className={css`
                color: black;
                text-decoration: none;
              `}
            >
              {breadcrumb}
            </Link>
          </span>
        );
      })}
    </>
  );
};

export default memo(Breadcrumbs);
