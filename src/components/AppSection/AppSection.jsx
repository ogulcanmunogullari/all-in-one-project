//Import
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Todos from "./Todos/Todos";
import Notes from "./Notes/Notes";
import Timer from "./Timer/Timer";
//Icons
import { LeftIcon, RightIcon } from "../../Icons/Icons";

function AppSection() {
  const [mobileState, setMobileState] = useState(0);
  const todos = useSelector((state) => state.todoSlicer.todos);

  console.log(todos);
  const leftHandle = () => {
    if (mobileState === 0) {
      setMobileState(-1);
    } else if (mobileState === 1) {
      setMobileState(0);
    } else if (mobileState === -1) {
      setMobileState(1);
    }
  };
  const rightHandle = () => {
    if (mobileState === 0) {
      setMobileState(1);
    } else if (mobileState === 1) {
      setMobileState(-1);
    } else if (mobileState === -1) {
      setMobileState(0);
    }
  };
  const windowWith = window.innerWidth;
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center">Search</div>
      {windowWith < 768 ? (
        <div className="flex flex-row justify-between">
          <div
            className="flex flex-col justify-center px-2 text-purple-800"
            onClick={leftHandle}>
            <LeftIcon size={24} />
          </div>
          <div className="w-full">
            {mobileState === -1 && <Notes />}
            {mobileState === 0 && <Todos />}
            {mobileState === 1 && <Timer />}
          </div>
          <div
            className="flex flex-col justify-center px-2 text-purple-800"
            onClick={rightHandle}>
            <RightIcon size={24} />
          </div>
        </div>
      ) : (
        <div>
          <Todos />
          <Notes />
          <Timer />
        </div>
      )}
    </div>
  );
}

export default AppSection;
