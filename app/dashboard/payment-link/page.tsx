"use client"

import TopContent from "@/components/custom-ui/TopContent";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {ComboBoxEnterprise} from "@/components/custom-ui/ComboBox";
import {logger} from "@/lib/logger";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Copy} from "lucide-react";

export default function Page(){

    const [selectedEnterprise, setSelectedEnterprise] = useState<string>("");

    return (
        <>
            <main className="w-full p-5">

                <TopContent/>

                <section className="mt-10 p-5">
                    <Card className="w-full mx-auto">
                        <CardHeader className="flex flex-col justify-center items-center">
                            <CardTitle
                                className="text-3xl font-semibold text-gray-500">{"Générer un lien de paiement "}</CardTitle>
                            <CardDescription className="text-xs text-gray-400 font-light tracking-tight">
                                {"Choisissez votre facture, générez un lien de paiement"}
                            </CardDescription>
                            <CardDescription className="text-xs text-gray-400 font-light tracking-tight">
                                {"et envoyer à vos proche pour paiement"}
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

                                <div className="mx-5 p-5 bg-green-500/40">
                                    <p className="text-green-700 text-base font-semibold">{"Information de la facture à payer"}</p>
                                    <p className="text-green-700 text-sm font-light">{"Vérifier les informations avant de générer le lien de paiement"}</p>
                                </div>

                                <Table className="mx-5 mt-5">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>{"ID Facture"}</TableHead>
                                            <TableHead>{"Période conso"}</TableHead>
                                            <TableHead>{"Date limite"}</TableHead>
                                            <TableHead>{"Pénalité"}</TableHead>
                                            <TableHead>{"Montant à payer"}</TableHead>
                                            <TableHead>{"Status"}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {data.map((invoice) => (
                                            <TableRow key={invoice.idInvoice}>
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
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                                <div className="flex items-center gap-3 mx-5 mt-10">
                                    <Button
                                        className="bg-green-700 hover:bg-green-800 h-12"
                                    >
                                        {"Générer le lien de paiement"}
                                    </Button>

                                    <div className="w-full h-12 flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                                        <p className="text-base text-gray-400 font-light tracking-tight">{"https://mesfactures.ci/lien_paiement01012024"}</p>
                                        <Button variant="ghost" size="icon">
                                            <Copy className="h-6 w-6 text-gray-400" />
                                        </Button>
                                    </div>

                                </div>

                            </form>
                        </CardContent>
                    </Card>
                </section>

            </main>
        </>
    )

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
]
