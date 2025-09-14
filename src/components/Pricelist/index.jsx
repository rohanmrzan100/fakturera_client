import { useState } from 'react';
import styles from './index.module.css';
import {
  FaSearch,
  FaPlusCircle,
  FaPrint,
  FaSlidersH,
  FaEllipsisH,
  FaLongArrowAltRight,
  FaLongArrowAltDown,
} from 'react-icons/fa';
import { useEffect } from 'react';
import { BACKEND_URL } from '../../constants';
import { useRef } from 'react';

const PriceListPage = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const debounceTimers = useRef({});
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch(BACKEND_URL + '/api/v1/products');
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
        setProducts([]);
      }
    }

    getProducts();
  }, []);
  useEffect(() => {
    document.body.style.cursor = loading ? 'wait' : 'default';
  }, [loading]);
  const handleInputChange = async (article_no, field, value) => {
    try {
      setProducts((prev) =>
        prev.map((p) => (p.article_no === article_no ? { ...p, [field]: value } : p)),
      );
      const key = `${article_no}_${field}`;
      if (debounceTimers.current[key]) {
        clearTimeout(debounceTimers.current[key]);
      }
      debounceTimers.current[key] = setTimeout(async () => {
        try {
          setLoading(true);
          const res = await fetch(`${BACKEND_URL}/api/v1/products/${article_no}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ [field]: value }),
          });

          if (!res.ok) throw new Error('Failed to update product');

          const updatedProduct = await res.json();
          setProducts((prev) =>
            prev.map((p) => (p.article_no === article_no ? updatedProduct : p)),
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={styles.content}>
      <div className={styles.topBar}>
        <div className={styles.searchGroup}>
          <div className={styles.searchInput}>
            <input type="text" placeholder="Search Article No..." />
            <FaSearch className={styles.searchIcon} color="#5ce1e6" />
          </div>
          <div className={styles.searchInput}>
            <input type="text" placeholder="Search Product..." />
            <FaSearch className={styles.searchIcon} color="#5ce1e6" />
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={`${styles.button}`}>
            <span> New Product</span> <FaPlusCircle color="#3DE695" />
          </button>
          <button className={styles.button}>
            <span>Print List</span> <FaPrint color="#5ce1e6" />
          </button>
          <button className={styles.button}>
            <span>Advanced mode</span>
            <FaSlidersH color="#69dcff" />
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className={`${styles.tableRow} `} style={{ marginBottom: '12px' }}>
          <div className={`${styles.tableCell} ${styles.tableCell}`}></div>
          <div className={`${styles.tableCell} ${styles.articleNoCell}`}>
            <div className={styles.headerContent}>
              Article No. <FaLongArrowAltDown className={styles.arrowDownIcon} color="#78c5ff" />
            </div>
          </div>
          <div className={`${styles.tableCell} ${styles.productNameCell}`}>
            <div className={styles.headerContent}>
              Product/Service{' '}
              <FaLongArrowAltDown className={styles.arrowDownIcon} color="#00bf63" />
            </div>
          </div>
          <div className={`${styles.headerContent} ${styles.inPriceCell}`}>In Price</div>
          <div className={`${styles.headerContent} ${styles.priceCell}`}>Price</div>
          <div className={`${styles.headerContent} ${styles.unitCell}`}>Unit</div>
          <div className={`${styles.headerContent} ${styles.inStockCell}`}>In Stock</div>
          <div className={`${styles.headerContent} ${styles.descriptionCell}`}>Description</div>
          <div className={`${styles.headerContent}`}></div>
        </div>
        {products.map((product, index) => (
          <div key={index} className={styles.tableRow}>
            <div className={`${styles.tableCell} ${styles.tableCell}`}>
              {products.length == index + 1 && (
                <FaLongArrowAltRight className={styles.arrowIcon} color="#4bbeff" />
              )}
            </div>

            <div className={`${styles.tableCell} ${styles.articleNoCell}`}>
              <input type="text" value={product.article_no} className={styles.pill} disabled />
            </div>
            <div className={`${`${styles.tableCell} ${styles.productNameCell}`}`}>
              <input
                type="text"
                value={product.product_name}
                className={styles.pill}
                onChange={(e) =>
                  handleInputChange(product.article_no, 'product_name', e.target.value)
                }
              />
            </div>
            <div className={`${styles.tableCell} ${styles.inPriceCell}`}>
              <input
                type="text"
                value={product.in_price}
                className={styles.pill}
                onChange={(e) => handleInputChange(product.article_no, 'in_price', e.target.value)}
              />
            </div>
            <div className={`${styles.tableCell} ${styles.priceCell}`}>
              <input
                type="text"
                value={product.price}
                className={styles.pill}
                onChange={(e) => handleInputChange(product.article_no, 'price', e.target.value)}
              />
            </div>
            <div className={`${styles.tableCell} ${styles.unitCell}`}>
              <input
                type="text"
                value={product.unit}
                className={styles.pill}
                onChange={(e) => handleInputChange(product.article_no, 'unit', e.target.value)}
              />
            </div>
            <div className={`${styles.tableCell} ${styles.inStockCell}`}>
              <input
                type="text"
                value={product.in_stock}
                className={styles.pill}
                onChange={(e) => handleInputChange(product.article_no, 'in_stock', e.target.value)}
              />
            </div>
            <div className={`${styles.tableCell} ${styles.descriptionCell}`}>
              <input
                type="text"
                value={product.description}
                className={styles.pill}
                onChange={(e) =>
                  handleInputChange(product.article_no, 'description', e.target.value)
                }
              />
            </div>

            <div className={`${styles.tableCell}`}>
              <button className={styles.ellipsisBtn}>
                <FaEllipsisH className={styles.ellipsis} color="#4bbeff" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PriceListPage;
