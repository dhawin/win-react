import { useState } from "react";

const Hello2 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  console.log("render")
  return (
    <div>
      <form>
        <Name value={name} onCall={(e)=> setName(e.target.value)} />
        <Age value={age} onCall={(e)=> setAge(e.target.value)} />
        <Show age={age} name={name} />
      </form>
    </div>
  )
}

const Name = ({ value, onCall }) => {
  return (
    <div>
      Name : <input type="text" value={value} onChange={(e) => onCall(e)} />
    </div>
  )
}

const Age = ({ value, onCall }) => {
  return (
    <div>
      Age : <input type="text" value={value} onChange={(e) => onCall(e)} />
    </div>
  )
}

const Show = ({ name, age }) => {
  return (
    <div>
      Hi, {name} with age = {age}
    </div>
  )
}

export default Hello2