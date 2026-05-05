import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const [resourcesDisplay, setResourcesDisplay] = useState(false);
  const [eventDisplay, setEventDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const toggleNavbar = () => setNavMenu(!navMenu);
  const toggleResources = () => {
    setAboutDisplay(false);
    setEventDisplay(false);
    setResourcesDisplay(!resourcesDisplay);
  };
  const toggleEvent = () => {
    setAboutDisplay(false);
    setResourcesDisplay(false);
    setEventDisplay(!eventDisplay);
  };
  const toggleAbout = () => {
    setEventDisplay(false);
    setResourcesDisplay(false);
    setAboutDisplay(!aboutDisplay);
  };

  const isActive = (path) => router.pathname === path ? styles['project-active'] : '';

  return (
    <>
      <div className={styles['navbar-container']}>
        <Link to='/'>
          <div className={styles['logo-container']}>
            <img src='/assets/logo.png' alt='logo' />
          </div>
        </Link>

        <ul className={styles['nav-links']}>
          <li className={styles['nav-link']}>
            <Link to='/'>HOME</Link>
          </li>
          <li onClick={toggleAbout} className={styles['nav-link']}>
            <Link to='' className={aboutDisplay ? styles['project-active'] : ''}>
              ABOUT
            </Link>
            {aboutDisplay ? (
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='m4.9 8-3 3 3 3-3 3-3-3 3-3-3-3 3-3z' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M8 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' transform='rotate(90 8 8)' />
              </svg>
            )}
          </li>
          <li className={styles['nav-link']}>
            <Link to='/events'>EVENTS</Link>
          </li>
          <li className={styles['nav-link']}>
            <Link to='/giving'>GIVING</Link>
          </li>
          <li onClick={toggleResources} className={styles['nav-link']}>
            <Link to='' className={resourcesDisplay ? styles['project-active'] : ''}>
              WBC COMMUNITY
            </Link>
            {resourcesDisplay ? (
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='m4.9 8-3 3 3 3-3 3-3-3 3-3-3-3 3-3z' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M8 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' transform='rotate(90 8 8)' />
              </svg>
            )}
          </li>
          <li className={styles['nav-link']}>
            <Link to='/contact'>CONTACT</Link>
          </li>
        </ul>

        <div className={styles['hamburger-btn']}>
          {navMenu ? (
            <div className={styles['toggle-btn']} onClick={toggleNavbar}>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </div>
          ) : (
            <div className={styles['toggle-btn']} onClick={toggleNavbar}>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M2.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z' transform='rotate(90 8 8)' />
              </svg>
            </div>
          )}
        </div>
      </div>

      {aboutDisplay && (
        <div className={styles['about-container']}>
          <ul>
            <li className={styles['project-list']}>
              <Link to='/about-the-church'>ABOUT THE CHURCH</Link>
            </li>
            <li className={styles['project-list']}>
              <Link to='/ministries'>MINISTRIES</Link>
            </li>
            <li className={styles['project-list']}>
              <Link to='/ministers'>MINISTERS</Link>
            </li>
            <li className={styles['project-list']}>
              <Link to='/diaconates'>DIACONATES</Link>
            </li>
          </ul>
        </div>
      )}

      {eventDisplay && <div className={styles['projects-container']}></div>}

      {resourcesDisplay && (
        <div className={styles['resources-container']}>
          <ul>
            <li className={styles['project-list']}>
              <Link to='/winnersbc-career'>WINNERS BC CAREERS</Link>
            </li>
            <li className={styles['project-list']}>
              <Link to='/winners-fc'>WINNERS FC</Link>
            </li>
          </ul>
        </div>
      )}

      {navMenu && (
        <div className={styles['navbar-dropDown']}>
          <ul className={styles['mobile-nav-links']}>
            <li className={styles['nav-link']}>
              <Link to='/'>HOME</Link>
            </li>
            <li onClick={toggleAbout} className={styles['nav-link']}>
              <Link to='' className={aboutDisplay ? styles['project-active'] : ''}>
                ABOUT
              </Link>
              {aboutDisplay ? (
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                  <path d='m4.9 8-3 3 3 3-3 3-3-3 3-3-3-3 3-3z' />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                  <path d='M8 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' transform='rotate(90 8 8)' />
                </svg>
              )}
            </li>
            {aboutDisplay && (
              <li className={styles['nav-sub-link']}>
                <Link to='/about-the-church'>ABOUT THE CHURCH</Link>
              </li>
            )}
            {aboutDisplay && (
              <li className={styles['nav-sub-link']}>
                <Link to='/ministries'>MINISTRIES</Link>
              </li>
            )}
            {aboutDisplay && (
              <li className={styles['nav-sub-link']}>
                <Link to='/ministers'>MINISTERS</Link>
              </li>
            )}
            {aboutDisplay && (
              <li className={styles['nav-sub-link']}>
                <Link to='/diaconates'>DIACONATES</Link>
              </li>
            )}
            <li onClick={toggleEvent} className={styles['nav-link']}>
              <Link to='/events' className={eventDisplay ? styles['project-active'] : ''}>
                EVENTS
              </Link>
              {eventDisplay ? (
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                  <path d='m4.9 8-3 3 3 3-3 3-3-3 3-3-3-3 3-3z' />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                  <path d='M8 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' transform='rotate(90 8 8)' />
                </svg>
              )}
            </li>
            <li onClick={toggleResources} className={styles['nav-link']}>
              <Link to='' className={resourcesDisplay ? styles['project-active'] : ''}>
                WBC COMMUNITY
              </Link>
              {resourcesDisplay ? (
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                  <path d='m4.9 8-3 3 3 3-3 3-3-3 3-3-3-3 3-3z' />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                  <path d='M8 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' transform='rotate(90 8 8)' />
                </svg>
              )}
            </li>
            {resourcesDisplay && (
              <li className={styles['nav-sub-link']}>
                <Link to='/winnersbc-career'>WINNERS BC CAREER</Link>
              </li>
            )}
            {resourcesDisplay && (
              <li className={styles['nav-sub-link']}>
                <Link to='/winners-fc'>WINNERS FC</Link>
              </li>
            )}
            <li className={styles['nav-link']}>
              <Link to='/giving'>GIVING</Link>
            </li>
            <li className={styles['nav-link']}>
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
