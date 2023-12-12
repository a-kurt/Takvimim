import React from 'react'
import Appointment from './Appointment'

const AppointmentsBox = () => {
  return (
    <div>
        <div className='w-full h-[700px] flex flex-col overflow-y-auto border-b border-r border-l border-[#DDDDDD]'>
            <Appointment name={"appointmentName"} time={"appointmentTime"} />
        </div>
    </div>
  )
}

export default AppointmentsBox