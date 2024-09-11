import React from "react";
import yellowBG from "../assets/yellowBG.jpg";
import bannerOne from "../assets/bannerOne.jpg";
import appleWatch from "../assets/apple_watch.avif";

const WelcomeBanner = () => {
  return (
    <>
      <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "isAutoPlay": true
      }'
      className="relative w-full h-[80vh] sm:h-[60vh]"
    >
      <div className="hs-carousel relative overflow-hidden w-full h-[70vh] lg:h-[100vh] md:h-[80vh]">
        {" "}
        {/* Set the height to 80vh */}
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div className="hs-carousel-slide relative flex justify-center items-center h-full w-full">
            <img
              src={yellowBG}
              alt="Slide 1"
              className="object-cover object-[80%] w-full h-full" // Focus 80% from the left, i.e., 20% from the right
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white">
              <h1 className="text-4xl font-bold text-center px-4">
                Adventure Begins Here
              </h1>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center items-center h-full">
              <img
                src={appleWatch}
                alt="Slide 3"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center items-center h-full">
              <img
                src="https://images.unsplash.com/photo-1660245409239-23b212a77793?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 4"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hs-carousel-pagination flex justify-center absolute start-0 end-0 space-x-6 sm:bottom-5 md:bottom-0 lg:bottom-10">
        <span className="hs-carousel-active:bg-black hs-carousel-active:border-white w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-black hs-carousel-active:border-white w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-black hs-carousel-active:border-white w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
      </div>
    </div>
    </>
  );
};

export default WelcomeBanner;

// import React from "react";
// import yellowBG from "../assets/yellowBG.jpg";
// import bannerOne from "../assets/bannerOne.jpg";

// const WelcomeBanner = () => {
//   return (
//     <div
//       data-hs-carousel='{
//         "loadingClasses": "opacity-0",
//         "isAutoPlay": true
//       }'
//       className="relative"
//     >
//       <div className="hs-carousel relative overflow-hidden w-full h-[80vh] sm:h-[60vh]"> {/* Adjust height for small screens */}
//         <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
//           <div className="hs-carousel-slide">
//             <div className="flex justify-center items-center h-full w-full">
//               <img
//                 src={yellowBG}
//                 alt="Slide 1"
//                 className="object-cover object-center w-full h-full"
//               />
//             </div>
//           </div>
//           <div className="hs-carousel-slide">
//             <div className="flex justify-center items-center h-full">
//               <img
//                 src={bannerOne}
//                 alt="Slide 2"
//                 className="object-cover object-center w-full h-full"
//               />
//             </div>
//           </div>
//           <div className="hs-carousel-slide">
//             <div className="flex justify-center items-center h-full">
//               <img
//                 src="https://images.pexels.com/photos/1986996/pexels-photo-1986996.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Slide 3"
//                 className="object-cover object-center w-full h-full"
//               />
//             </div>
//           </div>
//           <div className="hs-carousel-slide">
//             <div className="flex justify-center items-center h-full">
//               <img
//                 src="https://images.pexels.com/photos/1986996/pexels-photo-1986996.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Slide 4"
//                 className="object-cover object-center w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-4">
//         <span className="hs-carousel-active:bg-black hs-carousel-active:border-white size-3 border border-gray-400 rounded-full cursor-pointer"></span>
//         <span className="hs-carousel-active:bg-black hs-carousel-active:border-white size-3 border border-gray-400 rounded-full cursor-pointer"></span>
//         <span className="hs-carousel-active:bg-black hs-carousel-active:border-white size-3 border border-gray-400 rounded-full cursor-pointer"></span>
//         <span className="hs-carousel-active:bg-black hs-carousel-active:border-white size-3 border border-gray-400 rounded-full cursor-pointer"></span>
//       </div>
//     </div>
//   );
// };

// export default WelcomeBanner;
