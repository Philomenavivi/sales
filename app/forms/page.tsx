"use client"
import { useState } from "react";
import input from "../input/page";
export default function local() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [surname, setsurname] = useState('')
    const [date, setdate] = useState('')
    return (
        <div>
            <h1 className="text-5xl text-bold">sign in</h1>
            <div>
                <input
                    placeholder="name"
                    type="name"
                    aria-label="name"
                />
            </div>
            <div>
                <input
                    placeholder="surname"
                    type="surname"
                    aria-label="surname"
                />
            </div>
            <div>
                <input
                    placeholder="date of birth"
                    type="date of birth"
                    aria-label="date of birth"
                />
            </div>
            <div>
                <input
                    placeholder="set new password"
                    type="set new password"
                    aria-label="set new password"
                />
            </div>
            <div>
                <input
                    placeholder="enter email"
                    type="enter email"
                    aria-label="enter email"
                />
            </div>
            <div>
                <input
                    placeholder="password"
                    type="password"
                    aria-label="password"
                />
            </div>
            <div>
                <button className="rounded-full p-4  bg-blue-400  text-black">


                    submit
                </button>
            </div>

        </div>
    )
}