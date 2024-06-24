"use client"

import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import {Sun, SunMoon} from "lucide-react";
import {useState} from "react";
import HeaderSection from '@/components/marchand-widget/HeaderSection';
import { ResetPasswordCard } from "@/components/marchand-widget/ResetPasswordCard";

export default function Page(){

    const {theme, setTheme} = useTheme();

    const handleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const [selectedValueStock, setSelectedValueStock] = useState<string>("")
    const [selectedValueCountry, setSelectedValueCountry] = useState<string>("")

    // Fonction pour générer le contenu du bouton de basculement de thème en fonction du thème actuel
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
        <>
            <main>
                <HeaderSection/>
                <div className="flex items-center justify-center">
                    <ResetPasswordCard/>
                </div>
            </main>
        </>
    );

}
