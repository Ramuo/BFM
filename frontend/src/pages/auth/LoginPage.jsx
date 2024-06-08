import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { Eye, EyeOff } from "react-feather";
import {toast} from "react-toastify";
import {Spinner} from "flowbite-react";
import BFMTV_Logo from '../../assets/images/header/BFMTV_Logo.jpg';
import Header from "../../components/header/Header";



import {useLoginMutation} from '../../slices/userApiSlice';
import {setCredentials} from "../../slices/authSlice";




function LoginPage () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    

    const [login, { isLoading }] = useLoginMutation();

    const {userInfo} = useSelector((state) => state.auth);


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

    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(() => {
        if(userInfo){
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
                dispatch(setCredentials({ ...res }));
                navigate(redirect);
            } catch (err) {
                toast.error(err?.data?.message || err.error );
        } 
    
    };

    return (
        <>
        <Header/>
        <main className="flex flex-col items-center pt-8 pb-10 justify-center bg-blue-50">
            <div className="max-w-lg w-full p-10 bg-white rounded-xl shadow-lg">
                <div className="flex flex-col items-center">
                    <img src={BFMTV_Logo} className="w-auto h-12" alt="" />
                    <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
                        Se Connecter
                    </h2>
                    <div className="text-sm mt-2">
                        <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}
                        className="font-medium text-black hover:text-gray-700">
                            Vous n'avez pas de compte? <span>S'inscrire</span>
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
                            className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-4"
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
                            }}
                            />
                            <span 
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
                            onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <Eye size={20}/> : <EyeOff size={20}/>}
                            </span>
                        </div>
                        {isPasswordFocused && (
                            <div
                            style={{
                            display: password ? "block" : "none",
                            }}
                            className="bg-white text-xs p-2 border rounded drop-shadow-md border-gray-500"
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

                    <div className=" mb-3 hover:text-indigo-500 hover:underline">
                        {" "}
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                
                    <div>
                        <button
                        type="submit"
                        className=" w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-md text-white bg-indigo-900 hover:bg-indigo-950 focus:outline-none"
                        >
                          {isLoading ? (
                            <Spinner size='sm'/>
                          ) : (
                            "Connexion"
                          )}
                        </button>
                    </div>
                </form>
            </div>
        </main>
        </>
    );
}



export default LoginPage