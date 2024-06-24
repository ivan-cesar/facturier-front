"use client"

import Image from "next/image";
import SimpleMenu from "@/components/custom-ui/SimpleMenu";
import {
    HandCoins,
    Home,
    LayoutDashboard,
    NotebookText,
    ReceiptText,
    Link as LucideLink,
    Mail,
    MessageCircleQuestion
} from "lucide-react";

import Link from "next/link";

export default function Navs(){

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

                    <div className="mt-6">
                        {menuComponents}
                    </div>
                </div>

                <div className="h-52 w-52 px-5 py-3 flex flex-col gap-2 rounded-lg bg-gradient-to-r from-green-700 to-green-400">
                    <p className="font-semibold tracking-tight text-base text-center text-white">
                        {"Téléchargez la version mobile"}
                    </p>
                    <Link href={"/ghvghvgh"} className="flex items-center justify-center">

                    </Link>
                    <Link href={"/ghvghvgh"} className="flex items-center justify-center">

                    </Link>
                </div>

            </main>
        </>
    );

}

const menus = [
    {
        label: "Tableau de bord",
        icon: <Home strokeWidth={1.5} className={'mr-3 h-13 w-13'}/>,
        url: "/dashboard"
    },
    {
        label: "Mes Factures",
        icon: <ReceiptText strokeWidth={1.5} className={'mr-3 h-13 w-13'}/>,
        url: "/dashboard/invoices"
    },
    {
        label: "Payer pour un tiers",
        icon: <HandCoins strokeWidth={1.5} className={'mr-3 h-13 w-13'}/>,
        url: "/dashboard/pay-for-other"
    },
    {
        label: "Journal des opérations",
        icon: <NotebookText strokeWidth={1.5} className={'mr-3 h-13 w-13'}/>,
        url: "/dashboard/operation-newspaper"
    },
    {
        label: "Lien de paiement",
        icon: <LucideLink strokeWidth={1.5} className={'mr-3 h-13 w-13'}/>,
        url: "/dashboard/payment-link"
    },
    {
        label: "Message",
        icon: <Mail strokeWidth={1.5} className={'mr-3 h-13 w-13'}/>,
        url: "/dashboard/messages",
    },
    {
        label: "Foire aux questions",
        icon: <MessageCircleQuestion className={'mr-3 h-13 w-13'} strokeWidth={1.5}/>,
        url: "/dashboard/frequently-asked-questions"
    },
];

const menuComponents = menus.map((menu, index) => (
    <SimpleMenu
        key={index}
        label={menu.label}
        icon={menu.icon}
        url={menu.url}
    />
));
