


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  md:px-8 xl:px-10 ">
     <div className='grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-3 max-w-[1400px] m-auto '>
      <GridItem title="1">
     
      </GridItem>
      <GridItem title="2">
     
      </GridItem>
      <GridItem title="3">
     
      </GridItem>
      
     </div>
    </main>
  )
}

function GridItem({title, children}:any){
  return(
    <>
    <div className='flex flex-col items-center justify-center p-4 border border-slate-400 bg-gray-100 rounded-xl w-[200px] h-[200px]'>
      <h3 className='text-3xl font-semibol] text-white mb-4'>{title}</h3>
      {children}
    </div>
    </>
  )
}
