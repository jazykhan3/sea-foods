import Categories from "../BlogsComponents/News/categories";
import LatestNews from "../BlogsComponents/News/latestNews";

const News = () => {
  return (
    <>
      <div className="bg-[#DDEEFF] flex flex-col justify-center items-center w-full">
        <LatestNews />
        <Categories />
      </div>
    </>
  );
};

export default News;
