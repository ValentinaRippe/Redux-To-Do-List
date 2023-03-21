import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlice";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export const TaskList = () => {
  const taskState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <Header task={taskState.length} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {taskState.map((task) => (
          <div className="bg-neutral-800 rounded-md p-4" key={task.id}>
            <header className="flex justify-between">
              <h2>{task.title}</h2>

              <div className="flex gap-x-2">
                <Link
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  to={`edit-task/${task.id}`}
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </header>

            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
