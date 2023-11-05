import { useLocation } from "react-router-dom";

const CreatePizzaPage = () => {
  const { pathname } = useLocation();

  return (
    <div>This is Create Pizza Page - {pathname}</div>
  )
};

export default CreatePizzaPage;
