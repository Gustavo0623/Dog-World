"use client";

import { useState } from 'react'
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginForm () {

    const { push } = useRouter()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const axiosConfig = {
        withCredentials: true, // Include credentials in the request
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        try {
            const {data} = await axios.post("https://frontend-take-home-service.fetch.com/auth/login", formData, axiosConfig);
            
            alert(JSON.stringify(data));

            // Handle successful login, e.g., redirect to another page
            push(`/${formData.name}`)
        } catch (e) {
            const error = e as AxiosError;

            alert(error.message);
            // Handle the error as needed, e.g., display an error message to the user
        };
    };

    return (
        <form onSubmit={handleSubmit} className="flex h-auto w-1/2 flex-col items-stretch gap-4 rounded-lg border bg-white p-4">
            <div className="text-center text-3xl font-bold text-black">Login</div>
            <div className="flex flex-col items-stretch gap-1 text-gray-400 focus-within:text-blue-200">
                <label htmlFor="name" className="font-bold text-black">Full Name:</label>
                <input className="rounded-md border px-4 py-2" type="text" placeholder="John Doe" id="name" defaultValue={formData.name} onChange={handleChange} autoComplete="on" required/>
            </div>
            <div className="flex flex-col items-stretch gap-1 text-gray-400 focus-within:text-blue-200">
                <label htmlFor="email" className="font-bold text-black">Email:</label>
                <input className="rounded-md border px-4 py-2" type="email" placeholder="user@email.com" id="email" defaultValue={formData.email} onChange={handleChange} autoComplete="on" required/>
            </div>
            <button type="submit" className="m-auto h-8 w-24 rounded-md border bg-gray-200 font-bold text-black hover:bg-gray-400">Submit</button> 
        </form>
    )
}