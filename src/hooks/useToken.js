import { useEffect, useState } from "react";

//user er value ta signUp.js er vitor thake nisce 
const useToken = user => {
    const hallName = localStorage.getItem('hallname');
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log('user inside useToken', user)
        const email = user?.user?.email
        const currentUser = {email: email}
        if(email) {
            fetch(`http://localhost:5000/${hallName}/user/${email}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentUser),
            })
            .then(res => res.json())
            .then(data => {
                console.log('data inside useToken',data)
                const accessToken = data.token
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    }, [user])
    return [token]
}
export default useToken