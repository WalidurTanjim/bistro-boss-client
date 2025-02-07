import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext';

const useAuth = () => {
    const auth = useContext(UserContext);
    return auth;
};

export default useAuth;