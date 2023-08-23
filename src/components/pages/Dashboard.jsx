import React, { useContext, useEffect } from 'react';
import AuthContext from "../../context/auth/authContext";
import GurujiContents from "./GurujiContents";
import SubscriberContents from './SubscriberContents';
import Gurujis from "./Gurujis";
import Referrals from './Referrals';

const Dashboard = () => {
    const authContext = useContext(AuthContext);

    const { user } = authContext;

    if(user !== null) {
        const role = user.role;
        return (
            <>
                {role === "GURUJI" && 
                    <GurujiContents />
                }

                {role === "ADMIN" &&
                    <Gurujis />
                }

                {role === "AGENT" &&
                    <Referrals />
                }

                {role === "USER" &&
                    <SubscriberContents />
                }
            </>
        )
    }
}

export default Dashboard