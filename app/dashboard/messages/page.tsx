"use client"

import TopContent from "@/components/custom-ui/TopContent"
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {ChevronDown, Clock, EllipsisVertical, Mic, Plus, Search, SearchIcon, Smile, Star, ThumbsUp} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function Page() {

    return (
        <>
            <main className="w-full p-5">

                <TopContent />

                <section className="w-full bg-white mt-8">

                    <div className="flex justify-between p-4 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <p className="text-4xl font-normal tracking-tight">{"Message"}</p>
                            <Separator orientation="vertical" className="text-gray-500"/>
                            <p className="text-lg text-green-700">{"152"}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-xs font-light">{"Ouvrir un nouveau Ticket  "}</p>
                            <Button className="bg-green-700 hover:bg-green-900" size="icon">
                                <Plus className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex h-full">

                        <div className="w-1/3 border-r border-gray-200">
                            <div className="border-b border-gray-200 p-5">
                                <span
                                    className="text-green-700 font-normal tracking-tight text-base inline-flex gap-2">
                                    {"Tous les messages"} <ChevronDown className="h-6 w-6"/>
                                </span>
                            </div>
                            <div className="border-b border-gray-200 p-5">
                                <div
                                    className="flex items-center gap-1 bg-gray-100 p-2 rounded-lg focus-within:ring-1 focus-within:ring-green-700">
                                    <SearchIcon className="h-6 w-6 text-green-700"/>
                                    <Input
                                        placeholder="Rechercher ou démarrer une nouvelle discussion"
                                        className="text-gray-500 focus-visible:ring-0 border-none shadow-none"
                                    />
                                </div>
                            </div>
                            <div className="border-b border-gray-200 p-5 cursor-pointer bg-green-50">
                                <div className="grid grid-cols-7">
                                    <div className="col-span-1 mr-2">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="col-span-5">
                                        <p className="font-normal text-base">{"Marc Olivier KOFFI"}</p>
                                        <p className="text-xs font-light text-gray-400 tracking-tight line-clamp-2 mt-1">
                                            Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt.
                                            Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat
                                            excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu.
                                            Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur.
                                            Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.
                                        </p>
                                        <p className="inline-flex items-center gap-2 text-gray-400 font-light text-xs mt-1">
                                            <Clock className="h-4 w-4 text-gray-400" />
                                            {"Aujourd'hui"}{" | "}{"15:30"}
                                        </p>
                                    </div>
                                    <div className="col-span-1 flex items-center justify-center">
                                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-600 text-white text-xs">
                                            {"2"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-2/3 flex flex-col h-[700px] bg-gray-50">

                            <div className="flex items-center justify-between p-3 border-b border-gray-300">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p className="font-normal text-gray-600">{"Ines KAMBIRE"}</p>
                                </div>
                                <div className="flex gap-4">
                                    <Button className="bg-white hover:bg-gray-100" size="icon">
                                        <Star className="h-6 w-6 text-green-700"/>
                                    </Button>
                                    <Button className="bg-white hover:bg-gray-100" size="icon">
                                        <Search className="h-6 w-6 text-gray-700"/>
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button className="bg-white hover:bg-gray-100" size="icon">
                                                <EllipsisVertical className="h-6 w-6 text-gray-700"/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem
                                                className="text-green-700 font-normal text-base hover:text-green-700">{"Fermé la discussion"}</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>

                            <div className="flex flex-col flex-grow py-3 px-6">
                                <p className="self-center text-gray-500 text-xs font-light tracking-tight m-2">{"Aujourd'hui | 08:30"}</p>
                                <div>
                                    <div className="p-3 bg-gray-200 w-96 rounded-r-full rounded-tl-full">
                                        <p className="text-sm font-normal text-gray-500">
                                            {"Oh salut! Tout parfaitement.\n" +
                                                "Je vais vérifier et je vous répondrai bientôt"}
                                        </p>
                                    </div>
                                    <p className="text-sm font-normal text-gray-300 mt-1">{"04:56"}</p>
                                </div>
                                <div className="self-end">
                                    <div className="p-3 bg-green-700 w-96 rounded-l-full rounded-tr-full">
                                        <p className="text-sm font-normal text-white">
                                            {"Oh salut! Tout parfaitement.\n" +
                                                "Je vais vérifier et je vous répondrai bientôt"}
                                        </p>
                                    </div>
                                    <p className="text-sm font-normal text-gray-300 mt-1 text-end">{"04:56"}</p>
                                </div>
                            </div>

                            <div className="bg-white p-2 mt-auto">
                                <div className="flex items-center gap-3">
                                    <Button className="bg-white hover:bg-gray-100" size="icon" variant="ghost">
                                        <Smile className="h-6 w-6 text-green-700"/>
                                    </Button>
                                    <div
                                        className="flex items-center gap-1 w-full bg-gray-200/50 p-2 rounded-full focus-within:ring-1 focus-within:ring-green-700">
                                    <Input
                                            placeholder="Rechercher ou démarrer une nouvelle discussion"
                                            className="text-gray-500 focus-visible:ring-0 border-none shadow-none text-xs"
                                        />
                                        <Button className="bg-green-700 rounded-2xl hover:bg-green-800" size="icon">
                                            <Plus className="text-white"/>
                                        </Button>
                                    </div>
                                    <Button className="bg-white hover:bg-gray-100" size="icon" variant="ghost">
                                        <Mic className="h-6 w-6 text-green-700"/>
                                    </Button>
                                    <Button className="bg-white hover:bg-gray-100" size="icon" variant="ghost">
                                        <ThumbsUp className="h-6 w-6 text-green-700"/>
                                    </Button>
                                </div>
                            </div>


                        </div>

                    </div>

                </section>

            </main>
        </>
    )

}
