import React from 'react'
import { ImCross } from "react-icons/im";

const Appointment = ({ name, time }) => {
  return (
    <section>
        <div className='flex flex-row justify-between items-center p-3 border-b border-[#DDDDDD]'>
            <div className='w-2/3 flex sm:flex-row flex-col'>
                <p className='w-1/2'>{name}</p>
                <p className='w-1/2'>{time}</p>
            </div>
            <div className="w-1/3 flex align-middle justify-end">
                <ImCross className='mr-5' size={20} />
            </div>
        </div>
    </section>
  )
}

export default Appointment