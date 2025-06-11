import { useEffect, useState } from "react";
import c from "./CatalogPage.module.css";
import Search from "../../components/search/Search";
import Cars from "../../components/cars/Cars";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectCars } from "../../redux/cars/selectors";
import LoadMore from "../../components/loadMore/LoadMore";
import { toast, ToastContainer } from "react-toastify";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items: cars, page, totalPages } = useSelector(selectCars);

  const [pagePagination, setPagePagination] = useState(page || 1);

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(
      fetchCars({ page: pagePagination, signal: abortController.signal })
    );

    return () => {
      abortController.abort();
    };
  }, [dispatch, pagePagination]);

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
