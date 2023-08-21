import logo from "../../assets/moneyBag.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Calculadora de Investimentos</h1>
      </header>
    </div>
  );
};
export default Header;
