"use client"

import Image from "next/image";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {CornerDownLeft, Mail, Phone, Sun, SunMoon} from "lucide-react";
import Link from "next/link";
import {useTheme} from "next-themes";
import {InputOTP, InputOTPGroup, InputOTPSeparator} from "@/components/ui/input-otp";
import {InputOTPSlot} from "@/components/custom-ui/InputOTP"
import {useState} from "react";

export default function Page() {

    const {theme, setTheme} = useTheme();

    const [actualSection, setActualSection] = useState(1);

    const handleClick = () => {
        setActualSection((prevSection) => prevSection % 3 + 1);
    };

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
        <>
            <main className="h-screen">
                <section className="flex justify-between items-center px-10 py-5">
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
                </section>
                {actualSection === 1 &&
                    (
                        <section className="mt-10">
                            <Card className="w-[500px] mx-auto">
                                <CardHeader className="flex flex-col justify-center items-center">
                                    <CardTitle
                                        className="text-3xl font-bold text-green-700">{"Mot de passe oublié"}</CardTitle>
                                    <CardDescription
                                        className="text-xs text-gray-400 font-light tracking-tight">{"Veuillez sélectionner l'option pour envoyer un code"}</CardDescription>
                                    <CardDescription
                                        className="text-xs text-gray-400 font-light tracking-tight">{"pour réinitialisation de votre mot de passe"}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="p-3">
                                        <div
                                            className="grid w-full items-center gap-4 p-6 border-2 border-green-600 rounded-lg">
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className="flex items-center justify-center h-12 w-12 rounded-full bg-green-700/70">
                                                    <Mail className="text-white h-6 w-6"/>
                                                </div>
                                                <div>
                                                    <p className="text-base font-semibold">{"Réinitialiser par e-mail"}</p>
                                                    <span
                                                        className="text-xs text-gray-400 font-light tracking-tight">{"Nous vous enverrons un code dans votre boite mail "}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-1.5 mt-3">
                                                <Input
                                                    className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:ring-green-700"
                                                    placeholder="Saisissez votre email"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-10">
                                            <div
                                                className="flex items-center gap-4 p-6 border border-gray-400 rounded-lg">
                                                <div
                                                    className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-300">
                                                    <Phone strokeWidth={1.75} className="text-white h-6 w-6"/>
                                                </div>
                                                <div>
                                                    <p className="text-base font-semibold text-gray-400">{"Réinitialiser par SMS"}</p>
                                                    <span
                                                        className="text-xs text-gray-400 font-light tracking-tight">{"Nous vous enverrons un code sur votre téléphone"}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Button
                                            className="w-full mt-10 bg-green-700 hover:bg-green-800 h-12"
                                            onClick={handleClick}
                                        >
                                            {"Réinitialiser le mot de passe"}
                                        </Button>


                                        <div className="flex items-center gap-2 mt-5">
                                            <CornerDownLeft strokeWidth={1.75} className="text-gray-400 h-6 w-6"/>
                                            <Link href={"/"}
                                                  className="text-sm font-light tracking-tight text-gray-400">
                                                Retour pour vous connecter
                                            </Link>
                                        </div>

                                    </form>
                                </CardContent>
                            </Card>
                        </section>
                    )
                }

                {actualSection === 2 &&
                    (
                        <section className="mt-10">
                            <Card className="w-[500px] mx-auto">
                                <CardHeader className="flex flex-col justify-center items-center">
                                    <CardTitle
                                        className="text-3xl font-bold text-green-700">{"Réinitialisation "}</CardTitle>
                                    <CardDescription
                                        className="text-xs text-gray-400 font-light tracking-tight">{"Suivez les étapes pour crée un nouveau mot de passe"}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="p-3">
                                        <div
                                            className="grid w-full items-center gap-4 p-6 border-2 border-green-600 rounded-lg">
                                            <div className="flex flex-col justify-center items-center">
                                                <p className="text-2xl font-semibold text-blue-950">{"CODE OTP"}</p>
                                                <p className="text-xs font-light text-gray-400">{"Veuillez entrer le code à six chiffre reçu par mail/Téléphone"}</p>
                                            </div>
                                            <div className="flex justify-center space-y-1.5 mt-3">
                                                <InputOTP maxLength={6}>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot index={0} className="rounded mr-1 bg-gray-100"/>
                                                        <InputOTPSlot index={1} className="rounded mr-1 bg-gray-100"/>
                                                        <InputOTPSlot index={2} className="rounded mr-1 bg-gray-100"/>
                                                        <InputOTPSlot index={3} className="rounded mr-1 bg-gray-100"/>
                                                        <InputOTPSlot index={4} className="rounded mr-1 bg-gray-100"/>
                                                        <InputOTPSlot index={5} className="rounded mr-1 bg-gray-100"/>
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </div>
                                        </div>

                                        <p className="text-sm font-light tracking-tight text-green-700 text-center mt-5">
                                            {"Renvoyez le code  00 : 30 s"}
                                        </p>

                                        <Button
                                            className="w-full mt-10 bg-green-700 hover:bg-green-800 h-12"
                                            onClick={handleClick}
                                        >
                                            {"Confirmer le code"}
                                        </Button>


                                        <div className="flex items-center gap-2 mt-5">
                                            <CornerDownLeft strokeWidth={1.75} className="text-gray-400 h-6 w-6"/>
                                            <Link href={"/"}
                                                  className="text-sm font-light tracking-tight text-gray-400">
                                                Retour pour vous connecter
                                            </Link>
                                        </div>

                                    </form>
                                </CardContent>
                            </Card>
                        </section>
                    )
                }

                {actualSection === 3 &&
                    (
                        <section className="mt-10">
                            <Card className="w-[500px] mx-auto">
                                <CardHeader className="flex flex-col justify-center items-center">
                                    <CardTitle
                                        className="text-3xl font-bold text-green-700">{"Réinitialisation "}</CardTitle>
                                    <CardDescription className="text-xs text-gray-400 font-light tracking-tight">
                                        {"Remplissez les champs ci-dessous pour"}
                                    </CardDescription>
                                    <CardDescription className="text-xs text-gray-400 font-light tracking-tight">
                                        {"réinitialiser mot de passe"}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="p-3">
                                        <div
                                            className="grid w-full items-center gap-4 p-6">
                                            <div className="flex flex-col space-y-3 mt-3">
                                                <Label htmlFor="new-passord"
                                                       className="text-gray-400">{"Nouveau mot de passe"}</Label>
                                                <Input
                                                    id="new-passord"
                                                    type="password"
                                                    className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:ring-green-700"
                                                    placeholder="Mot de passe entre 8-16 caractère"
                                                />
                                            </div>
                                            <div className="flex flex-col space-y-3 mt-3">
                                                <Label htmlFor="confirm-passord"
                                                       className="text-gray-400">{"Confirmation du mot de passe"}</Label>
                                                <Input
                                                    id="confirm-passord"
                                                    type="password"
                                                    className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:ring-green-700"
                                                    placeholder="entrez à nouveau votre mot de passe"
                                                />
                                            </div>
                                        </div>

                                        <Button
                                            className="w-full mt-10 bg-green-700 hover:bg-green-800 h-12"
                                            onClick={handleClick}
                                        >
                                            {"Réinitialiser le mot de passe"}
                                        </Button>

                                    </form>
                                </CardContent>
                            </Card>
                        </section>
                    )
                }

            </main>
        </>
    );

}
