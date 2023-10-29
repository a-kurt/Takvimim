import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1920px]'>
        <h1 className='text-blue-500 font-bold text-3xl mx-auto w-full md:text-5xl'>TAKVİMİM</h1>
        <section>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-500 md:text-2xl text-center">
                            Giriş Yap
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <input type="email" name="email" id="email" class="text-[#374754] bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block w-full p-2.5" placeholder="E-Posta" required="" />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="text-[#374754] bg-white border-[#8EC2F2] border-2 sm:text-sm rounded-sm focus:outline-none focus:border-[#2091F9] block w-full p-2.5" required="" />
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="user-agreement" aria-describedby="user-agreement" type="checkbox" class="w-4 h-4 border border-[#B0B0B0] rounded bg-gray-50 accent-blue-500" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="user-agreement" class="text-[#374754] text-xs"><a href='#' className='text-blue-500 hover:underline'>Kullanıcı Sözleşmesini</a> okudum, kabul ediyorum.</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded-sm text-sm px-5 py-4 text-center">Giriş Yap</button>
                            <p class="text-sm text-[#374754] text-center">
                                Hesabın yok mu? <a href="#" class="font-medium text-blue-500 hover:underline">Hesap Oluştur</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero