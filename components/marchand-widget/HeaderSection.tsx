import React from 'react';
import Image from 'next/image';
import {useTheme} from "next-themes";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Sun, SunMoon } from 'lucide-react';
import {countries, countryDialCodesAndFlags} from "@/lib/countries";


const HeaderSection: React.FC = () => {
    const {theme, setTheme} = useTheme();

    const handleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const renderThemeToggle = () => {
        return (
            theme === "dark" ? (
                <Button variant="ghost" size="icon" className="h-9 w-9 group" onClick={() => handleTheme()}>
                    <Sun className="stroke-iconColor fill-iconColor group-hover:fill-white group-hover:stroke-white" size={20}/>
                </Button>
            ) : (
                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => handleTheme()}>
                    <SunMoon className="stroke-iconColor fill-iconColor" size={20}/>
                </Button>
            )
        );
    };

    return (
        <section className="flex-grow p-10">
            <div className="flex justify-between items-center">
                <div>
                    <Image
                        src="/images/logo.png"
                        width={240}
                        height={30}
                        alt="logo"
                    />
                </div>
                <div className="flex">
                    <div className="mr-3">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost">
                                    <Image
                                        src="/images/france.png"
                                        width={15}
                                        height={15}
                                        alt="french flag"
                                        className="mr-2"
                                    />
                                    <span>{"FR"}</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="center">
                                <DropdownMenuItem>
                                    <Image
                                        src="/images/united-kingdom.png"
                                        width={15}
                                        height={15}
                                        alt="united kingdom flag"
                                        className="mr-2"
                                    />
                                    <span>{"EN"}</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    {renderThemeToggle()}
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
