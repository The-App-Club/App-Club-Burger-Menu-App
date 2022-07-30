import {Link} from 'react-router-dom';
import {css} from '@emotion/css';
import {
  slide as Menu,
  bubble,
  elastic,
  reveal,
  scaleRotate,
  stack,
  fallDown,
  push,
  pushRotate,
  scaleDown,
} from 'react-burger-menu';
import {useEffect, useState} from 'react';

const Nav = ({tik, isRight = false, outerContainerDomRef}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // console.log(`tik`, open);
    setOpen((open) => {
      if (open) {
        return false;
      }
      return open;
    });
  }, [tik]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        min-height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px) {
          display: block;
          justify-content: initial;
          align-items: initial;
        }

        //
        // Burger menu custom styles
        //
        .bm-burger-button {
          position: fixed;
          width: 36px;
          height: 30px;
          top: 8px;
          left: ${isRight ? 'initial' : '8px'};
          right: ${isRight ? '8px' : 'initial'};
          display: none;
          @media (max-width: 768px) {
            display: block;
          }
        }
        // Outline for burger button focus state
        .bm-burger-button button:focus {
          outline: 2px solid #c94e50;
          outline-offset: 8px;
        }
        // Background color for burger bars focus state
        .bm-burger-button {
          button:focus + span {
            span.bm-burger-bars {
              background-color: #c94e50;
            }
          }
        }
        .right .bm-burger-button {
          left: initial;
          right: 36px;
        }
        .bm-burger-bars {
          background: #373a47;
        }
        .bm-morph-shape {
          fill: #373a47;
        }
        .bm-menu {
          background: #373a47;
          a {
            color: #b8b7ad;
            &:hover,
            &:focus {
              color: #c94e50;
            }
          }
        }
        .bm-item-list a {
          padding: 0.8em;
          span {
            margin-left: 10px;
            font-weight: 700;
          }
        }
        .bm-item:focus {
          outline: none;
        }
      `}
    >
      <nav
        className={css`
          /* position: absolute;
          top: 0;
          right: 8px; */
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;

          @media (max-width: 768px) {
            display: none;
          }
        `}
      >
        <ul
          className={css`
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3rem;
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
      </nav>
      <Menu
        isOpen={open}
        onStateChange={(e) => {
          const outerContainerDom = outerContainerDomRef.current;
          if (e.isOpen) {
            outerContainerDom.classList.add('nav-active');
          } else {
            outerContainerDom.classList.remove('nav-active');
          }
          setOpen(e.isOpen);
        }}
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        right={isRight}
      >
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/price'}>Price</Link>
      </Menu>
    </div>
  );
};

export {Nav};
