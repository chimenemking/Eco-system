import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import React from 'react'

type carouselProps = {}

const CarouselLoader:React.FC<carouselProps> = () => {
  return (
    <>
      
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mx-auto max-w-4xl "
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className=" basis-auto">
            <div className="flex items-center justify-center w-fit h-24 ">
              <Card>
                <CardContent className="flex items-center bg-gray-200 justify-center p-2">
                  <span className="text-[12px] font-medium">Category {index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='' />
      <CarouselNext className='' />
    </Carousel>
    </>
  )
}

export default CarouselLoader