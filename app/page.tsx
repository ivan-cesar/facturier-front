"use client"

import Image from 'next/image'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import {Eye, Sun, SunMoon} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import Head from "next/head";

export default function Page(){

  const {theme, setTheme} = useTheme();

  const handleTheme = () => {
    if(theme === "light"){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

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
        <main className="h-screen flex">
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

            <div className="flex flex-col justify-center items-center mt-10">
              <p className="text-2xl font-[600] text-gray-500 leading-9">{"Se connecter"}</p>
              <span className="text-sm font-[300] text-gray-400 leading-5 tracking-tight">
                {"Le seul endroit pour payer toutes vos factures"}
              </span>
              <span className="text-sm font-[300] text-gray-400 leading-5 tracking-tight">
                {"quel que soit votre moyen de paiement."}
              </span>
              <span className="text-sm font-[300] text-gray-400 leading-5 tracking-tight">
                {"Connectez-vous en toute sécurité !"}
              </span>
            </div>

            {/* Espace Authentification */}
            <div className="mt-14 ">
              <form className="p-5 flex flex-col justify-center items-center">
                <div>
                  <Label htmlFor="identifiant" className="text-gray-400">Identifiant du compte</Label>
                  <Input
                      id="identifiant"
                      type="text"
                      placeholder="Email ou numéro de téléphone"
                      className="w-[450px] mt-3 p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible::ring-offset-1 focus-visible:rounded focus-visible:ring-green-700"
                  />
                </div>
                <div className="mt-7">
                  <div className="w-[450px] flex justify-between">
                    <Label htmlFor="password" className="text-gray-400">Mot de passe</Label>
                    <Link
                        href={"/forgot-password"}
                        className="text-sm font-light leading-none text-orange-500"
                    >
                      {"Mot de passe oublié ?"}
                    </Link>
                  </div>
                  <div className="w-[450px] flex justify-center items-center mt-5 ring-1 ring-gray-200 rounded-lg dark:ring-gray-800 focus-within:ring-2 focus-within:rounded dark:focus-within:ring-green-700 focus-within:ring-green-700">
                    <Input
                        id="password"
                        type="password"
                        placeholder="Mot de passe"
                        className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0 border-0 dark:bg-inherit"
                    />
                    <Button variant={"ghost"} size={"icon"} className="border-0 dark:bg-inherit mr-2">
                      <Eye className="h-15 w-15 text-gray-400"/>
                    </Button>
                  </div>

                  <Button
                      className="w-[450px] mt-10 bg-green-700 rounded-lg h-14 hover:bg-green-800"
                      asChild
                  >
                    <Link href={"/dashboard"}>
                      {"Se connecter"}
                    </Link>
                  </Button>

                  <div className="flex justify-center mt-10">
                    <span className="text-gray-400 text-sm mr-1">
                      {"Vous n'avez pas de compte ? "}
                    </span>
                    <Link href={'/register'} className="text-orange-500 text-sm font-light underline hover:text-orange-500">
                      {'Inscrivez-vous'}
                    </Link>
                  </div>
                </div>

              </form>
            </div>

          </section>


          {/* bg-[url('/images/Homme_ON_MOBILE1.png')] */}
          <section className="w-2/5 relative">
            <Image
                fill
                src="/images/imageBackLogin.png"
                alt="Picture of the author"
            />
          </section>
        </main>
      </>
  );

}
