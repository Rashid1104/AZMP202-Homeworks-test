import { useFormik } from "formik";
import { ProductSchema } from "../../../validations/product.validation"; // Нужно обновить схему валидации
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
import styles from "./index.module.scss"; // Импортируем SCSS для стилей

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      rating: {
        rate: "",
        count: "",
      }
    },
    onSubmit: async (values) => {
      const res = await controller.addNewData(endpoints.products, values);

      formik.resetForm();
    },
    validationSchema: ProductSchema, // Обновите схему валидации, чтобы обработать новые поля
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        className={styles.input}
      />
      {formik.errors.title && formik.touched.title && (
        <p className={styles.error}>{formik.errors.title}</p>
      )}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
        className={styles.input}
      />
      {formik.errors.price && formik.touched.price && (
        <p className={styles.error}>{formik.errors.price}</p>
      )}

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        rows={5}
        className={styles.textarea}
      ></textarea>
      {formik.errors.description && formik.touched.description && (
        <p className={styles.error}>{formik.errors.description}</p>
      )}

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
        className={styles.input}
      />
      {formik.errors.category && formik.touched.category && (
        <p className={styles.error}>{formik.errors.category}</p>
      )}

      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        name="image"
        type="url"
        onChange={formik.handleChange}
        value={formik.values.image}
        className={styles.input}
      />
      {formik.errors.image && formik.touched.image && (
        <p className={styles.error}>{formik.errors.image}</p>
      )}

      <label htmlFor="rate">Rating (Rate)</label>
      <input
        id="rate"
        name="rate"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.rating.rate}
        className={styles.input}
      />
      {formik.errors.rating?.rate && formik.touched.rating?.rate && (
        <p className={styles.error}>{formik.errors.rating?.rate}</p>
      )}

      <label htmlFor="count">Rating (Count)</label>
      <input
        id="count"
        name="count"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.rating.count}
        className={styles.input}
      />
      {formik.errors.rating?.count && formik.touched.rating?.count && (
        <p className={styles.error}>{formik.errors.rating?.count}</p>
      )}

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default AddProduct;

