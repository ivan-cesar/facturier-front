"use client"

import Image from "next/image";
import SimpleMenu from "@/components/custom-ui/SimpleMenu";
import {
    CodeXml ,
    UsersRound,
    Link as LucideLink,
    Mail,
    Settings 
} from "lucide-react";

import Link from "next/link";

export default function NavDashboard(){

    return (
        <>
            <main className="w-full h-full flex flex-col justify-between px-1 py-5">
                <div>
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={200}
                            height={30}
                        />
                    </div>

                    <div className="mt-6 ">
                        {menuComponents}
                    </div>
                </div>

            </main>
        </>
    );

}

const menus = [
    {
        label: "Gestion des utilisateurs",
        icon: <UsersRound strokeWidth={1.5} className={'mr-3 h-13 w-13'}/>,
        url: "/marchand/dashboard",
        notifications:0
    },
    {
        label: "Espace Développeurs",
        icon: <CodeXml  strokeWidth={1.5} className={'mr-3 h-13 w-13'}/>,
        url: "/marchand/espace-developpeur",
        notifications:0
    },
    {
        label: "Messagerie",
        icon: <Mail strokeWidth={1.5} className={'mr-3 h-13 w-13'}/>,
        url: "/marchand/messagerie",
        notifications:5
    },
    {
        label: "Paramètres",
        icon: <Settings  strokeWidth={1.5} className={'mr-3 h-13 w-13'}/>,
        url: "/marchand/parametres",
        notifications:0
    },
];

const menuComponents = menus.map((menu, index) => (
    <SimpleMenu
        key={index}
        label={menu.label}
        icon={menu.icon}
        url={menu.url}
        notifications={menu.notifications}
    />
));
