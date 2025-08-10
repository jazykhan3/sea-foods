import Categories from "../BlogsComponents/AIBlogs/categories";
import Insight from "../BlogsComponents/AIBlogs/insight";
import Welcome from "../BlogsComponents/AIBlogs/welcome";

const AIBlogs = () => {
  return (
    <>
      <div className="bg-[#DDEEFF] flex flex-col justify-center items-center w-full">
        <Welcome />
        <Insight />
        <Categories />
      </div>
    </>
  );
};

export default AIBlogs;
