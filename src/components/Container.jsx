
import React from 'react'
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
        <Link to="/Task1" className="task-card">
          <span className="task-number">01</span>
          <h2>Task 1</h2>
          <p>Notification Component</p>
          <span className="task-arrow">↗</span>
        </Link>

        <Link to="/Task2" className="task-card">
          <span className="task-number">02</span>
          <h2>Task 2</h2>
          <p>Reusable Card Component</p>
          <span className="task-arrow">↗</span>
        </Link>

        <Link to="/Task3" className="task-card">
          <span className="task-number">03</span>
          <h2>Task 3</h2>
          <p>Task 3 Description</p>
          <span className="task-arrow">↗</span>
        </Link>
        <a href="https://muxammadamin007.github.io/webReactUsers/" className="task-card">
          <span className="task-number">04</span>
          <h2>Task 4</h2>
          <p>Git repository link: https://github.com/Muxammadamin007/<br></br>webReactUsers</p>
          <span className="task-arrow">↗</span>
        </a>
        <Link to="/Task5" className="task-card">
          <span className="task-number">05</span>
          <h2>Task 5</h2>
          <p>Task 5 Description</p>
          <span className="task-arrow">↗</span>
        </Link>
        <Link to="/Task6" className="task-card">
          <span className="task-number">06</span>
          <h2>Task 6</h2>
          <p>Task 6 Description</p>
          <span className="task-arrow">↗</span>
        </Link>
        <Link to="/Task7" className="task-card">
          <span className="task-number">07</span>
          <h2>Task 7</h2>
          <p>Task 7 Description</p>
          <span className="task-arrow">↗</span>
        </Link>
      </div>
    </div>
  )
}

export default Container
