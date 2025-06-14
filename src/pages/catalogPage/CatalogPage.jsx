import { useCallback, useEffect, useState } from "react";
import c from "./CatalogPage.module.css";
import Search from "../../components/search/Search";
import Cars from "../../components/cars/Cars";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectCars, selectError } from "../../redux/cars/selectors";
import LoadMore from "../../components/loadMore/LoadMore";
import { toast, ToastContainer } from "react-toastify";
import { selectNameFilter } from "../../redux/filters/selectors";
import { useNavigate } from "react-router-dom";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: cars, page, totalPages } = useSelector(selectCars);
  const errors = useSelector(selectError);

  const notify = (text) => toast.warning(text);
  const notifyError = useCallback((text) => {
    toast.error(text);
  }, []);

  const currenFilters = useSelector(selectNameFilter);

  const [pagePagination, setPagePagination] = useState(1);
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

  const loadMore = () => {
    if (pagePagination < totalPages - 1) {
      setPagePagination((prev) => prev + 1);
    } else if (pagePagination === totalPages - 1) {
      setPagePagination((prev) => prev + 1);
      notify("This is last page");
    }
  };

  useEffect(() => {
    if (errors) {
      notifyError(`Error: ${errors}`);
      const timer = setTimeout(() => {
        navigate("/");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [errors, notifyError, navigate]);

  return (
    <div className="container">
      <div className={c.innerContainer}>
        <ToastContainer />
        {!errors && (
          <>
            <Search />
            <Cars cars={cars} />
            {cars && cars.length > 0 && page < totalPages && (
              <LoadMore loadMore={loadMore} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
