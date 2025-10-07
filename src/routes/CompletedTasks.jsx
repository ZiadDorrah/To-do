import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const CompletedTasks = () => {
  const todos = useSelector((state) => state.todo);

  const completedTasks = todos.filter((task) => task.completed);

  return (
    <div className="completedTasks container mt-5">
      <div className=" row g-4">
        {completedTasks.map((todo, index) => (
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

export default CompletedTasks;
