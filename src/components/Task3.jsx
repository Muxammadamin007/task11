import React from 'react'
import Card from './Card'

function Task3() {
  return (
    <div>
      <Card title="Lecture Topics">
        <ul>
          <li>Components</li>
          <li>Props</li>
          <li>Lists and keys</li>
          <li>Conditional rendering</li>
        </ul>
      </Card>

      <Card title="Homework">
        <p>Build a student portfolio component using what we learned in class.</p>
      </Card>
    </div>
  )
}

export default Task3