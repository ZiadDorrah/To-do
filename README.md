# 📝 React To-Do App

A modern **To-Do list application** built with **React**, **Redux Toolkit**, and **React Router**.  
Users can **add**, **edit**, **delete**, **complete**, and **view** tasks with a clean responsive UI.

---

## 🚀 Features

- ✅ Add new tasks with title, notes, and date
- ✏️ Edit existing tasks
- ❌ Delete tasks with confirmation modal
- 🎯 Mark tasks as completed / uncompleted
- 📅 View completed tasks separately
- 🔗 Clickable task titles that open detailed pages
- 💾 State management using **Redux Toolkit**
- 🧭 Routing handled by **React Router**
- 💅 Styled with **CSS Modules** and **Bootstrap**

---

## 🧩 Tech Stack

| Technology        | Purpose               |
| ----------------- | --------------------- |
| **React**         | Front-end library     |
| **Redux Toolkit** | State management      |
| **React Router**  | Client-side routing   |
| **Bootstrap 5**   | Base UI components    |
| **CSS Modules**   | Scoped custom styling |
| **React Icons**   | Icons for UI elements |

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── AddTask.jsx
│   ├── Card.jsx
│   ├── DeleteModal.jsx
│   ├── EditTask.jsx
│   └── ...
│
├── routes/
│   ├── RootLayout.jsx
│   ├── Home.jsx
│   ├── CompletedTasks.jsx
│   ├── TaskDetails.jsx
│   └── NotFound.jsx
│
├── store/
│   └── store.js
│
├── main.js
└── index.css
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/react-todo-app.git
   cd react-todo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🧠 Redux Store Actions

| Action       | Description            |
| ------------ | ---------------------- |
| `addTodo`    | Add a new task         |
| `deleteTodo` | Delete a task          |
| `toggleTodo` | Toggle task completion |
| `editTodo`   | Edit an existing task  |

---

## 🧱 Components Overview

| Component          | Role                             |
| ------------------ | -------------------------------- |
| **AddTask**        | Handles task creation            |
| **Card**           | Displays a task card             |
| **DeleteModal**    | Confirmation before deleting     |
| **EditTask**       | Modal for editing task details   |
| **RootLayout**     | Base layout with navigation      |
| **CompletedTasks** | Shows completed tasks list       |
| **NotFound**       | Fallback page for invalid routes |

---

## 💡 Future Improvements

- 🌙 Dark mode
- 🧭 Search and filter tasks
- 🗓️ Calendar integration
- ☁️ Local storage or backend persistence

---

## 🧑‍💻 Author

**Ziad Dorrah**  
📧 Feel free to reach out or contribute!

---

## 🪪 License

This project is licensed under the **MIT License**.
