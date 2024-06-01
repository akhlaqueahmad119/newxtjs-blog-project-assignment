import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./sideBarDrawer.module.scss";

interface SideBarDrawerProps {
  onClose: () => void;
  open: boolean;
  header: any;
  children: any;
}

const SideBarDrawer = ({
  onClose,
  open,
  header,
  children,
}: SideBarDrawerProps) => {
  return (
    <div className={`${open && styles.drawerOpen}`}>
      <div className={`${styles.drawer} ${open ? styles.open : styles.close}`}>
        <div className={styles.drawerHeadContainer}>
          <div className={styles.drawerHeadContainer_content}>{header}</div>

          <IoCloseSharp className={styles.closebtn} onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default SideBarDrawer;
