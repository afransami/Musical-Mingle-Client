import React from 'react';
import usePopularClasses from '../../Hooks/usePopularClasses';

const PopularClasses = () => {

    const [popularClass]= usePopularClasses();

    return (
        <div className=" grid md:grid-cols-2 gap-10 my-10">
           
            <ul>
                {popularClass.map(popularClass => <div key={popularClass._id} className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-110">
  <figure><img src={popularClass.classImage} alt="picture" /></figure>
  <div className="card-body bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600  bg-opacity-30 rounded-b-lg">
    <h2 className="card-title">Music Genre: {popularClass.className}</h2>
    <p className='text-md'>Instructor Name: {popularClass.instructorName}</p>
    <p className='text-md'>Available Seats: {popularClass.availableSeats}</p>
    <div className="card-actions justify-end">
      <button  onClick={() => handleAddToCart(popularClass)} className="btn bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30">Enroll Now</button>
    </div>
  </div>
</div>
                
                
                
    // <div key={popularClass._id} className="card w-full bg-base-100 shadow-xl">
    //   <figure className="px-10 pt-10">
    //     <img
    //       src={popularClass.classImage}
    //       alt="Shoes"
    //       className="rounded-xl w-full h-[300px] bg-contain"
    //     />
    //   </figure>
    //   <div className="badge badge-primary font-bold text-lg top-14 right-10 absolute">
    //    {popularClass.className}
    //   </div>
    //   <div className="card-body bg-gray-100 items-center text-center">
    //     <h2 className="card-title">{popularClass.instructorName}</h2>
    //     <p>{popularClass.availableSeats}</p>
    //     <div className="card-actions">
    //       <button
    //         onClick={() => handleAddToCart(popularClass)}
    //         className="btn btn-outline btn-warning border-0 border-b-4 mt-4 text-yellow-500"
    //       >
    //         Add to cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
    
    
    )}
            </ul>
        </div>
    );


    

    // const desserts = menu.filter((item) => item.category === "dessert");

    // return (
    //     <div>
    //         <div className="grid md:grid-cols-2 gap-10 my-10">
        
    //     {
    //     popularClass.map(item => 
    //       <MenuItems 
    //       key={item._id}
    //       item={item}
    //       ></MenuItems>
    //     )}

    //   </div>
    //     </div>
    // );
};

export default PopularClasses;