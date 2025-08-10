"use client";
import React from "react";
import Image from "next/image";
import jsPDF from "jspdf";

// Define an interface for the props
interface data {
  selectedProduct: string;
}
interface MarketProps {
  data: data;
}

// Define the JSON structure for the catalog data
interface Product {
  id: number;
  name: string;
  category: string;
  stockStatus: string;
  price: number;
  image: string;
}

const catalogData: Product[] = [
  {
    id: 1,
    name: "Sardine",
    category: "Fish Products",
    stockStatus: "In Stock",
    price: 10.99,
    image: "https://seafood-app.vercel.app/_next/image?url=%2FImages%2Fbuy-fresh-item-img.webp&w=750&q=75",
  },
  {
    id: 2,
    name: "Shrimp",
    category: "Shellfish",
    stockStatus: "In Stock",
    price: 15.99,
    image: "https://seafood-app.vercel.app/_next/image?url=%2FImages%2Fbuy-fresh-item-img.webp&w=750&q=75",
  },
  // Add more products as needed
];


const Market: React.FC<MarketProps> = ({ data }) => {
  const categories = ["All", "Fish Products", "Shellfish", "Crustaceans"];
  const stockStatus = ["In Stock", "Out of Stock"];
  const sortOptions = ["By Alphabets", "Lowest Price", "Highest Price"];
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [isSortOpen, setIsSortOpen] = React.useState(false);
  const [checkedCategories, setCheckedCategories] = React.useState<any>([]);
  const [checkedStockStatus, setCheckedStockStatus] = React.useState<any>([]);
  const [selectedSort, setSelectedSort] = React.useState<any>("");
  const [selectedProduct, setSelectedProduct] = React.useState<any>(
    data.selectedProduct
  );

  // Handler to download the catalog
  const getBase64Image = async (imgUrl: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new (window as any).Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        console.log("Image loaded successfully: ", imgUrl); // Log success
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL("image/png");
          resolve(dataURL);
        } else {
          reject("Failed to get drawing context.");
        }
      };
      img.onerror = (error: any) => {
        console.error("Error loading image: ", imgUrl, error); // Log errors
        reject(error);
      };
      img.src = imgUrl;
    });
  };
  
  
  const downloadProductsPdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Product Catalog", 14, 20);

    let y = 40; // Start printing product details from this position

    catalogData.forEach((item, index) => {
      if (y > 280) {  // Check if the current page is almost full
        doc.addPage();  // Add a new page
        y = 20;         // Reset the y coordinate
      }
      doc.setFontSize(16);
      doc.text(item.name, 14, y);
      doc.setFontSize(12);
      doc.text(`Category: ${item.category}`, 14, y + 6);
      doc.text(`Price: $${item.price.toFixed(2)}`, 14, y + 12);
      doc.text(`Status: ${item.stockStatus}`, 14, y + 18);

      y += 30;  // Increment y to place the next product
    });

    doc.save("product-catalog.pdf");
  };
  
  // Handler for category checkbox changes
  const handleCategoriesCheckboxChange = (e: any) => {
    const { value, checked } = e.target;
    setCheckedCategories(
      (prev: any) =>
        checked
          ? [...prev, value] // Add to the array if checked
          : prev.filter((category: any) => category !== value) // Remove from the array if unchecked
    );
  };

  // Handler for stock status checkbox changes
  const handleStockStatusCheckboxChange = (e: any) => {
    const { value, checked } = e.target;
    setCheckedStockStatus(
      (prev: any) =>
        checked
          ? [...prev, value] // Add to the array if checked
          : prev.filter((status: any) => status !== value) // Remove from the array if unchecked
    );
  };

  const handleSelectedSortOption = (opt: any) => {
    setSelectedSort(opt == selectedSort ? "" : opt);
  };

  // Handler to remove an item from checkedCategories
  const handleRemoveCategory = (categoryToRemove: any) => {
    setCheckedCategories((prev: any) =>
      prev.filter((category: any) => category !== categoryToRemove)
    );
  };

  // Handler to remove an item from checkedStockStatus
  const handleRemoveStockStatus = (statusToRemove: any) => {
    setCheckedStockStatus((prev: any) =>
      prev.filter((status: any) => status !== statusToRemove)
    );
  };

  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    if (isSortOpen) setIsSortOpen(false); // Close Sort popover if open
  };

  const handleToggleSort = () => {
    setIsSortOpen(!isSortOpen);
    if (isFilterOpen) setIsFilterOpen(false); // Close Filter popover if open
  };

  const handleClearAllFilters = () => {
    setCheckedCategories([]);
    setCheckedStockStatus([]);
  };

  const getFilterPopover = () => {
    return (
      <div
        className="z-[11] w-full sm:max-w-[300px] absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg px-4 transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // Prevent closing when interacting with popover
      >
        <div className="flex flex-col w-full">
          <div className="px-3 flex flex-col gap-3 justify-center items-center w-full border-b border-[#CCCCCC] py-4">
            <div className="flex justify-between items-center gap-3 md:gap-4 w-full">
              <p className="poppins-semibold text-[#1E1E1E] text-md">
                Applied Filters
              </p>
              <p
                onClick={handleClearAllFilters}
                className="poppins-semibold text-[#1E1E1E] underline text-xs cursor-pointer"
              >
                Clear All
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-start items-start w-full">
              {checkedCategories.length === 0 &&
                checkedStockStatus.length === 0 && (
                  <p className="text-[#808080] text-xs flex justify-center items-center poppins-regular min-h-[36px]">
                    No Selected Filter
                  </p>
                )}
              {checkedCategories?.map((category: any) => (
                <div
                  key={category}
                  className="whitespace-nowrap flex justify-center items-center p-2 rounded-md bg-[#EAF4FF] gap-1 text-[#1E1E1E] poppins-regular text-sm w-fit"
                >
                  <p>{category}</p>
                  <Image
                    src="/Images/buy-fresh-cross.webp"
                    alt="_close"
                    width={16}
                    height={16}
                    onClick={() => handleRemoveCategory(category)}
                    className="w-full h-full min-w-4 min-h-4 max-w-4 max-h-4 cursor-pointer"
                  />
                </div>
              ))}
              {checkedStockStatus?.map((status: any) => (
                <div
                  key={status}
                  className="flex justify-center items-center p-2 rounded-md bg-[#EAF4FF] gap-1 text-[#1E1E1E] poppins-regular text-sm w-fit"
                >
                  <p>{status}</p>
                  <Image
                    src="/Images/buy-fresh-cross.webp"
                    alt="_close"
                    width={16}
                    height={16}
                    onClick={() => handleRemoveStockStatus(status)}
                    className="w-full h-full min-w-4 min-h-4 max-w-4 max-h-4 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="px-3 flex flex-col gap-3 justify-start items-start w-full border-b border-[#CCCCCC] py-4">
            <p className="poppins-semibold text-[#1E1E1E] text-md">Category</p>
            <div className="flex flex-wrap gap-3 justify-start items-start w-full">
              <fieldset>
                {categories.map((category: any) => (
                  <div
                    key={category}
                    className="flex justify-start items-center gap-3 w-fit"
                  >
                    <input
                      type="checkbox"
                      className="border border-[#1E1E1E] text-[#EAF4FF]"
                      id={category}
                      name="categories"
                      value={category}
                      onChange={handleCategoriesCheckboxChange}
                      checked={checkedCategories.includes(category)} // Check if it's in the state
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                ))}
              </fieldset>
            </div>
          </div>
          <div className="px-3 flex flex-col gap-3 justify-start items-start w-full border-b border-[#CCCCCC] py-4">
            <p className="poppins-semibold text-[#1E1E1E] text-md">
              Stock Status
            </p>
            <div className="flex flex-wrap gap-3 justify-start items-start w-full">
              <fieldset>
                {stockStatus.map((status: any) => (
                  <div
                    key={status}
                    className="flex justify-start items-center gap-3 w-fit"
                  >
                    <input
                      type="checkbox"
                      className="border border-[#1E1E1E] text-[#EAF4FF]"
                      id={status}
                      name="stock"
                      value={status}
                      onChange={handleStockStatusCheckboxChange}
                      checked={checkedStockStatus.includes(status)} // Check if it's in the state
                    />
                    <label htmlFor={status}>
                      {status === "in_stock" ? "In Stock" : "Out of Stock"}
                    </label>
                  </div>
                ))}
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getSortPopover = () => {
    return (
      <div
        className="z-[11] absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // Prevent closing when interacting with popover
      >
        <div className="flex flex-col sm:min-w-[200px] w-full cursor-ponter rounded-lg">
          {sortOptions.map((sortBy: any, index: number) => (
            <div
              key={sortBy}
              onClick={() => handleSelectedSortOption(sortBy)}
              className={`${
                index == 0 ? "rounded-t-lg" : index == 2 ? "rounded-b-lg" : ""
              } ${
                selectedSort == sortBy ? "bg-[#fbfbff]" : "bg-white"
              } px-4 py-3 border-b border-[#eeeeee] text-black`}
            >
              {sortBy}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-[#DDEEFF] px-6 md:px-8 lg:px-24 py-10 lg:py-20 2xl:pt-40 2xl:pb-10 flex flex-col justify-center items-center w-full gap-6 lg:gap-8 xl:gap-12">
        <div className="flex gap-3 md:gap-6 justify-center items-center w-full">
          <div className="min-h-[45px] sm:min-h-[56px] lg:min-h-[60px] xl:min-h-[61px] 2xl:min-h-[75px] max-h-[45px] sm:max-h-[56px] lg:max-h-[60px] xl:max-h-[61px] 2xl:max-h-[75px] w-full flex justify-start items-center gap-6 sm:gap-8 md:gap-10 2xl:gap-12 bg-[#071B3B] rounded-[6px] py-[18px] sm:py-[6px] lg:py-4 2xl:py-5 px-3 md:px-6">
            <Image
              src="/Images/blogs-logo-sm.webp"
              alt="_logo"
              width={44}
              height={44}
              className="w-full h-full max-w-[44px] max-h-[44px] hidden sm:block lg:hidden"
            />
            <p className="hidden lg:block text-[#DDF2FD] poppins-regular text-base sm:text-lg xl:text-[22px] 2xl:text-[26px]">
              Products
            </p>
            <select
              name="product"
              id="product"
              value={selectedProduct}
              onChange={(e) => {
                setSelectedProduct(e.target.value);
                console.log(e.target.value);
              }}
              className="outline-none cursor-pointer w-full sm:border-l sm:border-l-[2px] sm:border-[#7C7C7C] sm:px-4 bg-[#071B3B] text-[#DDF2FD] poppins-regular text-base xl:text-[22px] 2xl:text-[26px]"
            >
              <option
                className="p-2 text-[#071B3B] bg-[#DDF2FD] text-sm md:text-base"
                value=""
              >
                None
              </option>
              <option
                className="p-2 text-[#071B3B] bg-[#DDF2FD] text-sm md:text-base"
                value="fresh_food"
              >
                Our Traditional Fresh Products
              </option>
              <option
                className="p-2 text-[#071B3B] bg-[#DDF2FD] text-sm md:text-base"
                value="frozen_food"
              >
                Our Frozen Products
              </option>
            </select>
            <div className="hidden sm:border-l sm:border-l-[2px] sm:border-[#7C7C7C] sm:flex justify-center items-center pl-4 pr-0">
              <Image
                src="/Images/fresh-search.webp"
                alt="_search"
                width={42}
                height={42}
                className="w-full h-full max-w-[42px] max-h-[42px] hidden sm:block cursor-pointer"
              />
            </div>
          </div>
          <div className="min-h-[45px] sm:min-h-[56px] lg:min-h-[60px] xl:min-h-[61px] 2xl:min-h-[75px] max-h-[45px] sm:max-h-[56px] lg:max-h-[60px] xl:max-h-[61px] 2xl:max-h-[75px] xl:max-w-[200px] xl:min-w-[200px] xl:max-w-[234px] xl:min-w-[234px] cursor-pointer flex gap-3 justify-center items-center w-fit py-[13px] md:py-4 2xl:py-5 px-4 md:px-6 bg-[#071B3B] rounded-[6px]">
            <Image
              src="/Images/fresh-cart.webp"
              alt="_cart"
              width={42}
              height={42}
              className="max-w-[35px] max-h-[35px] sm:max-w-[30px] sm:max-h-[30px] 2xl:max-w-[42px] 2xl:max-h-[42px] w-full h-full"
            />
            <p className="hidden xl:block text-[#DDF2FD] poppins-regular text-base sm:text-lg xl:text-[22px] 2xl:text-[26px]">
              View Cart
            </p>
          </div>
        </div>

        {/* Add Download Catalog Button */}
       
        {/* For small screens */}
        <div className="relative lg:hidden flex justify-between items-center w-full gap-4 md:gap-6">
          <div
            onClick={handleToggleFilter}
            className="rounded-lg md:min-w-[130px] cursor-pointer bg-[#071B3B] text-[#DDF2FD] text-base lg:text-lg poppins-medium px-2 py-2 md:py-3 flex gap-3 justify-center items-center"
          >
            <Image
              src="/Images/fresh-filter-sm.webp"
              alt="_filter"
              width={30}
              height={30}
              className="w-full h-full max-w-[30px] max-h-[30px]"
            />
            <p className="hidden md:block">Filters</p>
            <Image
              src={
                isFilterOpen
                  ? "/Images/fresh-bug-open-arrow.webp"
                  : "/Images/fresh-bug-close-arrow.webp"
              }
              alt="_toggle"
              width={30}
              height={30}
              className="cursor-pointer w-full h-full max-w-[30px] max-h-[30px]"
            />
          </div>
          {isFilterOpen && getFilterPopover()}
          <div
            onClick={handleToggleSort}
            className="rounded-lg md:min-w-[170px] cursor-pointer bg-white text-[#1E1E1E] text-base lg:tetx-lg poppins-medium px-2 py-2 md:py-3 flex gap-3 justify-center items-center"
          >
            <Image
              src="/Images/fresh-sort.webp"
              alt="_filter"
              width={30}
              height={30}
              className="w-full h-full max-w-[30px] max-h-[30px]"
            />
            <p className="hidden md:block">Sort By</p>
            <Image
              src={
                isSortOpen
                  ? "/Images/fresh-bug-open-arrow.webp"
                  : "/Images/fresh-bug-close-arrow.webp"
              }
              alt="_toggle"
              width={30}
              height={30}
              className="cursor-pointer w-full h-full max-w-[30px] max-h-[30px]"
            />
          </div>
          {isSortOpen && getSortPopover()}
        </div>

        {/* For large screens */}
        <div className="flex w-full justify-center items-start">
          <div className="hidden lg:flex w-[25%] flex-col justify-start items-start border-r border-[#CCCCCC] pr-4">
            <div className="px-3 flex flex-col gap-3 justify-center items-center w-full border-b border-[#CCCCCC] pb-4">
              <div className="flex justify-start items-center gap-3 md:gap-4 w-full">
                <Image
                  src="/Images/fresh-filter-black.webp"
                  alt="_filter"
                  width={32}
                  height={32}
                  className="w-full h-full max-w-8 max-h-8"
                />
                <p className="poppins-semibold text-[#1E1E1E] text-md">
                  Filters
                </p>
              </div>
            </div>
            <div className="px-3 flex flex-col gap-3 justify-center items-center w-full border-b border-[#CCCCCC] py-4">
              <div className="flex justify-between items-center gap-3 md:gap-4 w-full">
                <p className="poppins-semibold text-[#1E1E1E] text-md">
                  Applied Filters
                </p>
                <p
                  onClick={handleClearAllFilters}
                  className="poppins-semibold text-[#1E1E1E] underline text-xs cursor-pointer"
                >
                  Clear All
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-start items-start w-full">
                {checkedCategories.length === 0 &&
                  checkedStockStatus.length === 0 && (
                    <p className="text-[#808080] text-xs flex justify-center items-center poppins-regular min-h-[36px]">
                      No Selected Filter
                    </p>
                  )}
                {checkedCategories?.map((category: any) => (
                  <div
                    key={category}
                    className="whitespace-nowrap flex justify-center items-center p-2 rounded-md bg-[#EAF4FF] gap-1 text-[#1E1E1E] poppins-regular text-sm w-fit"
                  >
                    <p>{category}</p>
                    <Image
                      src="/Images/buy-fresh-cross.webp"
                      alt="_close"
                      width={16}
                      height={16}
                      onClick={() => handleRemoveCategory(category)}
                      className="w-full h-full min-w-4 min-h-4 max-w-4 max-h-4 cursor-pointer"
                    />
                  </div>
                ))}
                {checkedStockStatus?.map((status: any) => (
                  <div
                    key={status}
                    className="flex justify-center items-center p-2 rounded-md bg-[#EAF4FF] gap-1 text-[#1E1E1E] poppins-regular text-sm w-fit"
                  >
                    <p>{status}</p>
                    <Image
                      src="/Images/buy-fresh-cross.webp"
                      alt="_close"
                      width={16}
                      height={16}
                      onClick={() => handleRemoveStockStatus(status)}
                      className="w-full h-full min-w-4 min-h-4 max-w-4 max-h-4 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="px-3 flex flex-col gap-3 justify-start items-start w-full border-b border-[#CCCCCC] py-4">
              <p className="poppins-semibold text-[#1E1E1E] text-md">
                Category
              </p>
              <div className="flex flex-wrap gap-3 justify-start items-start w-full">
                <fieldset>
                  {categories.map((category: any) => (
                    <div
                      key={category}
                      className="cursor-pointer flex justify-start items-center gap-3 w-fit"
                    >
                      <input
                        type="checkbox"
                        className="border border-[#1E1E1E] text-[#EAF4FF]"
                        id={category}
                        name="categories"
                        value={category}
                        onChange={handleCategoriesCheckboxChange}
                        checked={checkedCategories.includes(category)} // Check if it's in the state
                      />
                      <label htmlFor={category}>{category}</label>
                    </div>
                  ))}
                </fieldset>
              </div>
            </div>
            <div className="px-3 flex flex-col gap-3 justify-start items-start w-full border-b border-[#CCCCCC] py-4">
              <p className="poppins-semibold text-[#1E1E1E] text-md">
                Stock Status
              </p>
              <div className="flex flex-wrap gap-3 justify-start items-start w-full">
                <fieldset>
                  {stockStatus.map((status: any) => (
                    <div
                      key={status}
                      className="cursor-pointer flex justify-start items-center gap-3 w-fit"
                    >
                      <input
                        type="checkbox"
                        className="border border-[#1E1E1E] text-[#EAF4FF]"
                        id={status}
                        name="stock"
                        value={status}
                        onChange={handleStockStatusCheckboxChange}
                        checked={checkedStockStatus.includes(status)} // Check if it's in the state
                      />
                      <label htmlFor={status}>{status}</label>
                    </div>
                  ))}
                </fieldset>
              </div>
            </div>
            <div className="flex justify-start items-start w-full pt-10">
              <Image
                src={
                  selectedProduct == "fresh_food"
                    ? "/Images/fresh-filter-img.webp"
                    : "/Images/frozen-filter-img.webp"
                }
                alt="_filter"
                width={344}
                height={719}
                className="w-full h-full max-w-[344px] max-h-[719px]"
              />
            </div>
          </div>

          <div className="flex w-full lg:w-[75%] flex-col gap-10 lg:pl-8">
            <div className="flex flex-col justify-start items-start w-full">
              <p className="">
                Products / Search /{" "}
                {selectedProduct == "fresh_food"
                  ? "Traditional Fresh Products"
                  : selectedProduct == "frozen_food"
                  ? "Traditional Frozen Products"
                  : "-"}
              </p>

              <div className="flex justify-between items-center flex-wrap w-ful gap-4 w-full">
                <div className="flex justify-start items-center gap-2 w-fit text-[#1E1E1E] poppins-medium text-xl lg:text-lg xl:text-xl 2xl:text-[45px]">
                  “
                  {selectedProduct == "fresh_food"
                    ? "Traditional Fresh Products"
                    : selectedProduct == "frozen_food"
                    ? "Traditional Frozen Products"
                    : "No Data Found"}
                  ”
                  <p className="text-sm lg:text-md">
                    ______{selectedProduct == "" ? 0 : 288} Results
                  </p>
                </div>
                <div className="hidden lg:flex justify-center items-center w-fit relative">
                  <div
                    onClick={handleToggleSort}
                    className="cursor-pointer rounded-lg max-w-[130px] md:min-w-[130px] cursor-pointer bg-white text-[#1E1E1E] text-base lg:text-lg poppins-medium px-2 py-2 md:py-3 flex gap-3 justify-center items-center"
                  >
                    <Image
                      src="/Images/fresh-sort.webp"
                      alt="_filter"
                      width={30}
                      height={30}
                      className="w-full h-full max-w-[30px] max-h-[30px]"
                    />
                    <p className="hidden md:block">Sort By</p>
                  </div>
                  <div className="flex justify-center items-center w-full">
          <button
            onClick={downloadProductsPdf}
            className="bg-[#071B3B] text-white px-4 py-2  min-h-[50px] mx-2 rounded-md"
          >
            Download Catalog
          </button>
        </div>

                  {isSortOpen && getSortPopover()}
                </div>
              </div>
            </div>
            {selectedProduct !== "" && (
              <div className="flex flex-col gap-[28px] w-full">
                <div className="flex gap-[28px] justify-start items-start flex-col md:flex-row">
                  <div className="w-full md:w-[33%] flex flex-col gap-4 2xl:gap-8 justify-start items-start">
                    <div className="flex justify-start items-start w-full">
                      <Image
                        src={
                          selectedProduct == "fresh_food"
                            ? "/Images/buy-fresh-item-img.webp"
                            : "/Images/buy-frozen-item-img.webp"
                        }
                        alt="_bg"
                        width={362}
                        height={362}
                        className="object-cover border border-[4px] md:border-[9px] border-white w-full max-h-[200px] md:max-h-[362px] h-full"
                      />
                    </div>
                    <p className="text-lg poppins-medium text-[#1E1E1E]">
                      Sardine
                    </p>
                    <div className="flex flex-col gap-3 w-full justify-start items-start">
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#071B3B] rounded-md text-white border border-[#071B3B] text-sm md:text-md lg:text-lg w-full h-full min-h-[53px] max-h-[53px]">
                          Buy Now
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#DDEEFF] rounded-md text-[#071B3B] text-sm md:text-md lg:text-lg border border-[#071B3B] w-full h-full min-h-[53px] max-h-[53px] flex justify-center items-center gap-3">
                          <p>+</p> Add to Cart
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-heart-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[33%] flex flex-col gap-4 2xl:gap-8 justify-start items-start">
                    <div className="flex justify-start items-start w-full">
                      <Image
                        src={
                          selectedProduct == "fresh_food"
                            ? "/Images/buy-fresh-item-img.webp"
                            : "/Images/buy-frozen-item-img.webp"
                        }
                        alt="_bg"
                        width={362}
                        height={362}
                        className="object-cover border border-[4px] md:border-[9px] border-white w-full max-h-[200px] md:max-h-[362px] h-full"
                      />
                    </div>
                    <p className="text-lg poppins-medium text-[#1E1E1E]">
                      Sardine
                    </p>
                    <div className="flex flex-col gap-3 w-full justify-start items-start">
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#071B3B] rounded-md text-white border border-[#071B3B] text-sm md:text-md lg:text-lg w-full h-full min-h-[53px] max-h-[53px]">
                          Buy Now
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#DDEEFF] rounded-md text-[#071B3B] text-sm md:text-md lg:text-lg border border-[#071B3B] w-full h-full min-h-[53px] max-h-[53px] flex justify-center items-center gap-3">
                          Add to Cart <p>+</p>
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-heart-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[33%] flex flex-col gap-4 2xl:gap-8 justify-start items-start">
                    <div className="flex justify-start items-start w-full">
                      <Image
                        src={
                          selectedProduct == "fresh_food"
                            ? "/Images/buy-fresh-item-img.webp"
                            : "/Images/buy-frozen-item-img.webp"
                        }
                        alt="_bg"
                        width={362}
                        height={362}
                        className="object-cover border border-[4px] md:border-[9px] border-white w-full max-h-[200px] md:max-h-[362px] h-full"
                      />
                    </div>
                    <p className="text-lg poppins-medium text-[#1E1E1E]">
                      Sardine
                    </p>
                    <div className="flex flex-col gap-3 w-full justify-start items-start">
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#071B3B] rounded-md text-white border border-[#071B3B] text-sm md:text-md lg:text-lg w-full h-full min-h-[53px] max-h-[53px]">
                          Buy Now
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#DDEEFF] rounded-md text-[#071B3B] text-sm md:text-md lg:text-lg border border-[#071B3B] w-full h-full min-h-[53px] max-h-[53px] flex justify-center items-center gap-3">
                          Add to Cart <p>+</p>
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-heart-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[28px] justify-start items-start flex-col md:flex-row">
                  <div className="w-full md:w-[33%] flex flex-col gap-4 2xl:gap-8 justify-start items-start">
                    <div className="flex justify-start items-start w-full">
                      <Image
                        src={
                          selectedProduct == "fresh_food"
                            ? "/Images/buy-fresh-item-img.webp"
                            : "/Images/buy-frozen-item-img.webp"
                        }
                        alt="_bg"
                        width={362}
                        height={362}
                        className="object-cover border border-[4px] md:border-[9px] border-white w-full max-h-[200px] md:max-h-[362px] h-full"
                      />
                    </div>
                    <p className="text-lg poppins-medium text-[#1E1E1E]">
                      Sardine
                    </p>
                    <div className="flex flex-col gap-3 w-full justify-start items-start">
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#071B3B] rounded-md text-white border border-[#071B3B] text-sm md:text-md lg:text-lg w-full h-full min-h-[53px] max-h-[53px]">
                          Buy Now
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#DDEEFF] rounded-md text-[#071B3B] text-sm md:text-md lg:text-lg border border-[#071B3B] w-full h-full min-h-[53px] max-h-[53px] flex justify-center items-center gap-3">
                          Add to Cart <p>+</p>
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-heart-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[33%] flex flex-col gap-4 2xl:gap-8 justify-start items-start">
                    <div className="flex justify-start items-start w-full">
                      <Image
                        src={
                          selectedProduct == "fresh_food"
                            ? "/Images/buy-fresh-item-img.webp"
                            : "/Images/buy-frozen-item-img.webp"
                        }
                        alt="_bg"
                        width={362}
                        height={362}
                        className="object-cover border border-[4px] md:border-[9px] border-white w-full max-h-[200px] md:max-h-[362px] h-full"
                      />
                    </div>
                    <p className="text-lg poppins-medium text-[#1E1E1E]">
                      Sardine
                    </p>
                    <div className="flex flex-col gap-3 w-full justify-start items-start">
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#071B3B] rounded-md text-white border border-[#071B3B] text-sm md:text-md lg:text-lg w-full h-full min-h-[53px] max-h-[53px]">
                          Buy Now
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#DDEEFF] rounded-md text-[#071B3B] text-sm md:text-md lg:text-lg border border-[#071B3B] w-full h-full min-h-[53px] max-h-[53px] flex justify-center items-center gap-3">
                          Add to Cart <p>+</p>
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-heart-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[33%] flex flex-col gap-4 2xl:gap-8 justify-start items-start">
                    <div className="flex justify-start items-start w-full">
                      <Image
                        src={
                          selectedProduct == "fresh_food"
                            ? "/Images/buy-fresh-item-img.webp"
                            : "/Images/buy-frozen-item-img.webp"
                        }
                        alt="_bg"
                        width={362}
                        height={362}
                        className="object-cover border border-[4px] md:border-[9px] border-white w-full max-h-[200px] md:max-h-[362px] h-full"
                      />
                    </div>
                    <p className="text-lg poppins-medium text-[#1E1E1E]">
                      Sardine
                    </p>
                    <div className="flex flex-col gap-3 w-full justify-start items-start">
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#071B3B] rounded-md text-white border border-[#071B3B] text-sm md:text-md lg:text-lg w-full h-full min-h-[53px] max-h-[53px]">
                          Buy Now
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-start items-start w-full">
                        <button className="bg-[#DDEEFF] rounded-md text-[#071B3B] text-sm md:text-md lg:text-lg border border-[#071B3B] w-full h-full min-h-[53px] max-h-[53px] flex justify-center items-center gap-3">
                          Add to Cart <p>+</p>
                        </button>
                        <div className="flex justify-center items-center px-3 py-3 bg-[#071B3B] rounded-md min-w-[53px] max-h-[53px] min-h-[53px] w-fit">
                          <Image
                            src="/Images/buy-heart-icon.webp"
                            alt="_buy"
                            width={30}
                            height={30}
                            className="max-w-[30px] max-h-[30px] w-full h-full cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
