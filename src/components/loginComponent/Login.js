import { useState } from "react";
import Header from "./Header";
import './login.css';

const Login = () => {
    const [isSignUpForm, setIsSignUpForm] = useState(true);
    const changeForm = () => {
        setIsSignUpForm(!isSignUpForm);
    }
    return (
        <div className="loginDiv" >
            <div className="   ">
                <Header />

            </div>

            <div className="formDiv p-10 rounded-md">

                <div className="text-4xl font-bold text-white">Sign {isSignUpForm ? "Up" : "In"} </div>

                <form action="" className="mt-10">
                    {isSignUpForm &&

                        <div className="mb-6">
                            <label htmlFor="name" class="text-gray-300 ">Name - </label>
                            <input type="text" id="name" className="w-full mt-2    bg-gray-700 px-3 py-3 rounded text-white hover:bg-gray-800 focus:bg-gray-800 transition-all" />
                        </div>
                    }
                    <div className="mb-6">
                        <label htmlFor="email" class="text-gray-300 ">Email or Phone Number - </label>
                        <input type="email" id="email" className="w-full mt-2    bg-gray-700 px-3 py-3 rounded text-white hover:bg-gray-800 focus:bg-gray-800 transition-all" />
                    </div>
                    <div>
                        <label htmlFor="password" class="text-gray-300 ">Password - </label>

                        <input type="password" id="password" className="w-full bg-gray-700 mt-2 px-3 py-3 rounded text-white hover:bg-gray-800 focus:bg-gray-800 transition-all" />

                    </div>
                    <div className="text-center mt-8">
                        {/* <a href={isSignUpForm ? "/signu" : "/browse"}> */}
                        <button type="submit" className="bg-red-600 text-white block w-full p-3 font-bold rounded hover:bg-red-700">Sign {isSignUpForm ? "Up" : "In"}</button>
                        {/* </a> */}
                    </div>

                </form>
                <p className="mt-3 text-gray-400">
                    {!isSignUpForm ? "New To Netflix?" : "Already Joined Netflix? "}

                    <span className="underline" onClick={changeForm}> Sign {isSignUpForm ? "In" : "Up"} Now</span>
                </p>
            </div>






        </div>

    )
}

export default Login;