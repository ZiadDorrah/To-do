import React from "react";
import Card from "../components/Card";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import AddTask from "../components/AddTask";

const Home = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div className="Tasks container mt-5">
      <AddTask />
      <div className=" row g-4">
        {todos.map((todo, index) => (
          <div key={index} className="col-md-4 d-flex justify-content-center">
            <Card
              id={todo.id}
              title={todo.title}
              notes={todo.notes}
              date={todo.date}
              completed={todo.completed}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
