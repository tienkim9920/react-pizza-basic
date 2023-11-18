import ButtonField from "components/ButtonField";
import SpinnerLoad from "components/SpinnerLoad";
import TextField from "components/TextField";
import LoadingLayout from "layouts/LoadingLayout";
import { Pizza } from "models/pizza.model";
import { useEffect, useMemo, useRef, useState } from "react";
import CardPizza from "sections/CardPizza";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>('');
  const searchRef = useRef<any>(null);

  const handleShowMore = () => {
    setIsLoading(true);
    setPage(page + 1)
  }

  const handleSearchText = (value: string) => {
    clearTimeout(searchRef.current!);
    searchRef.current = setTimeout(() => {
      setSearchText(value);
    }, 1000);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/products/home/pagination?page=${page}`)
      .then(res => res.json())
      .then(({ data }) => {
        setTimeout(() => {
          setIsLoading(false);
          setPizzas([...pizzas, ...data]);
        }, 2000);
      });
  }, [page]);

  const searchValues = useMemo(() => {
    return pizzas.filter(item => item.productName?.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
  }, [searchText, page]);

  return (
    <LoadingLayout loading={!pizzas.length}>
      <div>
        <TextField placeholder="Enter Search!" width="250px" onChange={handleSearchText} />
        <div className="wrapper-card-items">
          {
            (searchText ? searchValues : pizzas || []).map((item, index) =>
              <CardPizza
                key={index}
                id={item.id}
                productName={item.productName}
                description={item.description}
              />
            )
          }
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <ButtonField loading={isLoading} onClick={handleShowMore}>Show more</ButtonField>
          </div>
        </div>
      </div>
    </LoadingLayout>
  )
};

export default HomePage;
