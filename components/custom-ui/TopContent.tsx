"use client"

import {BellRing, ChevronDown} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function TopContent(){

    return (
        <>
            <section className="flex justify-end items-center">
                <div className="relative w-11 mr-10">
                        <span
                            className="absolute -top-3 right-0 w-5 h-5 rounded-full bg-red-500 inline-flex justify-center items-center text-xs text-white">{"2"}</span>
                    <BellRing strokeWidth={1.5} className="w-9 h-9 mr-8 text-gray-400"/>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className="bg-white flex items-center gap-2 rounded py-8 ring-0 hover:bg-gray-50 focus-visible:ring-green-700">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-base text-gray-800 font-medium tracking-tight">{"Evan KOFFI"}</p>
                                <p className="text-xs font-light tracking-tight text-gray-300">{"Mon compte"}</p>
                            </div>
                            <div>
                                <ChevronDown strokeWidth={1.5} className="h-6 w-6 text-gray-400"/>
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </section>
        </>
    );

}
