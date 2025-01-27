import axios from "axios";
import {useEffect, useState, createContext } from "react";

export const ProfileContext = createContext<{userProfile: any}>({userProfile: null});


export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const [userProfile, setUserProfile] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios({
                    method: 'GET',
                    url: 'http://localhost:5000/users',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (res.status === 201) {
                    setUserProfile(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <ProfileContext.Provider value={{userProfile }}>
            {children}
        </ProfileContext.Provider>
    )
}
export default ProfileContextleContext}

export default Context