import { useState, useEffect } from "react";
import axios from "axios"

// call data from api : https://jsonplaceholder.typicode.com/users

const Users = () => {
    const [users, setUsers] = useState([]);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("Use effect")
        axios.get("https://jsonplaceholder.typicode.com/users/" + counter)
            .then(function (response) {
                console.log(response);
                setUsers([...users,response.data]);
            })

    }, [counter])

    return (
        <div>
            Demo with API
            <button onClick={() => setCounter(counter + 1)}>Add</button>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </div>
    )
}

export default Users