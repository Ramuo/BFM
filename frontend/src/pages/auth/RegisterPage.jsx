import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import BFMTV_Logo from '../../assets/images/header/BFMTV_Logo.jpg'

// import axios from "axios";





function RegisterPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    // const [registered, setRegistered] = useState(false);

    const submitHandler = (e) => {
        console.log(e)
    };


    //TO VALIDATE PASSWORD
    const validatePassword = () => {
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSymbol = /[@$!%*?&]/.test(password);
        const isLengthValid = password.length >= 8;
    
        return {
          hasLowercase,
          hasUppercase,
          hasDigit,
          hasSymbol,
          isLengthValid,
        };
    };
    const passwordValidation = validatePassword();

    //TO SHOW PASSWORD
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <main className="flex flex-col items-center pt-8 pb-10 justify-center bg-blue-50">
            <div className="max-w-lg w-full p-10 bg-white rounded-xl shadow-lg">
                <div className="flex flex-col items-center">
                    <img src={BFMTV_Logo} className="w-auto h-12" alt="" />
                    <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
                        Créer un compte
                    </h2>
                    <div className="text-sm mt-2">
                        <Link
                        to="/login"
                        className="font-medium text-black hover:text-gray-700">
                            Vous avez déjà un compte? <span>Se Connecter</span>
                        </Link>
                    </div>
                </div>

                <form className="mt-8" onSubmit={submitHandler}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <input
                            type="email"
                            id="email-address"
                            name="email"
                            autoComplete="email"
                            required
                            className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email"
                            value={email}  
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 relative">
                            <input
                            type={showPassword ? "text" : "password"}
                            id="Password"
                            name="Password"
                            autoComplete="password"
                            required
                            className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Mot de passe"
                            value={password}  
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={() =>{
                                setIsPasswordFocused(true)
                                setValidationErrors(false)
                            }}
                            />
                            <span 
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
                            onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <Eye size={20}/> : <EyeOff size={20}/>}
                            </span>
                            {isPasswordFocused && (
                                <div
                                style={{
                                position: "absolute",
                                top: "100%",
                                left: "0",
                                display: password ? "block" : "none",
                                zIndex: "999", // Ensure the tooltip is above other elements
                                }}
                                className="bg-white text-xs p-2 border rounded drop-shadow-md border-gray-500 z-10"
                                >
                                    <div
                                    style={{
                                        color: passwordValidation.hasLowercase
                                        ? "green"
                                        : "red",
                                    }}
                                    >
                                        {passwordValidation.hasLowercase ? "✓" : "✗"} Le mot de passe doit contenir au moins une lettre minuscule
                                    </div>

                                    <div
                                    style={{
                                        color: passwordValidation.hasUppercase
                                        ? "green"
                                        : "red",
                                    }}
                                    >
                                        {passwordValidation.hasUppercase ? "✓" : "✗"} Le mot de passe doit contenir au moins une lettre majuscule
                                    </div>

                                    <div
                                    style={{
                                        color: passwordValidation.hasDigit ? "green" : "red",
                                    }}
                                    >
                                        {passwordValidation.hasDigit ? "✓" : "✗"} Le mot de passe doit contenir au moins une chiffre
                                    </div>

                                    <div
                                    style={{
                                        color: passwordValidation.hasSymbol ? "green" : "red",
                                    }}
                                    >
                                        {passwordValidation.hasSymbol ? "✓" : "✗"} Le mot de passe doit avoir moins un caractère spécial
                                    </div>

                                    <div
                                    style={{
                                        color: passwordValidation.isLengthValid
                                        ? "green"
                                        : "red",
                                    }}
                                    >
                                        {passwordValidation.isLengthValid ? "✓" : "✗"} Le mot de passe doit contenir au minimum 8 caractères
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-5 mb-5">
                        <div className="flex text-sm items-center">
                        <p className="text-xs text-black-600 hover:text-black-500">
                            En cliquant sur «S'inscrire », vous acceptez les conditions d'utilisation et vous reconnaissez avoir lu notre politique de confidentialité. 
                        </p>
                        </div>
                    </div>
                
                    <div>
                        <button
                        type="submit"
                        className=" w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-md text-white bg-indigo-900 hover:bg-indigo-950 focus:outline-none">
                            S'inscrire
                        </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2 mb-2">
                        <div className="flex text-sm items-center">
                            <p className="text-xs text-black-600 hover:text-black-500">
                                Pour vous désinscrire à tout moment, consultez les options disponibles ici.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default RegisterPage;