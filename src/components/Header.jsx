import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className="flex justify-between -items-center py-4">
      <h1>Tareas {props.task}</h1>
      <Link
        className="bg-indigo-600 px-3 py-2 text-sm rounded-md"
        to={"/addTask"}
      >
        Add Task
      </Link>
    </header>
  );
};
