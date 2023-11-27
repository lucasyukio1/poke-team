import { useState } from "react";

const MyTeam = () => {
  const [teamSize, setTeamSize] = useState(0);

  return (
    <div>
        <p>{teamSize}</p>
        <button onClick={() => setTeamSize((teamSize) => teamSize + 1)}>Add</button>
    </div>
  )
}

export default MyTeam