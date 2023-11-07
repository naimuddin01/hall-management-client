import { useEffect, useState } from "react"

const useAdmin = user => {
    const hallName = localStorage.getItem('hallname');
    // console.log("userAdmin", user)
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        // email ta undefined dekhasse
        const email = user?.email;
        // console.log("email",email)
        if(email){
            fetch(`http://localhost:5000/${hallName}/admin/${email}`,{
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
        }
    }, [user])
    return [admin]
}

export default useAdmin