import React from "react";
import useSelectClass from "../../Hooks/useSelectClass";
import Classes from "./Classes";

const ClassBooking = () => {
  const [bookClass] = useSelectClass();

  return (
    <div>
      {bookClass.map((item) => (
        <Classes key={item._id} item={item}></Classes>
      ))}
    </div>
  );
};

export default ClassBooking;
