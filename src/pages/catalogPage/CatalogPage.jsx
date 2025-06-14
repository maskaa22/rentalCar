import { useEffect, useState } from "react";
import c from "./CatalogPage.module.css";
import Search from "../../components/search/Search";
import Cars from "../../components/cars/Cars";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectCars,} from "../../redux/cars/selectors";
import LoadMore from "../../components/loadMore/LoadMore";
import { toast, ToastContainer } from "react-toastify";
import { selectNameFilter } from "../../redux/filters/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  
  const { items: cars, page, totalPages } = useSelector(selectCars);

  const currenFilters = useSelector(selectNameFilter);

  const [pagePagination, setPagePagination] = useState(page || 1);
  const [prevReduxFilters, setPrevReduxFilters] = useState({});

  useEffect(() => {
    const abortController = new AbortController();

    const isNewSearch =
      JSON.stringify(currenFilters) !== JSON.stringify(prevReduxFilters);

    if (isNewSearch && pagePagination !== 1) {
      setPagePagination(1);
      return;
    }

    const resetListOnFetch = pagePagination === 1;

    dispatch(
      fetchCars({
        page: pagePagination,
        signal: abortController.signal,
        filters: currenFilters,
        resetList: resetListOnFetch,
      })
    );
    setPrevReduxFilters(currenFilters);
    return () => {
      abortController.abort();
    };
  }, [dispatch, pagePagination, currenFilters, prevReduxFilters]);

  const notify = (text) => toast.warning(text);

  const loadMore = () => {
    if (pagePagination < totalPages - 1) {
      setPagePagination((prev) => prev + 1);
    } else if (pagePagination === totalPages - 1) {
      setPagePagination((prev) => prev + 1);
      notify("This is last page");
    }
  };

  return (
    <div className="container">
      <div className={c.innerContainer}>
        <Search />
        <ToastContainer />
        <Cars cars={cars} />
        {cars && cars.length > 0 && page < totalPages && (
          <LoadMore loadMore={loadMore} />
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
