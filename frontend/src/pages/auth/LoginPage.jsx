import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import BFMTV_Logo from '../../assets/images/header/BFMTV_Logo.jpg'

// import axios from "axios";





function LoginPage () {

  return (
    <div>
      <div className="flex flex-col items-center pt-8 pb-10 justify-center bg-blue-50">
        <div className="max-w-lg w-full p-10 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col items-center">
            <img src={BFMTV_Logo} className="w-auto h-12" alt="" />
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Se Connecter
            </h2>
            <div className="text-sm mt-2">
              <Link
                to="/register"
                className="font-medium text-black hover:text-gray-700">
                 Vous n'avez pas de compte? <span>S'inscrire</span>
              </Link>
            </div>
          </div>
          <form className="mt-8" >
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                {/* <label htmlFor="email-address sr-only"> Email Address</label> */}
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  autoComplete="email"
                  required
                  className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  
                />
              </div>
              <div className="mb-4 relative">
                {/* <label htmlFor="email-address sr-only"> Email Address</label> */}
                <input
                  type="text"
                  id="Password"
                  name="Password"
                  autoComplete="password"
                  required
                  className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Mot de passe"
                />
                <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
                >
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 mb-5">
              <div className="flex text-sm items-center">
                <p className="text-xs text-black-600 hover:text-black-500">
                    En cliquant sur « Créer un compte », vous acceptez les conditions d'utilisation et vous reconnaissez avoir lu notre politique de confidentialité. Vous reconnaissez en outre que les sociétés affiliées de BFM et WarnerMedia peuvent utiliser votre adresse e-mail à des fins de marketing, de publicités et d'autres offres.
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
      </div>
    </div>
  );
}


export default LoginPage