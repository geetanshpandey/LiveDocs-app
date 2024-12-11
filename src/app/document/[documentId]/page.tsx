"use client";
import React from "react";
import NavbarSidebar from "@/components/main/navbarsidebar";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const addDocument = () => {
  toast.success("Comment posted");
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" />
      <NavbarSidebar />
      
      <div className="fixed top-0 z-50 w-full flex items-center justify-between bg-white px-4 py-2 border-b border-gray-200 mt-16 h-14">
        {/* Buttons (B1 to B13) */}
        <div className="flex space-x-2 sticky top-16 bg-white z-10 overflow-x-auto sm:justify-start">
          {Array.from({ length: 13 }).map((_, i) => (
            <button
              key={i}
              className="bg-blue-50 px-3 py-1 mx-1 rounded hover:bg-gray-50 whitespace-nowrap"
            >
              {i + 1}
            </button>
          ))}
        </div>
        
        {/* Live and Delete */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="mr-2 w-5 h-5 bg-red-500 rounded-full"></div>
            <div className="mr-2 w-5 h-5 bg-green-400 rounded-full"></div>
            <div className="mr-12 w-5 h-5 bg-purple-700 rounded-full"></div>
            <Button variant="default" className="bg-gray-50 text-black hover:bg-gray-100">
              <span>LIVE</span>
              <div className="ml-2 w-2 h-2 bg-red-500 rounded-full"></div>
            </Button>
          </div>
          <Button variant="destructive" className="scale-95">
            Delete
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow mt-28 flex-col lg:flex-row">
        {/* Left Text Area (Static) */}
        <div className="flex-1 p-4 border-r border-gray-200">
          <h2 className="lg:fixed lg:left-16 text-3xl font-bold mt-2 text-center">
            <span className={`${caveat.className}`}>Text Area</span>
          </h2>
          <textarea
            className="lg:fixed top-44 left-0 w-full lg:w-[66%] h-[50vh] lg:h-[72%] p-2 border border-gray-300 rounded-lg resize-none focus:outline-none lg:scale-90"
            placeholder="//Write something here..."
          />
        </div>

        {/* Right Side Panel (Scrollable) */}
        <div className="w-full lg:w-1/3 p-4 mt-1 flex flex-col overflow-y-auto">
          <span className={`${caveat.className} text-center text-3xl mt-2 font-bold mb-4`}>
            Additional Feature
          </span>
          
          {/* Write Comment Section */}
          <div className="mb-4 border border-gray-200 p-2 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              <span className={`${caveat.className}`}>Write Comment</span>
            </h2>
            <div className="flex flex-col space-y-2">
              <textarea
                className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none resize-none overflow-hidden"
                placeholder="Write a comment..."
                style={{ minHeight: "3rem" }}
                onInput={(e) => {
                  e.currentTarget.style.height = "auto"; // Reset height
                  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; // Set height to match content
                }}
              />
              <button
                onClick={addDocument}
                className="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-600 self-start"
              >
                ➤
              </button>
            </div>
          </div>

          {/* Message Thread */}
          <div className="border border-gray-200 p-4 h-[40vh] lg:h-56 rounded-lg flex-grow">
            <div className="mb-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-2xl">
                  <span className={`${caveat.className}`}>Name</span>
                </span>
                <span className="text-sm text-gray-500">Time</span>
              </div>
              <p className="mt-2 text-gray-600">Message</p>
              <button className="text-blue-500 mt-2">Reply in Thread</button>
            </div>

            <div className="mt-2">
              <textarea
                className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:outline-none resize-none overflow-y-auto"
                placeholder="Write a reply..."
                style={{ minHeight: "3rem" }}
                onInput={(e) => {
                  e.currentTarget.style.height = "auto"; // Reset height
                  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; // Set height to match content
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
