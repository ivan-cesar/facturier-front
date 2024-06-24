"use client"

import React, {useCallback, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import {Button} from "@/components/ui/button";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import {ChevronLeftIcon} from "lucide-react";

export default function EmblaCarousel() {

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({delay: 2000})]
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="relative w-full h-full">
            <div className="embla__viewport w-full h-full border rounded-lg" ref={emblaRef}>
                <div className="embla__container h-full">
                    <div className="embla__slide flex items-center justify-center">Slide 1</div>
                    <div className="embla__slide flex items-center justify-center">Slide 2</div>
                    <div className="embla__slide flex items-center justify-center">Slide 3</div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-1">
                <Button variant="outline" size="icon" className="rounded-full mr-2" onClick={scrollPrev}>
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={scrollNext}>
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
