export default function Loading() {
  return (
    <>
      <div className="animate-pulse space-y-6 px-6 md:px-10 lg:px-12 py-10">
        <div className="w-full h-16 bg-gray-300 rounded-xl"></div>

        <div className="w-full h-96 bg-gray-300 rounded-xl"></div>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center w-full">
          <div className="hidden lg:block w-full h-60 bg-gray-300 rounded-xl"></div>
          <div className="space-y-4 w-full">
            <div className="w-3/4 h-6 bg-gray-300 rounded-lg"></div>
            <div className="w-1/2 h-6 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-4 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-4 bg-gray-300 rounded-lg"></div>
            <div className="w-2/3 h-4 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
}
