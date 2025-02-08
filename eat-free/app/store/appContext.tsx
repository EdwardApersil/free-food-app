'use client'
import axios from "axios";
import { useEffect, useState, createContext, ReactNode } from "react";

interface ProfileContextType {
  userProfile: null;
}

export const ProfileContext = createContext<ProfileContextType>({ userProfile: null });

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: 'GET',
          url: 'http://localhost:8000/users',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (res.status === 200) {
          setUserProfile(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ProfileContext.Provider value={{ userProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

const Context = {ProfileContext}

export default Context;