import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, profilePhoto, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { useImageViewer } from './ImageViewer';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const { openImage } = useImageViewer() || {};

  const toggleResume = () => {
    const resumeUrl = `${import.meta.env.BASE_URL}yoenzhang.pdf`;
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => {
    const baseColor = isSecondary ? 'text-secondary' : 'text-ink';
    const linksExceptContact = navLinks.filter((l) => l.id !== 'contact');
    const contactLink = navLinks.find((l) => l.id === 'contact');

    return (
      <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>
        {linksExceptContact.map((link) => (
          <li
            key={link.id}
            className={`${active === link.title ? 'text-ink' : baseColor} hover:text-ink text-[20px] font-medium cursor-pointer`}
            onClick={() => {
              setActive(link.title);
              if (isSecondary) setToggle(false);
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
        <li className={`${baseColor} hover:text-ink text-[20px] font-medium cursor-pointer`}>
          <button onClick={toggleResume}>Resume</button>
        </li>
        {contactLink && (
          <li
            key={contactLink.id}
            className={`${active === contactLink.title ? 'text-ink' : baseColor} hover:text-ink text-[20px] font-medium cursor-pointer`}
            onClick={() => {
              setActive(contactLink.title);
              if (isSecondary) setToggle(false);
            }}
          >
            <a href={`#${contactLink.id}`}>{contactLink.title}</a>
          </li>
        )}
      </ul>
    );
  };

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img
              src={profilePhoto}
              alt="Yoen Zhang"
              onClick={(e) => {
                e.stopPropagation();
                if (openImage) openImage(profilePhoto, "YOEN.ZHANG");
              }}
              className="w-9 h-9 rounded-full object-cover cursor-zoom-in hover:ring-2 hover:ring-[#0d8a6e] transition-all"
            />
            <Link
              to="/"
              onClick={() => {
                setActive('');
                window.scrollTo(0, 0);
              }}
            >
              <p className="text-ink text-[20px] font-bold cursor-pointer flex">
                YOEN&nbsp;
                <span className="sm:block hidden">ZHANG</span>
              </p>
            </Link>
          </div>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
                toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
