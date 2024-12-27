import { Card, Col, Row } from 'antd';
import { FaHeart, FaRegHeart } from "react-icons/fa6"; 
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { FavContext } from '../../context/FavoriteProducts';

const { Meta } = Card;

const Favorites = () => {
  const { favproducts, handleFav, cleanFav } = useContext(FavContext);

  console.log(favproducts);

  return (
    <>
      <Row gutter={16}>
        {favproducts.length > 0 ? (
          favproducts.map((product) => (
            <Col className="gutter-row" span={6} key={product.id}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt={product.title} src={product.image} />}
              >
                <Meta
                  title={<Link to={`${product.id}`}>{product.title}</Link>}
                  description={
                    <div>
                      <p>Price: $ {product.price}</p>
                      <p>{product.description.slice(0, 50)}...</p>
                      <span>
            
                        {favproducts.some((fav) => fav.id === product.id) ? (
                          <FaHeart onClick={() => handleFav(product)} />
                        ) : (
                          <FaRegHeart onClick={() => handleFav(product)} />
                        )}
                      </span>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))
        ) : (
          <p>No favorite products yet!</p> 
        )}
      </Row>
    </>
  );
};

export default Favorites;
