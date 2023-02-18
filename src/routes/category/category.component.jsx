import "./category.style.scss";

import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCart from "../../components/product-cart/product-cart.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
