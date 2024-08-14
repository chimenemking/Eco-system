import React from "react";
import { FaSearch } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import CarouselLoader from "../components/Carousel-loader";
import BlogMain from "../components/BlogMain";

type BlogPageProps = {};

const Blogpage: React.FC<BlogPageProps> = () => {
  return (
    <>
      <main className="py-12 px-4 max-w-6xl">
        <h1 className="text-sm font-light mb-5">Hi, welcome to my Blog</h1>

        {/* Top section */}

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h1 className=" font-semibold text-6xl ">
              <span className=" text-[#33a9ee5e]">THE </span>
              <span className="text-black font-serif ">BLOGS</span>
            </h1>
            <span className="text-lg font-light text-black">
              {" "}
              Your voice deserves to be heard. Share your passions, 
              <br />connect with readers, and build your online community. 
              <br />Start your blogging journey today.
            </span>
          </div>

          {/* search field */}
          <div className="relative">
            <input placeholder="Search for a blog..."
              className="text-md border-b border-b-gray-400 focus:outline-none pl-5 "
            />
            <FaSearch
              className="absolute inset-y-0 mt-[5px] ml-1  text-gray-400"
              size={14}
            />
          </div>
        </div>
        {/*carousel/category buttons  */}
        <CarouselLoader/>
          <BlogMain/>
        
      </main>
    </>
  );
};

export default Blogpage;
