import { useParams } from "react-router-dom"

export const UserDetails = () => {
    const param =  useParams()
    const userId = param.userId
    return <div>user details {userId}</div>
}