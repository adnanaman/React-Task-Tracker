import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskHeader from "./components/TaskHeader";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Appointment",
      day: "Feb 5th at 2:20PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting",
      day: "Jan 5th at 2:20PM",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    console.log(id + " deleted");
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const onAddTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="container">
        <TaskHeader
          title="Task Master"
          showAdd={showAddTask}
          visibility={() => setShowAddTask(!showAddTask)}
        ></TaskHeader>

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAddTask={onAddTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                ></Tasks>
              ) : (
                "No tasks to show"
              )}
            </>
          )}
        />
        <Route path="/About" component={About} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
