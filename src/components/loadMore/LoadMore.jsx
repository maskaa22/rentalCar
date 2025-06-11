import c from "./LoadMore.module.css";

const LoadMore = ({loadMore}) => {
  return <button className={c.btn} onClick={loadMore}>Load more</button>;
};

export default LoadMore;
