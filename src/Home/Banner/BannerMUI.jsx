import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export default function Example() {
  return (
    <div></div>
    // <Carousel className="rounded-xl">
    //   <div className="relative h-full w-full">
    //     <img
    //       src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    //       alt="image 1"
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
    //       <div className="w-3/4 text-center md:w-2/4">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
    //         >
    //           The Beauty of Nature
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80"
    //         >
    //           It is not so much for its beauty that the forest makes a claim
    //           upon men&apos;s hearts, as for that subtle something, that
    //           quality of air that emanation from old trees, that so
    //           wonderfully changes and renews a weary spirit.
    //         </Typography>
    //         <div className="flex justify-center gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative h-full w-full">
    //     <img
    //       src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    //       alt="image 2"
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
    //       <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
    //         >
    //           The Beauty of Nature
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80"
    //         >
    //           It is not so much for its beauty that the forest makes a claim
    //           upon men&apos;s hearts, as for that subtle something, that
    //           quality of air that emanation from old trees, that so
    //           wonderfully changes and renews a weary spirit.
    //         </Typography>
    //         {/* <div className="flex gap-2"> */}
    //         <div className="mt-8 flex flex-wrap gap-4 text-center">
    //         <a
    //           className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
    //           href="#"
    //         >
    //           <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

    //           <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
    //             Get Started
    //           </span>
    //         </a>
    //         <a
    //           className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
    //           href="#"
    //         >
    //           <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

    //           <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
    //             Learn More
    //           </span>
    //         </a>
    //       {/* </div> */}

    //           {/* <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative h-full w-full">
    //     <img
    //       src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    //       alt="image 3"
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
    //       <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
    //         <Typography
    //           variant="h1"
    //           color="white"
    //           className="mb-4 text-3xl md:text-4xl lg:text-5xl"
    //         >
    //           The Beauty of Nature
    //         </Typography>
    //         <Typography
    //           variant="lead"
    //           color="white"
    //           className="mb-12 opacity-80"
    //         >
    //           It is not so much for its beauty that the forest makes a claim
    //           upon men&apos;s hearts, as for that subtle something, that
    //           quality of air that emanation from old trees, that so
    //           wonderfully changes and renews a weary spirit.
    //         </Typography>

    //         {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
    //         <a
    //           className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
    //           href="#"
    //         >
    //           <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

    //           <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
    //             Get Started
    //           </span>
    //         </a>
    //         <a
    //           className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
    //           href="#"
    //         >
    //           <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

    //           <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
    //             Learn More
    //           </span>
    //         </a>
    //       </div> */}

    //         <div className="flex gap-2">
    //           <Button size="lg" color="white">
    //             Explore
    //           </Button>
    //           <Button size="lg" color="white" variant="text">
    //             Gallery
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Carousel>
  );
}