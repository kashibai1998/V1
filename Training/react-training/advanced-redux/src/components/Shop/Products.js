import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyData = [
  {
    id: '1',
    title: 'React JS',
    price: 600,
    description: 'This is a first React JS product - amazing!'
  },
  {
    id: '2',
    title: 'Angular',
    price: 500,
    description: 'This is a first Angular product - amazing!'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          dummyData.map((item) => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            )
          })
        }
      </ul>
    </section>
  );
};

export default Products;
