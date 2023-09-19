import { useEffect, useState } from "react"
import { IUser } from './../interfaces/userInterface'
import axios from 'axios'
import { Loading } from "./global/loading"
import { useActions } from "../hooks/useActions"

export const SelectUserPanel = () => {
    const [allUsers, setAllUsers] = useState<IUser[]>([])

    const [currentUserId, setCurrentUserId] = useState<number>(1)

    const {setCurrentUser} = useActions()

    useEffect(() => {
        const fetchAllUsers = async () => {
            const {data} = await axios.get('http://localhost:3000/stuff')

            setAllUsers(data)            
        }

        fetchAllUsers()
    }, [])

    const handleChangeDataCurrentUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        setCurrentUserId(+event.currentTarget.value)        
    }

    const handleSetCurrentUser = (id: number) => {     
        const selectedUser = allUsers.filter(user => user.id === id)

        setCurrentUser(selectedUser[0])
    }

    if(!allUsers.length) {
        return <Loading />    
    }

    return (
    <div>
        <select name="" id="" onChange={handleChangeDataCurrentUser}>
            {allUsers.map((user, index) => {
                return <option 
                            key={index} 
                            value={user.id}                             
                            >{user.name}
                        </option>
            })}
        </select>
        <button onClick={handleSetCurrentUser(currentUserId)}>Select</button>
    </div>
    )
}