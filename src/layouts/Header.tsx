import ButtonField from "components/ButtonField";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-basic-between" style={{ padding: '1.5rem 4rem'}}>
      <div style={{ fontSize: '40px', fontWeight: 600 }}>9DevPizza</div>
      <ButtonField onClick={() => navigate('/create-pizza')}>Create Pizza</ButtonField>
    </div>
  )
};

export default Header;
