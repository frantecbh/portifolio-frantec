import React, { useEffect, useState } from 'react'
import { ContainerProrile } from './styles'

interface User {
    name: string;
    login: string;
    avatar_url: string;
    bio: string;

}

export const Profile = () => {

    const [user, setUser] = useState<User>()


    useEffect(() => {

        fetch('https://api.github.com/users/frantecbh')
            .then(response => response.json())
            .then(data => {
                setUser(data)
                console.log(user?.login)
            })
            .catch(err => console.error(err));

    }, [])


    return (
        <ContainerProrile>
            <img src={user?.avatar_url} alt="" />
            <div>
                <h1>{user?.name}</h1>
                <p>Full Stack Developer</p>
            </div>
        </ContainerProrile>
    )
}
