import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

export const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setTask({
      ...task,
      id: uuid(),
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask({ ...task, id: params.id }));
    } else {
      dispatch(addTask(task));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params, tasks]);

  return (
    <form
      className="bg-zinc-800 max-w--sm p-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="block text-sm font-bold mb-2" htmlFor="title">
        Task
      </label>
      <input
      className="w-full p-2 rounded.md bg-zinc-600 mb-2"
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
      />
      <label className="block text-sm font-bold mb-2" htmlFor="description">
        Description
      </label>
      <textarea
         className="w-full p-2 rounded.md bg-zinc-600 mb-2"
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      />
      <button className="bg-indigo-800 py-1 px-2 rounded-md" type="submit">Seve</button>
    </form>
  );
};
