import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assests/logo.png';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [resourcesDisplay, setResourcesDisplay] = useState(false);
  const [eventDisplay, setEventDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const toggleNavbar = () => {
    setNavMenu(!navMenu);
  };
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
  return (
    <>
      <div className={styles['navbar-container']}>
        <NavLink to='/'>
          <div className={styles['logo-container']}>
            <img src={logo} alt='logo' />
          </div>
        </NavLink>

        <ul className={styles['nav-links']}>
          <li className={styles['nav-link']}>
            {' '}
            <NavLink to='/'>HOME</NavLink>{' '}
          </li>
          <li onClick={toggleAbout} className={styles['nav-link']}>
            {' '}
            <NavLink
              to=''
              className={
                aboutDisplay === true ? `${styles['project-active']}` : ''
              }
            >
              ABOUT
            </NavLink>
            {aboutDisplay ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                style={{ color: '#106fb8' }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: '#74c0fc' }}
              />
            )}
          </li>
          <li onClick={toggleEvent} className={styles['nav-link']}>
            {' '}
            <NavLink
              to=''
              className={
                eventDisplay === true ? `${styles['project-active']}` : ''
              }
            >
              EVENTS
            </NavLink>
            {eventDisplay ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                style={{ color: '#106fb8' }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: '#74c0fc' }}
              />
            )}
          </li>
          <li onClick={toggleResources} className={styles['nav-link']}>
            {' '}
            <NavLink
              to=''
              className={
                resourcesDisplay === true ? `${styles['project-active']}` : ''
              }
            >
              RESOURCES
            </NavLink>
            {resourcesDisplay ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                style={{ color: '#106fb8' }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: '#74c0fc' }}
              />
            )}
          </li>
          <li className={styles['nav-link']}>
            {' '}
            <NavLink to='/giving'>GIVING</NavLink>{' '}
          </li>

          <li className={styles['nav-link']}>
            {' '}
            <NavLink to='/contact'> CONTACT</NavLink>
          </li>
        </ul>

        <div className={styles['hamburger-btn']}>
          {navMenu ? (
            <div className={styles['toggle-btn']} onClick={toggleNavbar}>
              <FontAwesomeIcon icon={faXmark} style={{ color: '#74C0FC' }} />
            </div>
          ) : (
            <div className={styles['toggle-btn']} onClick={toggleNavbar}>
              <FontAwesomeIcon icon={faBars} style={{ color: '#74C0FC' }} />
            </div>
          )}{' '}
        </div>
      </div>

      {aboutDisplay && (
        <div className={styles['about-container']}>
          <ul>
            <li className={styles['project-list']}>
              {' '}
              <NavLink to='/about-the-church'>ABOUT THE CHURCH</NavLink>{' '}
            </li>
            <li className={styles['project-list']}>
              {' '}
              <NavLink to='/ministries'>MINISTRIES</NavLink>{' '}
            </li>
            <li className={styles['project-list']}>
              {' '}
              <NavLink to='/ministers'>MINISTERS</NavLink>{' '}
            </li>
            <li className={styles['project-list']}>
              {' '}
              <NavLink to='/diaconates'>DIACONATES</NavLink>{' '}
            </li>
          </ul>
        </div>
      )}

      {eventDisplay && (
        <div className={styles['projects-container']}>
          <ul>
            <li className={styles['project-list']}>
              {' '}
              <NavLink to='/projects/solar-borehole'>
                ABOUT THE CHURCH
              </NavLink>{' '}
            </li>
            <li className={styles['project-list']}>
              {' '}
              <NavLink to='/projects/empowerment-project'>
                MINISTERIES
              </NavLink>{' '}
            </li>
            <li className={styles['project-list']}>
              {' '}
              <NavLink to='/projects/empowerment-project'>
                MINISTERS
              </NavLink>{' '}
            </li>
            <li className={styles['project-list']}>
              {' '}
              <NavLink to='/projects/empowerment-project'>
                DIACONATES
              </NavLink>{' '}
            </li>
          </ul>
        </div>
      )}

      {resourcesDisplay && (
        <div className={styles['resources-container']}>
          <ul>
            <li className={styles['project-list']}>
              {' '}
              <NavLink to='/projects/solar-borehole'>
                Our Resources
              </NavLink>{' '}
            </li>
            <li className={styles['project-list']}>
              {' '}
              <NavLink to='/projects/empowerment-project'>
                all resource
              </NavLink>{' '}
            </li>
          </ul>
        </div>
      )}

      {navMenu && (
        <div className={styles['navbar-dropDown']}>
          <ul className={styles['mobile-nav-links']}>
            <li className={styles['nav-link']}>
              {' '}
              <NavLink to='/'>Home</NavLink>{' '}
            </li>
            <li onClick={toggleAbout} className={styles['nav-link']}>
              {' '}
              <NavLink
                to=''
                className={
                  aboutDisplay === true ? `${styles['project-active']}` : ''
                }
              >
                About
              </NavLink>
              {aboutDisplay ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ color: '#106fb8' }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: '#74c0fc' }}
                />
              )}
            </li>
            {aboutDisplay && (
              <li className={styles['nav-sub-link']}>
                {' '}
                <NavLink to=''>lorem</NavLink>{' '}
              </li>
            )}
            {aboutDisplay && (
              <li className={styles['nav-sub-link']}>
                {' '}
                <NavLink to=''>ipsum</NavLink>{' '}
              </li>
            )}
            <li onClick={toggleEvent} className={styles['nav-link']}>
              {' '}
              <NavLink
                to=''
                className={
                  eventDisplay === true ? `${styles['project-active']}` : ''
                }
              >
                Events
              </NavLink>
              {eventDisplay ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ color: '#106fb8' }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: '#74c0fc' }}
                />
              )}
            </li>
            {eventDisplay && (
              <li className={styles['nav-sub-link']}>
                {' '}
                <NavLink to=''>lorem</NavLink>{' '}
              </li>
            )}
            {eventDisplay && (
              <li className={styles['nav-sub-link']}>
                {' '}
                <NavLink to=''>ipsum</NavLink>{' '}
              </li>
            )}
            <li onClick={toggleResources} className={styles['nav-link']}>
              {' '}
              <NavLink
                to=''
                className={
                  resourcesDisplay === true ? `${styles['project-active']}` : ''
                }
              >
                Resources
              </NavLink>
              {resourcesDisplay ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  style={{ color: '#106fb8' }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: '#74c0fc' }}
                />
              )}
            </li>
            {resourcesDisplay && (
              <li className={styles['nav-sub-link']}>
                {' '}
                <NavLink to=''>Lorem</NavLink>{' '}
              </li>
            )}
            {resourcesDisplay && (
              <li className={styles['nav-sub-link']}>
                {' '}
                <NavLink to=''>ipsum</NavLink>{' '}
              </li>
            )}
            <li className={styles['nav-link']}>
              {' '}
              <NavLink to='giving'>Giving</NavLink>{' '}
            </li>

            <li className={styles['nav-link']}>
              {' '}
              <NavLink to='/contact'> Contact</NavLink>
            </li>
          </ul>
          {/* <ul className={styles["mobile-nav-links"]}>
            <li className={styles["nav-link"]}>
              {" "}
              <NavLink to="/about-us"> About Us</NavLink>{" "}
            </li>
            <li className={styles["nav-link"]}>
              {" "}
              <NavLink to="/volunteer">Volunteer</NavLink>{" "}
            </li>
            <li onClick={toggleProject} className={styles["nav-link"]}>
              {" "}
              <span
                className={
                  projectDisplay === true ? `${styles["project-active"]}` : ""
                }
              >
                Projects
              </span>
              {projectDisplay ? (
                <img src="/dropup_btn.svg" alt="dropdown_icon" />
              ) : (
                <img src="/dropdown_btn.svg" alt="dropdown_icon" />
              )}
            </li>
            
            <li className={styles["nav-link"]}>
              {" "}
              <NavLink to="/contact-us">Contact Us</NavLink>{" "}
            </li>
            <li className={styles["nav-link"]}>
              {" "}
              <NavLink to="/events">Events</NavLink>{" "}
            </li>
            <li className={styles["nav-link"]}>
              {" "}
              <NavLink to="/blog-posts">Blog</NavLink>{" "}
            </li>
          </ul> */}
        </div>
      )}
    </>
  );
};

export default Navbar;
