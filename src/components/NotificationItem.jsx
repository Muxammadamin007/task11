
import React from 'react'
import './NotificationItem.css'

function NotificationItem({ type, message }) {
  const icon =
    type === "success" ? "✓" :
    type === "warning" ? "!" : "i"

  const label =
    type === "success" ? "Success" :
    type === "warning" ? "Warning" : "Information"

  return (
    <li className={`note note-${type}`}>
      <div className="note-icon">
        {icon}
      </div>

      <div className="note-content">
        <strong>{label}</strong>
        <p>{message}</p>
      </div>

      <div className="note-status"></div>
    </li>
  )
}

export default NotificationItem
