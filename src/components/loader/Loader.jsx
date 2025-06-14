import c from "./Loader.module.css";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/loader/selectors";

const Loader = ({ isSuspense = false }) => {
  const isLoading = useSelector(selectIsLoading);

  if (!isLoading && !isSuspense) return null;

  return (
    <div className={c.backdrop}>
      <div className={c.spinner}></div>
    </div>
  );
};

export default Loader;
