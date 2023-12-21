"use client";

import axios from "axios";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";

interface UserResponse {
    user: AxiosResponse | null;
    error: AxiosError | null;
};

export default function UserLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const { push } = useRouter()
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    
    useEffect(() => {
        (async ()=> {
            const { user, error } = await getUser();

            if(error) {
                setIsSuccess(false)
                push("/")
                return
            }

            // If login session is valid
            setIsSuccess(true);
        })();
    }, [push]);

    const axiosConfig = {
        withCredentials: true, // Include credentials in the request
    };

   async function logout() {
        await axios.post("https://frontend-take-home-service.fetch.com/auth/logout", axiosConfig)
        push("/")
   };

    if(!isSuccess) {
        return (
            <p>Loading...</p>
        );
    };

    return(
        <main>
            <header>
                <p>Navigation</p>
                <button onClick={logout}>Logout</button>
            </header>
            {children}
        </main>
    ) 
};

async function getUser(): Promise<UserResponse> {
    try {
        const cookies: boolean  = !!document.cookie
        console.log(cookies)
        const config = {
            headers: {
                'Cookie': cookies,
                // Add any other headers as needed
            },
        };
        const data: AxiosResponse = await axios.get('/api/auth/me', config);

        return {
            user: data,
            error: null,
        };
    } catch (e) {
        const error = e as AxiosError;
        

        return {
            user: null,
            error,
        };
    };
};