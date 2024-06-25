import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
import { Dot } from 'lucide-react';

export function TabsMarchand() {
  return (
    <div className="col-span-12 p-10 bg-gray-100 rounded-lg">
      <Tabs defaultValue="equipe" className="">

        <TabsList className="grid space-x-2 grid-cols-2 bg-white rounded-xl w-[400px]">
          <TabsTrigger
            className="text-green-700 rounded-lg data-[state=active]:bg-green-700 data-[state=active]:text-white data-[state=active]:shadow-sm"
            value="equipe">Espace équipe</TabsTrigger>
          <TabsTrigger
            className="text-green-700 rounded-lg data-[state=active]:bg-green-700 data-[state=active]:text-white data-[state=active]:shadow-sm"
            value="membre">Ajouter un membre</TabsTrigger>
        </TabsList>

        <TabsContent value="equipe" className="w-full">
          <Card className="p-10">
            <div className="col-span-12 flex justify-between items-center gap-2">
              <div>
                <p className="font-bold tracking-tight text-xl">{"Les utilisateurs"}</p>
                <p className="text-xs text-green-500 tracking-tight font-light">{"Liste pour la gestion des utilisateurs"}</p>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px] bg-gray-50 focus-visible:ring-green-700">
                    <SelectValue placeholder="Afficher: 10 premiers" />
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
                <TableCaption>Liste pour la gestion des utilisateurs</TableCaption>
                <TableHeader>
                  <TableRow className="bg-white-700 hover:bg-white-800">
                    <TableHead className="text-[#B5B7C0] text-[14px] font-[500]">{"Nom et prénoms"}</TableHead>
                    <TableHead className="text-[#B5B7C0] text-[14px] font-[500]">{"Rôles"}</TableHead>
                    <TableHead className="text-[#B5B7C0] text-[14px] font-[500]">{"Email"}</TableHead>
                    <TableHead className="text-[#B5B7C0] text-[14px] font-[500]">{"Dernière connexion"}</TableHead>
                    <TableHead className="text-[#B5B7C0] text-[14px] font-[500]">{"Status"}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.user_id}>
                      <div className="flex gap-2 items-center">
                        <TableCell>
                          <Image
                            src={invoice.user_picture}
                            alt={"logo enterprise"}
                            width={36}
                            height={34}
                          />
                        </TableCell>
                        <TableCell className="text-[14px] font-[500]">{invoice.nom_prenoms}</TableCell>
                      </div>
                      <TableCell className="text-[14px] font-[500]">{invoice.role}</TableCell>
                      <TableCell className="text-[14px] font-[500]">{invoice.email}</TableCell>
                      <TableCell className="text-[14px] font-[500]">
                        {invoice.derniere_connexion === "Connecté" ? (
                          <div className="flex">
                            <Dot className="text-[#017E59] text-[90px] font-[900]" />
                            <span className="text-[#017E59] font-[500] text-[14px]">Connecté</span>
                          </div>
                        ) : (
                          <span>{invoice.derniere_connexion}</span>
                        )}
                      </TableCell>

                      <TableCell>
                        {invoice.status === "Active" ? (
                          <Badge className="ring-1 ring-green-500 rounded-[4px] bg-green-500/30 hover:bg-green-500/30 text-green-500">
                            {invoice.status}
                          </Badge>
                        ) : (
                          <Badge className="ring-1 ring-red-500 rounded-[4px] bg-red-500/30 hover:bg-red-500/30 text-red-500">
                            {invoice.status}
                          </Badge>
                        )}
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="membre">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                {"Change your password here. After saving, you'll be logged out."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>

  )
}
const invoices = [
  {
    user_id: "2344",
    nom_prenoms: "Jane Coffi",
    user_picture: "/logo-entreprise/cie.png",
    role: "Financier",
    email: "jane@mail.com",
    derniere_connexion: "Connecté",
    status: "Active",
  },
  {
    user_id: "4344",
    nom_prenoms: "Flora Kone",
    user_picture: "/logo-entreprise/canal.png",
    role: "Developpeur",
    email: "flora@mail.com",
    derniere_connexion: "Aujourd'hui, 16:14",
    status: "Inative",
  },
]
