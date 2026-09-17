import { useState } from 'react'

function Profile() {
  const [name, setName] = useState('Kunal Parit')

  return (
    <div className="profile-card">
      <div className="avatar">{name.charAt(0)}</div>
      <h2>{name}</h2>
      <p>BCA Student</p>

      <button onClick={() => setName('Kunal Parit')}>
        Show Profile
      </button>
    </div>
  )
}

export default Profile