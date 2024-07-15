import React from "react";
import BlogLayout from "./layout";
import { FaSearch } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import CarouselLoader from "../components/Carousel-loader";

type BlogPageProps = {};

const Blogpage: React.FC<BlogPageProps> = () => {
  return (
    <>
      <main className="py-12 px-4 max-w-6xl">
        <h1 className="text-sm font-light mb-5">Hi, welcome to my Blog</h1>

        {/* Top section */}

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-6xl ">
              <span className="text-gray-700">THE </span>
              <span className="text-gray-600 font-serif ">BLOGS</span>
            </h1>
            <span className="text-lg font-light text-gray-700  ">
              {" "}
              Lorem ipsum dolor sut amet adghsh kajsh hhs but ipa hsueu
              <br /> hdhrbb jsjjcbjb hdbehdbb dbedbeb
            </span>
          </div>

          {/* search field */}
          <div className=" relative">
            <input
              placeholder="Search for a blog..."
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
      </main>
    </>
  );
};

export default Blogpage;
