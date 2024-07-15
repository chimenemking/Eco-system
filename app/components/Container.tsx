import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}

const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='max-w-[1100px] w-full mx-auto bg-white min-h-screen flex flex-col'>
        {children}
    </div>
  )
}

export default Container