import { useParams } from "react-router-dom";
import LogoPizza from 'assets/pizza.png';
import ButtonField from "components/ButtonField";

const DetailPizzaPage = () => {
  const { id } = useParams();

  return (
    <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', columnGap: '2rem' }}>
        <img width="450px" height="450px" src={LogoPizza} alt="9DevPizza" />
        <div>
          <div style={{ marginBottom: '1rem' }}>
            Product name: <span style={{ fontSize: '24px'}}>Pizza Thit Bo</span>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            Ingredients: <span style={{ fontSize: '24px'}}>Thit bo, tom cua</span>
          </div>
          <div style={{ display: 'flex' }}>
            <ButtonField>Add to cart</ButtonField>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPizzaPage;
