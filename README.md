<h1>
  <a href = "https://to-do-list-react-six-lime.vercel.app/">To Do List using React</a>
</h1>
<p>
    A simple, feature-rich to-do list web application built with <strong>React</strong>. 
    Keep track of your tasks efficiently with add, update, delete, and persistence functionality.
  </p>

<h2>🚀 Demo</h2>
<p>
  The app is live and can be viewed here: <br />
  <a href="https://to-do-list-react-six-lime.vercel.app/" target="_blank">Live Demo</a>
</p>
<h2>🧱 Tech Stack</h2>
<ul>
    <li><strong>React</strong> (functional components + hooks)</li>
    <li><strong>JavaScript (ES6+)</strong></li>
    <li><strong>CSS</strong> for styling</li>
    <li><strong>LocalStorage</strong> for data persistence</li>
    <li><strong>Create React App</strong></li>
  </ul>
  <h2>✨ Features</h2>
  <ul>
    <li>🔹 Add tasks dynamically</li>
    <li>✏️ Edit tasks in place</li>
    <li>❌ Delete tasks</li>
    <li>🧠 Persistent data via <code>localStorage</code></li>
    <li>✅ Mark tasks as complete/incomplete</li>
    <li>📋 Clear all completed tasks</li>
    <li>🧩 Easy state management using React Hooks</li>
  </ul>
  <h2>📁 Project Structure</h2>
  <pre><code>
/public
  └── index.html
/src
  ├── components/
  │     ├── TodoForm.jsx        # For adding and editing tasks
  │     ├── TodoItem.jsx        # Represents each task
  │     └── TodoList.jsx        # Container for task list
  ├── App.js                   # Root component
  └── index.js                 # Entry point
.gitignore
package.json
README.md
  </code></pre>
<h2>🔧 Installation & Setup</h2>

<h2>Steps to Build and Run:</h2>
<ol>
            <li><b>Install Node.js:</b> Download and install Node.js from <a href="https://nodejs.org/">https://nodejs.org/</a>.</li>
Currently, two official plugins are available:
<li><b>Create a React App:</b>
                <pre><code>npx create-react-app todo-list</code></pre>
            </li>
  <li><b>Navigate into the Project Folder:</b>
                <pre><code>cd todo-list</code></pre>
            </li>
  <li><b>Start the App:</b>
                <pre><code>npm start</code></pre>
            </li>
        </ol>
        <h2>Core Features to Implement:</h2>
        <ul>
            <li>Add task</li>
            <li>Delete task</li>
            <li>Mark task as completed</li>
            <li>Display task list dynamically</li>
            <li>Show motivational image or video beside the task list</li>
        </ul>
        <h2>Sample Component:</h2>
        <pre><code>{`
          function TodoApp() {
            const [tasks, setTasks] = useState([]);
            const [task, setTask] = useState("");
          const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, done: false }]);
      setTask("");
    }
  };
          const toggleTask = (index) => {
    const newTasks = tasks.map((t, i) => i === index ? { ...t, done: !t.done } : t);
    setTasks(newTasks);
  };
return (
    <div>
      <h2>My To-Do List</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="New task..." />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} style={{ textDecoration: t.done ? "line-through" : "none" }} onClick={() => toggleTask(i)}>
            {t.text}
          </li>
        ))}
      </ul>
      <img src="/images/productivity.jpg" alt="Stay Productive" width="300" />
    </div>
);
          </code></pre>

          <h2>Project Folder Structure:</h2>

          <pre><code>
              todo-list/
              ├── public/
              │   ├── index.html
              │   ├── images/
              │   │   └── productivity.jpg
              │   └── videos/
              │       └── focus.mp4
              ├── src/
              │   ├── App.js
              │   ├── index.js
              │   └── components/
              │       └── TodoApp.js
        </code></pre>

        <h2>Extras:</h2>
        <ul>
            <li>Use Tailwind CSS or Bootstrap for responsive design</li>
            <li>Implement filtering (All, Active, Completed)</li>
            <li>Add localStorage or useContext for state persistence</li>
        </ul>
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
