import { useEffect, useState } from "react"

export default function FetchAPI () {
    const [user, setUser] = useState([])

    const fetchData = () => {
        fetch("https://randomuser.me/api/?result=1")
            .then(response => response.json()) //extract usable data fron HTTP response
            .then(data => setUser(data))
    }

    useEffect(()=> {
        fetchData()
    }, [])

    //see if the key of object from API is not null
    return Object.keys(user).length > 0 ? (
        <div>
            <h1>Data returned</h1>
            <h2>First Name: {user.results[0].name.first}</h2>
            <h2>Last Name: {user.results[0].name.last}</h2>
        </div>
    ) : (
        <h1>Data pending...</h1>
    )
}