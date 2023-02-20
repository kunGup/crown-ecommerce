import {Fragment,useState,useEffect} from 'react'
import ProductCard from '../../components/product-card/product-card.component';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap,selectIsLoading } from '../../store/categories/categories.selector';
import './category.styles.scss'
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
    const isLoading = useSelector(selectIsLoading)
    const {category} = useParams()
    console.log("render/re-rendering category component");
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
      console.log("effect fired calling setProducts");
      setProducts(categoriesMap[category])
    }, [category,categoriesMap])
    
    return (
      <Fragment>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="category-container">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        )}
      </Fragment>
    );
}

export default Category