<h1>
  <a href = "https://to-do-list-react-six-lime.vercel.app/">To Do List using React</a>
</h1>
<p>This guide outlines how to create a To-Do List application using React JS. This app will include features to add, remove, and mark tasks as complete. It will also include media support with images and videos.</p>
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

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
          </code></pre>
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
