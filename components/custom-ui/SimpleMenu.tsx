"use client"

import React from "react";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";

interface SimpleMenuProps{
    label: string;
    icon: React.ReactElement;
    url: string;
    notifications?: number;
}

export default function SimpleMenu({notifications = 0, ...props}: SimpleMenuProps){

    const pathname = usePathname();

    return (
        <Button className={cn("justify-start px-3 shadow-none mt-1 bg-inherit text-gray-400 dark:text-white dark:hover:dark:bg-green-700/60 hover:bg-green-400/20", {
            'bg-green-500/20 text-green-700 dark:bg-green-500/20': pathname === props.url
        })} size="lg" asChild>
            <Link href={{pathname: `${props.url}`}}>
                <span>
                    {props.icon}
                </span>
                <span className={cn("tracking-tight font-light", {
                    'font-medium': pathname === props.url
                })}>
                    {props.label}
                </span>
                {notifications > 0 && <span className="ml-4 h-6 w-6 text-xs text-white rounded-full bg-red-600 inline-flex justify-center items-center">{notifications}</span>}
            </Link>
        </Button>
    );

}
