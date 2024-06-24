"use client"

import {BellRing, CalendarDays, CalendarIcon, ChevronDown, ChevronRight, SearchIcon} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {Input} from "@/components/ui/input";
import TopContent from "@/components/custom-ui/TopContent";

export default function Page() {
    return (
        <>
            <main className="w-full p-5">

                <TopContent />

                <section className="flex mt-10 gap-4">
                    <div className="w-3/4 flex gap-2 items-center bg-white rounded-lg shadow p-2">
                        <div className="p-3 bg-green-700 flex justify-center items-center rounded-lg">
                            <SearchIcon className="h-6 w-6 text-white"/>
                        </div>
                        <Input className="p-6 text-gray-400 ring-0 border-0 shadow-none focus-visible:ring-green-700 focus-visible:ring-2" placeholder="Recherchez ID Facture ou facturier"/>
                    </div>
                    <div className="w-1/4">
                        <Button className="flex items-center mt-1 justify-between px-2 py-8 w-full bg-white hover:bg-gray-50">
                            <div className="flex items-center">
                                <div className="mr-4 bg-green-500/50 h-12 w-12 rounded-lg inline-flex items-center justify-center text-xs text-white">
                                    <CalendarDays className="h-6 w-6 text-green-700"/>
                                </div>
                                <div>
                                    <p className="text-base text-start text-gray-700">{"Filtre périodique"}</p>
                                    <p className="text-sm font-light tracking-tight text-gray-400">{"17 Mars 2024 - 10 Avril 2024"}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <ChevronRight className="h-5 w-5 text-gray-400"/>
                            </div>
                        </Button>
                    </div>
                </section>

                <section className="grid grid-cols-12 gap-2 mt-16">

                    <div className="col-span-12 grid grid-cols-3 gap-2 px-3 py-10 bg-white rounded-lg">

                        <div className="col-span-12 flex justify-between items-center gap-2">
                            <div>
                                <p className="font-bold tracking-tight text-xl">{"Factures en attentes "}</p>
                                <p className="text-xs text-green-500 tracking-tight font-light">{"liste des factures en attente de paiement"}</p>
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
                                <TableHeader>
                                    <TableRow className="bg-green-700 hover:bg-green-800">
                                        <TableHead className="text-white">{"Date"}</TableHead>
                                        <TableHead className="text-white">{"Facturier"}</TableHead>
                                        <TableHead className="text-white">{"ID Facture"}</TableHead>
                                        <TableHead className="text-white">{"Période"}</TableHead>
                                        <TableHead className="text-white">{"Date limite"}</TableHead>
                                        <TableHead className="text-white">{"Montant"}</TableHead>
                                        <TableHead className="text-white">{"Pénalité"}</TableHead>
                                        <TableHead className="text-white">{"Status"}</TableHead>
                                        <TableHead className="text-white">{"Action"}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {invoices.map((invoice) => (
                                        <TableRow key={invoice.idInvoice}>
                                            <TableCell>
                                                {invoice.date}
                                            </TableCell>
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
                                            <TableCell>{invoice.period}</TableCell>
                                            <TableCell>{invoice.limit_date}</TableCell>
                                            <TableCell>{invoice.price}</TableCell>
                                            <TableCell>{invoice.penality}</TableCell>
                                            <TableCell>
                                                <Badge
                                                    className="ring-1 ring-blue-500 rounded-full bg-blue-500/30 hover:bg-blue-500/30 text-blue-500">
                                                    {invoice.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Button className="bg-green-500 hover:bg-green-700" asChild>
                                                    <Link
                                                        href={"/fsffsgs"}
                                                    >
                                                        {"Payer"}
                                                    </Link>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                </section>

                <Pagination className="mt-10 justify-end">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

            </main>
        </>
    );
}

const invoices = [
    {
        enterprise: "CIE",
        iconEnterprise: "/logo-entreprise/cie.png",
        idInvoice: "133256022",
        date: "10 Avril 2024",
        operationType: "Paiement direct",
        status: "En attente",
        price: 35000,
        period: "Mars - Mai 2024",
        limit_date: "10/05/2024",
        penality: "5 000 FCFA",
    },
    {
        enterprise: "CANAL+",
        iconEnterprise: "/logo-entreprise/canal.png",
        idInvoice: "248256022",
        date: "10 Avril 2024",
        operationType: "Paiement pour tiers",
        status: "En attente",
        price: 13000,
        period: "Mars - Mai 2024",
        limit_date: "10/05/2024",
        penality: "5 000 FCFA",
    },
]
