import Image from "next/image";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {BellRing, ChevronDown, ChevronRight} from "lucide-react";
import CustomCard from "@/components/custom-ui/CustomCard";
import EmblaCarousel from "@/components/custom-ui/Carousel";
import Link from "next/link";
import TopContent from "@/components/custom-ui/TopContent";
import InfoTop from "@/components/marchand-widget/InfoTop";
import { TabsMarchand } from "@/components/marchand-widget/TabsMarchand";

export default function Page(){

    return (
        <>
            <main className="w-full p-5">

                <TopContent />
                <InfoTop/>
                <section className="grid grid-cols-12 gap-2 mt-16">

                    <div className="col-span-12 grid grid-cols-12 gap-2 px-3 py-10 bg-white rounded-lg">
                        <TabsMarchand/>
                    </div>

                </section>

            </main>
        </>
    );

}

const cardItemsStreet = [
    {
        title: "5432",
        url: "/images/icon1.png",
        alt: "icon",
        description: "Factures payées",
        currency: undefined,
    },
    {
        title: "50.000",
        url: "/images/icon2.png",
        alt: "icon",
        description: "Mes dépenses ",
        currency: "FCFA",
    },
    {
        title: "05",
        url: "/images/icon3.png",
        alt: "icon",
        description: "Factures en attente",
        currency: undefined,
    },
];

const invoices = [
    {
        enterprise: "CIE",
        iconEnterprise: "/logo-entreprise/cie.png",
        idInvoice: "133256022",
        date: "10 Avril 2024",
        operationType: "Paiement direct",
        status: "Payé",
        price: 35000,
    },
    {
        enterprise: "CANAL+",
        iconEnterprise: "/logo-entreprise/canal.png",
        idInvoice: "248256022",
        date: "10 Avril 2024",
        operationType: "Paiement pour tiers",
        status: "Payé",
        price: 13000,
    },
]
