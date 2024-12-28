import { FaInfoCircle } from "react-icons/fa";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    image,
    category,
    rating,
  } = product;

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const handleGetDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const getCategories = async () => {
    try {
      const data = await controller.getAllData(endpoints.categories);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.brand}>{categories.find((c) => c.id === category)?.categoryName}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceRating}>
          <span className={styles.price}>${price}</span>
          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={styles.star}>
                {i < rating.rate ? "★" : "☆"}
              </span>
            ))}
            <span>{rating.rate} ({rating.count})</span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.category}>
          {categories.find((c) => c.id === category)?.categoryName}
        </span>
        <span>
          <FaInfoCircle
            onClick={() => handleGetDetails(product.id)}
          />
        </span>
        <span>
          
        </span>
      </div>
      <button className={styles.button} disabled={product.stock === 0}>
        {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

export default ProductCard;
