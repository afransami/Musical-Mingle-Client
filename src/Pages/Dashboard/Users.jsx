import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";



const Users = () => {
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch('http://localhost:5000/allUsers');
    //     return res.json();
    //   });
    
      
      // const handleDelete =(user)=>{
    
      // }
    
      // const handleMakeAdmin =(user)=>{
      //   fetch(`http://localhost:5000/users/admin/${user._id}`,{
      //   method: 'PATCH',
      //   })
      //   .then (res => res.json())
      //   .then (data => {
      //     if (data.modifiedCount){
      //       refetch()
      //       Swal.fire({
      //         position: "center",
      //         icon: "success",
      //         title: `${user.name} is now an admin`,
      //         showConfirmButton: false,
      //         timer: 1500,
      //       });
      //     }
      //   })    
      // }
    return (
        <div className="w-full overflow-y-auto">
      <Helmet>
        <title>Musical Mingle | All users</title>
      </Helmet>
      

      {/* <p className="mx-10">Total User: {users.length}</p>  */}
      <div className="flex justify-between items-center gap-4 my-10 mx-10 ">
      
  <table className="table table-zebra overflow-x-auto w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    {/* <tbody>
        {
            users.map((user, index)=><tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role === 'admin' ? "admin" : 
            <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost bg-yellow-600 text-white btn-xs w-12 h-12 text-2xl">
            <MdAdminPanelSettings></MdAdminPanelSettings>
          </button>
            }</td>
            <td><button onClick={()=>handleDelete(user)} className="btn btn-ghost bg-yellow-600 text-white btn-xs w-12 h-12 text-2xl">
                    <FaTrashAlt></FaTrashAlt>
                  </button> </td>
          </tr>)
        }
 
      
    </tbody> */}
  </table>
</div>
    </div>
    );
};

export default Users;