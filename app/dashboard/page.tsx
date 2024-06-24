import Image from "next/image";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {BellRing, ChevronDown, ChevronRight} from "lucide-react";
import CustomCard from "@/components/custom-ui/CustomCard";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import EmblaCarousel from "@/components/custom-ui/Carousel";
import Link from "next/link";
import TopContent from "@/components/custom-ui/TopContent";

export default function Page(){

    return (
        <>
            <main className="w-full p-5">

                <TopContent />

                <section className="grid grid-cols-12 gap-2 mt-10">

                    <div className="col-span-8 grid grid-cols-3 gap-2">

                        {cardItemsStreet.map((item, index) => (
                            <CustomCard
                                key={index}
                                title={item.title}
                                url={item.url}
                                alt={item.alt}
                                description={item.description}
                                currency={item.currency}
                            />
                        ))}

                    </div>

                    <div className="col-span-4 rounded-lg">
                        <EmblaCarousel />
                    </div>

                </section>

                <section className="grid grid-cols-12 gap-2 mt-16">

                    <div className="col-span-8 grid grid-cols-3 gap-2 px-3 py-10 bg-white rounded-lg">

                        <div className="col-span-12 flex justify-between items-center gap-2">
                            <div>
                                <p className="font-bold tracking-tight text-xl">{"Mes Activités recentes"}</p>
                                <p className="text-xs text-green-500 tracking-tight font-light">{"liste de tous les paiements réalisés par vous"}</p>
                            </div>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-[180px] bg-gray-50 focus-visible:ring-green-700">
                                        <SelectValue placeholder="Afficher: 10 premiers"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="5">{"5 premiers"}</SelectItem>
                                        <SelectItem value="10">{"10 premiers"}</SelectItem>
                                        <SelectItem value="15">{"15 premiers"}</SelectItem>
                                    </SelectContent>
                                </Select>

                            </div>
                        </div>

                        <div className="col-span-12 mt-10">
                            <Table>
                                <TableCaption>La liste de vos dernières opérations.</TableCaption>
                                <TableHeader>
                                    <TableRow className="bg-green-700 hover:bg-green-800">
                                        <TableHead className="text-white">{"Facturier"}</TableHead>
                                        <TableHead className="text-white">{"ID Facture"}</TableHead>
                                        <TableHead className="text-white">{"Date"}</TableHead>
                                        <TableHead className="text-white">{"Type d'opération"}</TableHead>
                                        <TableHead className="text-white">{"Status"}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {invoices.map((invoice) => (
                                        <TableRow key={invoice.idInvoice}>
                                            <div className="flex gap-2 items-center">
                                                <TableCell>
                                                    <Image
                                                        src={invoice.iconEnterprise}
                                                        alt={"logo enterprise"}
                                                        width={36}
                                                        height={34}
                                                    />
                                                </TableCell>
                                                <TableCell>{invoice.enterprise}</TableCell>
                                            </div>
                                            <TableCell>{invoice.idInvoice}</TableCell>
                                            <TableCell>{invoice.date}</TableCell>
                                            <TableCell>{invoice.operationType}</TableCell>
                                            <TableCell>
                                                <Badge className="ring-1 ring-green-500 rounded-full bg-green-500/30 hover:bg-green-500/30 text-green-500">
                                                    {invoice.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                    </div>

                    <div className="col-span-4 py-10 px-3 rounded-lg bg-white">

                        <div>
                            <p className="font-semibold tracking-tight text-xl">{"Mes factures à payer"}</p>
                            <p className="font-light tracking-tight text-xs text-green-500">{"Liste récente des factures à payer"}</p>
                        </div>

                        <div className="mt-9">

                            {invoices.map((invoice) => (
                                <Button key={invoice.idInvoice} variant="ghost" className="flex items-center mt-1 justify-between px-2 py-7 w-full">
                                    <div className="flex items-center">
                                        <div className="mr-4">
                                            <Image
                                                src={invoice.iconEnterprise}
                                                alt={"logo entreprise"}
                                                width={36}
                                                height={34}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-base text-start">{invoice.enterprise}</p>
                                            <p className="text-xs text-gray-300">ID: {invoice.idInvoice}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-base">{`${invoice.price} FCFA`}</p>
                                        <ChevronRight className="h-5 w-5 text-gray-400"/>
                                    </div>
                                </Button>
                            ))}

                        </div>

                        <div className="w-full mt-5">
                            <Link href={"/vvshvhss"} className="mt-3 flex justify-end">
                            <span className="inline-flex items-center text-sm font-semibold tracking-tight text-green-700">
                                {"Tout voir"}
                                <ChevronRight className="h-5 w-5 text-green-700 ml-3"/>
                            </span>
                            </Link>
                        </div>

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
