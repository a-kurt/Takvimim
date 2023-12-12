import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-500 md:text-2xl text-center">
                        Giriş Yap
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <input type="email" name="email" id="email" className="text-[#374754] bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block w-full p-2.5" placeholder="E-Posta" required="" />
                        </div>
                        <div>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="text-[#374754] bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block w-full p-2.5" required="" />
                        </div>
                        
                        <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded-sm text-sm px-5 py-4 text-center">Giriş Yap</button>
                        <p className="text-sm text-[#374754] text-center">
                            Hesabın yok mu? <Link to="/register" className="font-medium text-blue-500 hover:underline">Hesap Oluştur</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login