"use client"

import TopContent from "@/components/custom-ui/TopContent";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {logger} from "@/lib/logger";
import {ComboBoxEnterprise} from "@/components/custom-ui/ComboBox";
import {useState} from "react";
import {DataTable} from "@/app/dashboard/pay-for-other/data-table";
import {columns} from "@/app/dashboard/pay-for-other/columns";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {CornerDownLeft, Mail, Phone} from "lucide-react";

export default function Page(){


    const [selectedEnterprise, setSelectedEnterprise] = useState("")


    const [actualSection, setActualSection] = useState(1);

    const handleClick = () => {
        setActualSection((prevSection) => prevSection % 3 + 1);
    };

    return (
        <>
            <main className="w-full p-5">

                <TopContent/>

                {actualSection === 1 &&
                    (
                        <section className="mt-10">
                            <Card className="w-[500px] mx-auto">
                                <CardHeader className="flex flex-col justify-center items-center">
                                    <CardTitle
                                        className="text-3xl font-semibold text-gray-500">{"Payer pour un tiers "}</CardTitle>
                                    <CardDescription className="text-xs text-gray-400 font-light tracking-tight">
                                        {"Suivez les étape ci-dessous pour payer"}
                                    </CardDescription>
                                    <CardDescription className="text-xs text-gray-400 font-light tracking-tight">
                                        {"la facture d’un tiers"}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="p-3">
                                        <div
                                            className="grid w-full items-center gap-4 p-6">
                                            <div className="flex flex-col space-y-3 mt-3">
                                                <Label htmlFor="enterprise"
                                                       className="text-gray-400">{"Sélectionner le facturier"}</Label>
                                                <ComboBoxEnterprise
                                                    options={enterprises}
                                                    popoverWidth={"full"}
                                                    value={selectedEnterprise}
                                                    onChange={(value) => {
                                                        logger.debug(`La valeur sélectionnée est : ${value}`);
                                                        setSelectedEnterprise(value);
                                                    }}
                                                    placeholder={"Sélectionnez le facturier"}
                                                    buttonText={"Sélectionnez le facturier"}
                                                />
                                            </div>
                                            <div className="flex flex-col space-y-3 mt-3">
                                                <Label htmlFor="identifier"
                                                       className="text-gray-400">{"Identifiant ou numéro de la facture"}</Label>
                                                <Input
                                                    id="identifier"
                                                    type="text"
                                                    className="p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:ring-green-700"
                                                    placeholder="Exemple: 123001233018"
                                                />
                                            </div>
                                        </div>

                                        <Button
                                            className="w-full mt-10 bg-green-700 hover:bg-green-800 h-12"
                                            onClick={handleClick}
                                        >
                                            {"Rechercher"}
                                        </Button>

                                    </form>
                                </CardContent>
                            </Card>
                        </section>
                    )
                }

                {actualSection === 2 &&
                    (
                        <>
                            <section className="grid grid-cols-12 gap-2 mt-16 bg-white rounded-lg">

                                <div className="col-span-12 grid grid-cols-3 gap-2 px-3 py-10">

                                    <div className="col-span-12 flex justify-between items-center gap-2">
                                        <div>
                                            <p className="text-gray-700 font-semibold tracking-tight text-2xl">{"Payer pour un tiers"}</p>
                                            <p className="text-xs text-green-500 tracking-tight font-light">{"Veuillez sélectionné la ou les facture que vous souhaitez payer pour votre proche"}</p>
                                        </div>
                                        <div>
                                            <Button
                                                className="bg-green-700 hover:bg-green-800 disabled:bg-gray-500/30"
                                                disabled
                                            >
                                                {"Tous payer"}
                                            </Button>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-span-12 py-10 px-3">
                                    <DataTable columns={columns} data={data}/>
                                </div>

                            </section>

                            <section className="w-full flex items-center justify-center gap-10 mt-10">
                                <Button className="bg-green-700/40 hover:bg-green-800/40 text-green-700">
                                    {"Retour"}
                                </Button>

                                <Button
                                    className="bg-green-700 hover:bg-green-800"
                                    onClick={handleClick}
                                >
                                    {"Suivant"}
                                </Button>
                            </section>
                        </>
                    )
                }

                {actualSection === 3 &&
                    (
                        <section className="w-full mt-5">

                            <div className="w-full bg-white rounded p-5">
                                <div>
                                    <p className="text-2xl font-semibold text-green-700 text-center">{"Récapitulatif de paiement"}</p>
                                    <p className="text-sm font-light text-center text-gray-400">{"Vérifiez le montant total à payer avec de valider la transaction"}</p>
                                </div>

                                <div className="w-full flex items-center justify-between gap-5 mt-10 px-5">
                                    <div className="w-1/2">
                                        <p className="font-light text-gray-400">{"Facture du :"}</p>
                                        <div className="bg-gray-100 p-10 rounded-lg">
                                            <p className="font-semibold text-xl text-gray-500 my-3">{"Propulse Group"}</p>
                                            <p className="font-light text-gray-500">{"(225) 22 879 0102"}</p>
                                            <p className="font-light text-gray-500">
                                                {"Cote d’ivoire, Abidjan, Cocody,\n" + "2 Plateaux les Perles"}
                                            </p>
                                            <p className="font-light text-gray-500">{"12345 6789 US0001"}</p>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <p className="font-light text-gray-400">{"Facturer à :"}</p>
                                        <div className="bg-gray-100 p-10 rounded-lg">
                                            <p className="font-semibold text-xl text-gray-500 my-3">{"Koffi Paul-André"}</p>
                                            <p className="font-light text-gray-500">{"(225) 07 56 00 09 89"}</p>
                                            <p className="font-light text-gray-500">
                                                {"paul-andre@mail.com"}
                                            </p>
                                            <p className="font-light text-gray-500">
                                                {"Cote d’ivoire, Abidjan, Cocody,\n" + "2 Plateaux les Perles"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-lg mx-5 mt-20 p-5">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[500px]">{"Descriptif"}</TableHead>
                                                <TableHead>{"Pénalité"}</TableHead>
                                                <TableHead>{"Montant Facture"}</TableHead>
                                                <TableHead>{"Montant à payer"}</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {data.map((invoice) => (
                                                <TableRow key={invoice.idInvoice} className="bg-gray-50 p-2">
                                                    <TableCell>{"Facture "}{invoice.enterprise}</TableCell>
                                                    <TableCell>{invoice.penality}</TableCell>
                                                    <TableCell>{invoice.price}</TableCell>
                                                    <TableCell>{invoice.price + invoice.penality}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>

                                <div className="flex items-center justify-between mx-5 mt-10">
                                    <div>
                                        <p>{"Total à payer :"}</p>
                                        <p className="p-3 text-2xl font-bold text-green-700 inline-flex justify-center items-center border border-gray-100 rounded-lg shadow">
                                            {"140 200 FCFA"}
                                        </p>
                                    </div>
                                    <div className="w-[300px]">
                                        <div className="w-full flex items-center justify-between">
                                            <p>{"Montant Total"}</p>
                                            <p className="text-gray-300 text-end">{"140 000 FCFA"}</p>
                                        </div>
                                        <div className="w-full flex items-center justify-between">
                                            <p>{"Frais"}</p>
                                            <p className="text-gray-300">{"200 FCFA"}</p>
                                        </div>
                                        <div className="w-full flex items-center justify-between">
                                            <p className="font-semibold">{"Grand Total"}</p>
                                            <p className="text-green-700">{"140 200 FCFA"}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full flex items-center justify-center gap-10 mt-10">
                                <Button className="bg-green-700/40 hover:bg-green-800/40 text-green-700">
                                    {"Retour"}
                                </Button>

                                <Button
                                    className="bg-green-700 hover:bg-green-800"
                                    onClick={handleClick}
                                >
                                    {"Payer"}
                                </Button>
                            </div>

                        </section>
                    )
                }

            </main>
        </>
    );

}

const enterprises = [
    {value: "CIE (Compagnie Ivoirienne d’Electricité)", label: "/logo-entreprise/cie.png"},
    {value: "CANAL +", label: "/logo-entreprise/canal.png"},
]

const data = [
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
        penality: 5000,
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
        penality: 5000,
    },
]



