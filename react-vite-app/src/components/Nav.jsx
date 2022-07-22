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

const Nav = ({tik}) => {
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
        //
        // Burger menu custom styles
        //
        .bm-burger-button {
          position: fixed;
          width: 36px;
          height: 30px;
          top: 36px;
          right: 36px;
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
      <Menu
        isOpen={open}
        onStateChange={(e) => {
          // console.log(e);
          setOpen(e.isOpen);
        }}
        right={true}
      >
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/work'}>Work</Link>
        {/* <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a id="work" className="menu-item" href="/work">
          Work
        </a> */}
      </Menu>
    </div>
  );
};

export {Nav};
