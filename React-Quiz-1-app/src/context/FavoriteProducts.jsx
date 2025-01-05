import React, { useState, createContext } from 'react';

export const FavContext = createContext(null);

const FavoriteProductsProv = ({ children }) => {
  const [favproducts, setFavproducts] = useState([]);

  const handleFav = (prod) => {
    const found = favproducts.find((p) => p.id === prod.id);
    if (found) {
      setFavproducts((prev) => prev.filter((p) => p.id !== prod.id));
    } else {

      setFavproducts((prev) => [...prev, prod]);
    }
  };

  const cleanFav = () => {
    setFavproducts([]);
  };

  return (
    <FavContext.Provider value={{ favproducts, handleFav, cleanFav }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavoriteProductsProv;
