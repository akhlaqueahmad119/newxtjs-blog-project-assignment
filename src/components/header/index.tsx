import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { IoSearch, IoMenu } from "react-icons/io5";
import SideBarDrawer from "./sideBarDrawer";
import { useRouter } from "next/router";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClose = () => {
    setOpenMobileNav(false);
  };

  const onOpen = (e: any) => {
    e.preventDefault();
    setOpenMobileNav(true);
  };

  const HeaderLogo = () => {
    return (
      <a className={styles.logo} href="/">
        <img src="/images/logo1.png" alt="logo1" />
        <img src="/images/logo2.png" alt="logo2" />
      </a>
    );
  };
  const NavigationMenu = () => {
    return (
      <nav>
        <ul className={styles.navList}>
          <li>Destinations</li>
          <li>Food</li>
          <li>Well Being</li>
          <li>Sport</li>
          <li>Family</li>
          <li>Lifestyle</li>
        </ul>
      </nav>
    );
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
        title ? styles.blog : ""
      }`}
    >
      <div className={styles.headerContent}>
        <HeaderLogo />
        <NavigationMenu />
        <div className={styles.search}>
          <IoSearch />
          <button className={styles.ctaButton}>
            Get Your $1200 Christmas Gift
          </button>
          <IoMenu className={styles.menuIcon} onClick={(e) => onOpen(e)} />
        </div>
      </div>
      <SideBarDrawer
        onClose={onClose}
        open={openMobileNav}
        header={<HeaderLogo />}
      >
        <NavigationMenu />
      </SideBarDrawer>
    </header>
  );
};

export default Header;
