import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image";
import TableMarchand from "./TableMarchand";


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
          <TableMarchand/>
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
