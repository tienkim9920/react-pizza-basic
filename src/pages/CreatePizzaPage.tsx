import ButtonField from "components/ButtonField";
import TextField from "components/TextField";
import LoadingLayout from "layouts/LoadingLayout";

const CreatePizzaPage = () => {
  return (
    <LoadingLayout loading={false}>
      <div className="wrapper-create">
        <div style={{ width: '50%' }}>
          <h1>Create New Pizza</h1>
          <div className="form-control">
            <div style={{ marginBottom: '1rem' }}>Product name:</div>
            <TextField placeholder="Enter Product Name here!" />
          </div>
          <div className="form-control">
            <div style={{ marginBottom: '1rem' }}>Description:</div>
            <TextField placeholder="Enter Description here!" />
          </div>
          <div className="form-control">
            <div style={{ marginBottom: '1rem' }}>Price:</div>
            <TextField placeholder="Enter Price here!" />
          </div>
          <div className="form-control flex-basic-between">
            <ButtonField>Create Pizza</ButtonField>
          </div>
        </div>
      </div>
    </LoadingLayout>
  )
};

export default CreatePizzaPage;
