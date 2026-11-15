import React from 'react'
import NotificationItem from './NotificationItem'

function NotificationList({ notifications }) {
  return (
    <div>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} type={notification.type} message={notification.message} />
      ))}
    </div>
  )
}

export default NotificationList