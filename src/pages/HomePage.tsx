import ButtonField from "components/ButtonField";
import TextField from "components/TextField";
import { Pizza } from "models/pizza.model";
import { useEffect, useState } from "react";
import CardPizza from "sections/CardPizza";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/products/home/pagination?page=${page}`)
      .then(res => res.json())
      .then(({ data }) => {
        setTimeout(() => {
          setIsLoading(false);
          setPizzas([...pizzas, ...data]);
        }, 2000);
      });
  }, [page]);

  return (
    <>
      <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
        <TextField placeholder="Enter Search!" width="250px" />
        <div className="wrapper-card-items">
          {
            (pizzas || []).map((item, index) =>
              <CardPizza
                key={index}
                id={item.id}
                productName={item.productName}
                description={item.description}
              />
            )
          }
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <ButtonField loading={isLoading} onClick={() => setPage(page + 1)}>Show more</ButtonField>
          </div>
        </div>
      </div>
    </>
  )
};

export default HomePage;
