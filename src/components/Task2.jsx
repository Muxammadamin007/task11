import React from 'react'
import NotificationList from './NotificationList';
import './Task2.css'
function Task2() {
  const notifications = [
    { id: 1, type: "success", message: "Profile updated successfully" },
    { id: 2, type: "warning", message: "Password expires in 3 days" },
    { id: 3, type: "info", message: "New lecture materials available" },
    { id: 4, type: "success", message: "Week 11 homework submitted" },
  ];
  return (
    <div className="task2_container">
      <h1>Task 2</h1>
      <NotificationList notifications={notifications} />
    </div>
  )
}


export default Task2