"use client"

import TopContent from "@/components/custom-ui/TopContent";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CalendarDays, ChevronRight, SlidersHorizontal} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
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

export default function Page() {

    return (
        <>
            <main className="w-full p-5">

                <TopContent />

                <section className="w-full bg-white mt-14">

                    <div className="flex gap-3 p-5">
                        <div className="w-3/4 flex justify-between items-center gap-2">
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
                        <div className="w-1/4">
                            <Button className="flex items-center mt-1 justify-between px-2 py-8 w-full bg-white hover:bg-gray-50">
                                <div className="flex items-center">
                                    <div className="mr-4 bg-green-500/50 h-12 w-12 rounded-lg inline-flex items-center justify-center text-xs text-white">
                                        <SlidersHorizontal className="h-6 w-6 text-green-700"/>
                                    </div>
                                    <div>
                                        <p className="text-base text-start text-gray-700">{"Filtre multicritère"}</p>
                                        <p className="text-sm font-light tracking-tight text-gray-400">{"Recherche Avancée"}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <ChevronRight className="h-5 w-5 text-gray-400"/>
                                </div>
                            </Button>
                        </div>
                    </div>

                    <Table className="mt-10 mx-5 mb-5">
                        <TableHeader>
                            <TableRow>
                                <TableHead>{"Facturier"}</TableHead>
                                <TableHead>{"ID Facture"}</TableHead>
                                <TableHead>{"Date"}</TableHead>
                                <TableHead>{"Type d'opération"}</TableHead>
                                <TableHead>{"Montant"}</TableHead>
                                <TableHead>{"Status"}</TableHead>
                                <TableHead>{"Action"}</TableHead>
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
                                    <TableCell>
                                        {invoice.date}
                                    </TableCell>
                                    <TableCell>{invoice.operationType}</TableCell>
                                    <TableCell>{invoice.price} {" FCFA"}</TableCell>
                                    <TableCell>
                                        <Badge
                                            className="ring-1 ring-green-500 rounded-full bg-green-500/30 hover:bg-green-500/30 text-green-500">
                                            {invoice.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Button className="bg-orange-500 hover:bg-orange-700" asChild>
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
    )
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
