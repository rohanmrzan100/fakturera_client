import React from 'react';
import {
  FaFileInvoice,
  FaUsers,
  FaCog,
  FaBook,
  FaTag,
  FaLayerGroup,
  FaMoneyBillAlt,
  FaClipboardList,
  FaBoxes,
  FaUserFriends,
  FaCloudUploadAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import styles from './index.module.css';

const menuItems = [
  { label: 'Invoices', icon: <FaFileInvoice color="#ACFBFF" /> },
  { label: 'Customers', icon: <FaUsers color="#25FAC0" /> },
  { label: 'My Business', icon: <FaCog color="#25FAC0" /> },
  { label: 'Invoice Journal', icon: <FaBook color="#56DBFA" /> },
  { label: 'Price List', icon: <FaTag color="#FDA027" /> },
  { label: 'Multiple Invoicing', icon: <FaLayerGroup color="#FDA027" /> },
  { label: 'Unpaid Invoices', icon: <FaMoneyBillAlt color="#F85FA0" /> },
  { label: 'Offer', icon: <FaClipboardList color="#F85FA0" /> },
  { label: 'Inventory Control', icon: <FaBoxes color="#9EDEE0" />, disabled: true },
  { label: 'Member Invoicing', icon: <FaUserFriends color="#5CC1FF" />, disabled: true },
  { label: 'Import/Export', icon: <FaCloudUploadAlt color="#7FAEF4" /> },
  { label: 'Log out', icon: <FaSignOutAlt color="#C4FAEC" /> },
];

const SideNav = () => {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.menuHeader}>Menu</h3>
      <div className={styles.divider}></div>
      <ul className={styles.navList}>
        {menuItems.map((item, idx) => (
          <li key={idx} className={`${styles.navItem} ${item.disabled ? styles.disabled : ''}`}>
            {idx == 4 && <div className={styles.greenDot}></div>}
            <span className={styles.icon}>{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideNav;
