import { Link } from 'react-router-dom'
import './Container.css'

function Container() {
  return (
    <div className="app">
      <div className="heading">
        <span>REACT LEARNING</span>
        <h1>My Tasks<span>.</span></h1>
        <p>Choose a task to explore.</p>
      </div>

      <div className="cards-container">
        <Link to="/task1" className="task-card">
          <span className="task-number">01</span>
          <h2>Task 1</h2>
          <p>Profile cards</p>
          <span className="task-arrow">↗</span>
        </Link>

        <Link to="/task2" className="task-card">
          <span className="task-number">02</span>
          <h2>Task 2</h2>
          <p>Notification components</p>
          <span className="task-arrow">↗</span>
        </Link>

        <Link to="/task3" className="task-card">
          <span className="task-number">03</span>
          <h2>Task 3</h2>
          <p>Reusable card components</p>
          <span className="task-arrow">↗</span>
        </Link>

        <a
          href="https://muxammadamin007.github.io/webReactUsers/"
          className="task-card"
          target="_blank"
          rel="noreferrer"
        >
          <span className="task-number">04</span>
          <h2>Task 4</h2>
          <p>Open the Task 4 project</p>
          <span className="task-arrow">↗</span>
        </a>

        <Link to="/task5" className="task-card">
          <span className="task-number">05</span>
          <h2>Task 5</h2>
          <p>Course catalog</p>
          <span className="task-arrow">↗</span>
        </Link>

        <Link to="/task6" className="task-card">
          <span className="task-number">06</span>
          <h2>Task 6</h2>
          <p>Filtered course list</p>
          <span className="task-arrow">↗</span>
        </Link>

        <Link to="/task7" className="task-card">
          <span className="task-number">07</span>
          <h2>Task 7</h2>
          <p>Interactive counter</p>
          <span className="task-arrow">↗</span>
        </Link>
      </div>
    </div>
  )
}

export default Container
