"use client"

import Image from 'next/image'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import {Eye, Sun, SunMoon} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {ComboBox} from "@/components/custom-ui/ComboBox";
import {logger} from "@/lib/logger";
import {useState} from "react";
import {countries, countryDialCodesAndFlags} from "@/lib/countries";

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
            <main className="max-h-screen flex">
                <section className="w-3/5 p-10">
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
                            { renderThemeToggle() }
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center mt-5">
                        <p className="text-2xl font-[600] text-gray-500 leading-9">{"Créer un compte"}</p>
                        <span className="text-sm font-[300] text-gray-400 leading-5 tracking-tight">
                            {"Le seul endroit pour payer toutes vos factures"}
                        </span>
                        <span className="text-sm font-[300] text-gray-400 leading-5 tracking-tight">
                            {"quel que soit votre moyen de paiement."}
                        </span>
                        <span className="text-sm font-[300] text-gray-400 leading-5 tracking-tight">
                            {"Inscrivez-vous !"}
                        </span>
                    </div>

                    {/* Espace Authentification */}
                    <div className="mt-3 mx-32">
                        <form className="p-5">
                            <div>
                                <Label htmlFor="name" className="text-gray-400">Nom</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Exemple: MELESS"
                                    className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible::ring-offset-1 focus-visible:rounded focus-visible:ring-green-700"
                                />
                            </div>
                            <div>
                                <Label htmlFor="surname" className="text-gray-400">Prénoms</Label>
                                <Input
                                    id="surname"
                                    type="text"
                                    placeholder="Exemple: Amary Ange Kevin"
                                    className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:rounded focus-visible:ring-green-700"
                                />
                            </div>

                            <div className="mt-3">
                                <Label htmlFor="phone" className="text-gray-400">Téléphone</Label>
                                <div className="flex justify-center items-center gap-2">
                                    <ComboBox
                                        options={countryDialCodesAndFlags}
                                        popoverWidth={"200px"}
                                        value={selectedValueStock}
                                        onChange={(value) => {
                                            logger.debug(`La valeur sélectionnée est : ${value}`);
                                            setSelectedValueStock(value);
                                        }}
                                        placeholder={"Sélectionnez l'indicatif de votre pays..."}
                                        buttonText={"+225"}
                                    />
                                    <Input
                                        id="phone"
                                        type="text"
                                        placeholder="Exemple: 09 87 65 43 21"
                                        className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:rounded focus-visible:ring-green-700"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label className="text-gray-400">Localisation</Label>
                                <div className="flex justify-center items-center gap-2">
                                    <ComboBox
                                        options={countries}
                                        value={selectedValueCountry}
                                        onChange={(value) => {
                                            logger.debug(`La valeur sélectionnée est : ${value}`);
                                            setSelectedValueCountry(value);
                                        }}
                                        placeholder={"Sélectionnez votre pays..."}
                                        buttonText={"Pays..."}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Ville/Commmune"
                                        className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:rounded focus-visible:ring-green-700"
                                    />
                                </div>
                                <Input
                                    type="text"
                                    placeholder="Quartier..."
                                    className="mt-3 p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible::ring-offset-1 focus-visible::rounded focus-visible:ring-green-700"
                                />
                            </div>

                            <div>
                                <Label htmlFor="email" className="text-gray-400">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Exemple: example@xyz.com"
                                    className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:rounded focus-visible:ring-green-700"
                                />
                            </div>

                            <div className="mt-3">

                                <div className="flex justify-between">
                                    <Label htmlFor="password" className="text-gray-400">Mot de passe</Label>
                                </div>

                                <div
                                    className="flex justify-center items-center mt-3 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg focus-within:ring-2 focus-within:rounded dark:focus-within:ring-green-700 focus-within:ring-green-700">
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Mot de passe"
                                        className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0 border-0 dark:bg-inherit"
                                    />
                                    <Button
                                        variant={"ghost"}
                                        size={"icon"}
                                        className="border-0 dark:bg-inherit mr-2"
                                    >
                                        <Eye className="h-15 w-15 text-gray-400"/>
                                    </Button>
                                </div>

                                <Button
                                    className="mt-5 bg-green-700 rounded-lg w-full h-14 hover:bg-green-800"
                                    asChild
                                >
                                    <Link href={"/dashboard"}>
                                        {"S'inscrire"}
                                    </Link>
                                </Button>

                                <div className="flex justify-center mt-5">
                                    <span className="text-gray-400 text-sm mr-1">
                                      {"Avez-vous déjà un compte ? "}
                                    </span>
                                    <Link href={'/'}
                                          className="text-orange-500 text-sm font-light underline hover:text-orange-500">
                                        {'Connectez-vous'}
                                    </Link>
                                </div>
                            </div>

                        </form>
                    </div>

                </section>
                <section className="w-2/5 relative">
                    <Image
                        fill
                        src="/images/imageBackRegister.png"
                        alt="Picture of the author"
                    />
                </section>
            </main>
        </>
    );

}
