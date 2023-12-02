import ButtonField from "components/ButtonField";
import TextField from "components/TextField";
import LoadingLayout from "layouts/LoadingLayout";
import { FieldPizza, Pizza } from "models/pizza.model";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePizzaPage = () => {
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<Pizza>({});

  const handleChangeFieldPizza = (key, value) => {
    setPizza({
      ...pizza,
      [key]: value,
    });
  };

  const handleCreatePizza = () => {
    fetch(`http://localhost:3000/products`, {
      method: 'POST', body: JSON.stringify(pizza), headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(res => res.json())
      .then(({ data }) => {
        if (data?.id) {
          navigate('/');
        }
      });
  }

  return (
    <LoadingLayout loading={false}>
      <div className="wrapper-create">
        <div style={{ width: '50%' }}>
          <h1>Create New Pizza</h1>
          <div className="form-control">
            <div style={{ marginBottom: '1rem' }}>Product Name:</div>
            <TextField
              placeholder="Enter Product Name Here!"
              onChange={(e) => handleChangeFieldPizza(FieldPizza.ProductName, e)}
            />
          </div>
          <div className="form-control">
            <div style={{ marginBottom: '1rem' }}>Description</div>
            <TextField
              placeholder="Enter Description Here!"
              onChange={(e) => handleChangeFieldPizza(FieldPizza.Description, e)}
            />
          </div>
          <div className="form-control">
            <div style={{ marginBottom: '1rem' }}>Price:</div>
            <TextField
              placeholder="Enter Price Here!"
              onChange={(e) => handleChangeFieldPizza(FieldPizza.Price, e)}
            />
          </div>
          <div className="form-control" style={{ display: 'flex' }}>
            <ButtonField
              onClick={handleCreatePizza}
            >
              Create Pizza
            </ButtonField>
          </div>
        </div>
      </div>
    </LoadingLayout>
  )
};

export default CreatePizzaPage;
