import { Pizza } from "models/pizza.model";
import { useEffect, useState } from "react";
import CardPizza from "sections/CardPizza";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(({ data }) => setPizzas(data));
  }, [])

  return (
    <>
      <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
        <div className="wrapper-card-items">
          {
            pizzas.map((item, index) =>
              <CardPizza
                key={index}
                id={item.id}
                productName={item.productName}
                description={item.description}
              />
            )
          }
        </div>
      </div>
    </>
  )
};

export default HomePage;
