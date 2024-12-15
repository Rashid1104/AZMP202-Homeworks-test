import './App.css'
import Cards from './layouts/Cards'
import Header from './layouts/Header';

function App() {
  const foods = [
    {
      name: "Pizza Margherita",
      description: "Pomidor, mozzarella və fesleğen ilə klassik İtalyan pizzası.",
      price: "12 AZN",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Sushi",
      description: "Təzə balıq və düyü ilə hazırlanmış Yapon yeməyi.",
      price: "15 AZN",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Burger",
      description: "Ət, pendir və təzə tərəvəzlərlə dadlı burger.",
      price: "10 AZN",
      image: "https://via.placeholder.com/150"
    }
  ];
  return (
    <>
    <Header/>
    <h1 className="titleName">
      Restoran Menyusu
    </h1>
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {foods.map((food, index) => (
          <Cards
            key={index}
            name={food.name}
            description={food.description}
            price={food.price}
            image={food.image}
          />
        ))}
      </div>
    </>
  )
}

export default App
