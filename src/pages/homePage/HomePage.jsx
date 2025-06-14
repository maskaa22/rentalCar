import { useNavigate } from "react-router-dom";
import c from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={c.home}>
      <div className={c.info}>
        <h1 className={c.title}>Find your perfect rental car</h1>
        <p className={c.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={c.btn} onClick={() => navigate('/catalog')}>View Catalog</button>
      </div>
    </div>
  );
};

export default HomePage;
