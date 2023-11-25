import LogoPizza from 'assets/pizza.png';
import ButtonField from "components/ButtonField";
import LoadingLayout from 'layouts/LoadingLayout';
import ModalLayout from 'layouts/ModalLayout';
import { Pizza } from "models/pizza.model";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPizzaPage = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza>({});
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(({ data }) => {
        setTimeout(() => {
          setPizza(data);
        }, 1000);
      });
  }, [id]);

  const handleRemovePizza = () => {
    fetch(`http://localhost:3000/products/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(({ data }) => {
        if (data) {
          navigate('/');
        }
      });
  }

  return (
    <LoadingLayout loading={!pizza.id}>
      <div style={{ display: 'flex', alignItems: 'center', columnGap: '2rem' }}>
        <img width="450px" height="450px" src={LogoPizza} alt="9DevPizza" />
        <div>
          <div style={{ marginBottom: '1rem' }}>
            Product name: <span style={{ fontSize: '24px' }}>{pizza.productName}</span>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            Ingredients: <span style={{ fontSize: '24px' }}>{pizza.description}</span>
          </div>
          <div style={{ display: 'flex' }}>
            <ButtonField onClick={() => setIsModal(true)}>Remove Pizza</ButtonField>
          </div>
        </div>
        <ModalLayout
          width='40%'
          title='Do you want to remove this pizza'
          isShow={isModal}
          onClose={() => setIsModal(false)}
          onConfirm={handleRemovePizza}
        />
      </div>
    </LoadingLayout>
  );
};

export default DetailPizzaPage;
