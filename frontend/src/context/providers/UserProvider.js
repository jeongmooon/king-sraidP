import { useState } from "react";
import UserContext from "../UserContext";

const UserProvider =({children}) =>{
    const [user, setUser] = useState();
    const [isLoggendIn, setIsLoggedIn] = useState(false);

    return(
        <UserContext.Provider
            value={{
                user,
                setUser,
                isLoggendIn,
                setIsLoggedIn
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;