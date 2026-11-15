
import React from 'react'
import './ProfileCard.css'

function ProfileCard({
  name,
  role,
  email,
  avatarUrl = 'https://via.placeholder.com/150',
  number
}) {
  return (

    <div className="profile-card">
      <div className="card-top">
        <span className="status">
          <span className="status-dot"></span>
          PROFILE
        </span>
        <span className="card-number">{number} / 2</span>
      </div>

      <div className="avatar-wrapper">
        <img src={avatarUrl} alt={name} className="avatar" />
      </div>

      <div className="profile-info">
        <h2>{name}</h2>
        <p className="role">{role}</p>
      </div>

      <div className="card-divider"></div>

      <div className="email-section">
        <span className="email-label">EMAIL ADDRESS</span>
        <a href={`mailto:${email}`}>{email}</a>
      </div>

      <div className="card-footer">
        <span>PERSONAL CARD</span>
        <span>✦</span>
      </div>
    </div>
  )
}

export default ProfileCard
