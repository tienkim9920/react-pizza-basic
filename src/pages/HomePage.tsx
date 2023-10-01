import { Pizza } from "models/pizza.model";
import { useEffect, useState } from "react";
import CardPizza from "sections/CardPizza";

const HomePage = () => {

  const [pizzas, setPizzas] = useState<Pizza[]>([
    { id: 1, title: 'Pizza Thịt Bầm', description: 'Thịt bầm, sốt cà chua' },
    { id: 2, title: 'Pizza Phô Mai', description: 'Phô mai, muối' },
    { id: 3, title: 'Pizza Hải Sản', description: 'Vị tôm, cua' },
  ]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Render Hook');
    setPizzas([...pizzas, { id: 4, title: 'Pizza Test', description: 'Pizza descirption test'}]);
  }, [count]);

  return (
    <>
      {console.log('Render Template')}
      <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
        <div className="wrapper-card-items">
          {
            pizzas.map(item =>
              <CardPizza key={item.id} id={item.id} title={item.title} description={item.description} />
            )
          }
        </div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </>
  )
};

export default HomePage;
