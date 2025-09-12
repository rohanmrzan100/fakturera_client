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
  { label: 'Invoices', icon: <FaFileInvoice color="#007bff" /> },
  { label: 'Customers', icon: <FaUsers color="#00bcd4" /> },
  { label: 'My Business', icon: <FaCog color="#2196f3" /> },
  { label: 'Invoice Journal', icon: <FaBook color="#03a9f4" /> },
  { label: 'Price List', icon: <FaTag color="#4caf50" /> },
  { label: 'Multiple Invoicing', icon: <FaLayerGroup color="#2196f3" /> },
  { label: 'Unpaid Invoices', icon: <FaMoneyBillAlt color="#e91e63" /> },
  { label: 'Offer', icon: <FaClipboardList color="#ffc107" /> },
  { label: 'Inventory Control', icon: <FaBoxes color="#9e9e9e" />, disabled: true },
  { label: 'Member Invoicing', icon: <FaUserFriends color="#9e9e9e" />, disabled: true },
  { label: 'Import/Export', icon: <FaCloudUploadAlt color="#2196f3" /> },
  { label: 'Log out', icon: <FaSignOutAlt color="#00bcd4" /> },
];

const SideNav = () => {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.menuHeader}>Menu</h3>
      <div className={styles.divider}></div>
      <ul className={styles.navList}>
        {menuItems.map((item, idx) => (
          <li key={idx} className={`${styles.navItem} ${item.disabled ? styles.disabled : ''}`}>
            <span className={styles.icon}>{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideNav;
