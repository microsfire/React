import { useState } from "react"

const ListRender = () => {
    const [list] = useState(['Marcio', 'Adilma', 'John'])

    const [users, setUsers] = useState([
        {id:1, name:'Marcio', age:36},
        {id:2, name:'Adilma', age:37},
        {id:3, name:'John', age:6}
    ])
    // previousUsers
    const deleteRamdom = () => {
        const ramdomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => ramdomNumber !== user.id)
    })
    }                                                           

    return (
        <div>
            <div>
                <ul>
                     {list.map((item, i) => (
                         <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name} - {user.age}</li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={deleteRamdom}>Delete random</button>
            </div>
        </div>
    )
}

export default ListRender;