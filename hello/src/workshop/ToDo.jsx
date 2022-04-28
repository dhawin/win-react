import { useState, useEffect } from "react";
import './ToDo.css'

const ToDo = () => {
    const [input, setInput] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function addToDo() {
        if (input) {
            setToDoList([...toDoList, { id: toDoList.length + 1, text: input, value: true }])
            setInput("")
            setY(toDoList.length + 1)
        }
    }

    function clickToDoList(id) {
        let temp = [...toDoList]
        let target = temp.find(x => x.id === id)
        target.value = !target.value

        setToDoList(temp)
    }

    useEffect(()=>{
        const count = toDoList.filter((obj) => obj.value).length;
        setX(count)
        setY(toDoList.length)
    },[toDoList])

    return (
        <div className="main">
            <input value={input} onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={() => addToDo()}>Add</button>
            <br />
            {`${x} remaining out of ${y} tasks`}
            <ul>
                {toDoList && toDoList.map(item => <List {...item} click={clickToDoList} />)}
            </ul>
        </div>
    )
}

const List = ({ id, text, value, click }) => {
    return (
        value ? <li key={"list-id" + id} onClick={() => click(id)}>{text}</li> :
            <li className="is-done" key={"list-id" + id} onClick={() => click(id)}>{text}</li>
    )
}

export default ToDo