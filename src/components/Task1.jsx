import ProfileCard from './ProfileCard'
import Avatar from '../assets/Avatar.png'
import Abdulazizrasm from '../assets/Abdulazizrasm.jpg'
import './Task1.css'
function Task1() {
  return (
    <div className="Profilecard_container">
      <ProfileCard
        name={"Mukhammadamin"}
        role={"Computer Engineering Student"}
        email={"mukhammadaminxakimov@gmail.com"}
        avatarUrl={Avatar}
        number={1} />

      <ProfileCard
        name={"Abdulaziz"}
        role={"Friend of Mukhammadamin"}
        email={"abdulaziz@gmail.com"}
        avatarUrl={Abdulazizrasm}
        number={2} />
    </div>
  )
}

export default Task1