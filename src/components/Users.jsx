import {Outlet, useNavigate, useSearchParams} from 'react-router-dom'

export const Users = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
    <>
        <h1 onClick={()=> navigate('user1')}>user1</h1>
        <h1 onClick={()=> navigate('user2')}>user2</h1>
        <h1 onClick={()=> navigate('user3')}>user3</h1>
        <Outlet />
        <div>
            <button onClick={()=> setSearchParams({filter: 'active'})}>Active Users</button>
            <button onClick={()=> setSearchParams({})}>Reset Filter</button>
        </div>
        {showActiveUsers ? (<h2>showing active users</h2>) : (<h2>showing all users</h2>)}
     </>
    )
}