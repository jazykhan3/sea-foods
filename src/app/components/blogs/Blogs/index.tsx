import Dive from "../BlogsComponents/Blogs/dive";
import DiveInList from "../BlogsComponents/Blogs/diveInList";

const Blogs = () => {
  return (
    <>
      <div className="bg-[#DDEEFF] flex flex-col justify-center items-center w-full">
        <Dive />
        <DiveInList />
      </div>
    </>
  );
};

export default Blogs;
