import React from 'react'
import Request from './Request'

const RequestBox = () => {
  return (
    <div>
        <div className='w-full h-[700px] flex flex-col overflow-y-auto border-b border-r border-l border-[#DDDDDD]'>
            <Request name={"requestName"} time={"requestTime"}/>
        </div>
    </div>
  )
}

export default RequestBox