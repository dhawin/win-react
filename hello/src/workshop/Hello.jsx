import { useState } from "react";

const Hello = ({initialName, onCall}) => {
  const [name, updateName] = useState(initialName);
  const handleName = (event) => {
	onCall(event.target.value);
	updateName(event.target.value);
  }
  return (
    <div>
      <form>
		Name : <input type="text" onChange={handleName} />
	  </form>
	 {name ? <b>Hi, {name}</b> : "Please enter your name"}
    </div>
  )
}

export default Hello