import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='h-[90vh] pb-8 pt-5 px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-10'>
       <LeftContent />
       <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content