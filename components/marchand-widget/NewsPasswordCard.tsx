import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function NewsPasswordCard() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (() => { });
    return (
        <Card className="w-[508px] h-[589px] rounded-[30px] border-[0px solid #C4C4C480] custom-shadow">
            <CardHeader className="text-center pt-10">
                <CardTitle className="text-[36px] font-[700] text-green-700 pb-4">Connexion</CardTitle>
                <CardDescription> Connectez-vous ! et accédez<br />
                    à votre tableau de bord</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email" className="text-gray-400 pb-2">Identifiant  du Compte</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="h-[65px] p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:rounded focus-visible:ring-green-700"
                            />
                        </div>
                        <div className="mt-5">
                            <div className="flex flex-col space-y-1.5">
                                <div className="w-[450px] flex justify-between">
                                    <Label htmlFor="password" className="text-gray-400">Mot de passe</Label>
                                    <Link
                                        href={"/forgot-password"}
                                        className="text-sm font-light leading-none text-orange-500"
                                    >
                                        {"Mot de passe oublié ?"}
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={passwordVisible ? "text" : "password"}
                                        value={password}
                                        onChange={handlePasswordChange}
                                        placeholder="Mot de passe"
                                        className="h-[65px] p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:rounded focus-visible:ring-green-700 pr-12"
                                    />
                                    <Button
                                        variant={"ghost"}
                                        size={"icon"}
                                        className="border-0 dark:bg-inherit mr-2
                                    absolute inset-y-2 right-0 flex items-center p-2 focus:outline-none"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {passwordVisible ? (
                                            <EyeOff className="h-15 w-15 text-gray-400" />

                                        ) : (
                                            <Eye className="h-15 w-15 text-gray-400" />

                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Button
                            className="mt-5 bg-green-700 rounded-lg w-full h-14 hover:bg-green-800"
                            asChild
                        >
                            <Link href={"/marchand/otp"}>
                                {"Se Connecter"}
                            </Link>
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
