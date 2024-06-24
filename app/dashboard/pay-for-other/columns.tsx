"use client"

import { ColumnDef } from "@tanstack/react-table"
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {Checkbox} from "@/components/ui/checkbox";
import {Badge} from "@/components/ui/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Invoice = {
    enterprise: string,
    iconEnterprise: string,
    idInvoice: string,
    date: string,
    operationType: string,
    status: string,
    price: number,
    period: string,
    limit_date: string,
    penality: number,
}

export const columns: ColumnDef<Invoice>[] = [

    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                className="border border-white rounded-sm data-[state=checked]:bg-green-700"
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                className="border border-green-700 rounded-sm data-[state=checked]:bg-green-700"
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "enterprise",
        header: () => <div>Facturier</div>,
        cell: ({row}) => {
            const enterprise = row.getValue("enterprise") as string
            const iconEnterprise = row.original.iconEnterprise

            console.log("image", iconEnterprise)

            return (
                <div className="flex items-center">
                    <Image
                        src={iconEnterprise}
                        alt="logo"
                        width={36}
                        height={34}
                    />
                    <span className="ml-3">{enterprise}</span>
                </div>
            );

        }
    },
    {
        accessorKey: "idInvoice",
        header: "Facture",
    },
    {
        accessorKey: "period",
        header: "Période de conso",
    },
    {
        accessorKey: "limit_date",
        header: "Date limite",
    },
    {
        accessorKey: "price",
        header: () => <div>Montant</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"));
            const formatted = new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "XOF", // Code pour les francs CFA
            }).format(amount);

            return <div className="font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "penality",
        header: () => <div>Pénalité</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("penality"));
            const formatted = new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "XOF", // Code pour les francs CFA
            }).format(amount);

            return <div className="font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => {
            return <Badge className="border-blue-500 text-blue-500 rounded-full tracking-tight bg-blue-500/10 hover:text-blue-500/10">{row.getValue("status")}</Badge>
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const invoice = row.original

            return (
                <Button className="bg-green-500 hover:bg-green-600" asChild>
                    <Link href="/invoice/0987654321">
                        {"Payer"}
                    </Link>
                </Button>
            )
        },
    },
]
