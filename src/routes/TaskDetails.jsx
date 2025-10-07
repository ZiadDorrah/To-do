import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import EditTask from "../components/EditTask";

const TaskDetails = () => {
    const { id } = useParams(); // get task id from URL
    const todos = useSelector((state) => state.todo);
    const task = todos.find((t) => String(t.id) === id);

    if (!task) {
        return <h2 className="text-center">Task not found</h2>;
    }

    return (
        <div className="container mt-4">
            <EditTask id={task.id} titleTodo={task.title} notesTodo={task.notes} dateTodo={task.date} />
            <h2>{task.title}</h2>
            <p style={{ color: 'wheat' }}><strong>Notes:</strong> {task.notes}</p>
            <p style={{ color: 'wheat' }}><strong>Date:</strong> {task.date}</p>
            <p style={{ color: 'wheat' }}><strong>Status:</strong> {task.completed ? "Completed ✅" : "Pending ⏳"}</p>
        </div>
    );
};

export default TaskDetails;
