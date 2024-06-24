import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Call from '../../public/icon-svg/Call.svg';
import Message  from "../../public/icon-svg/Message.svg";
import Back from '../../public/icon-svg/Vector.svg'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Mail, Phone, Undo2 } from "lucide-react";

export function ResetPasswordCard() {
    const [email, setEmail] = useState("");
    const [method, setMethod] = useState("email");

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return (
        <Card className="w-[522px] rounded-[10px] shadow-md p-6">
            <CardHeader className="text-center">
                <CardTitle className="text-[24px] font-semibold text-green-700">Mot de passe oublié</CardTitle>
                <CardDescription className="text-[#C4C4C4] font-[500] text-[12px] ">
                    Veuillez sélectionner l'option pour envoyer un code pour réinitialisation de votre mot de passe
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center gap-4">
                        <div
                            className={`w-full p-4 border rounded-lg cursor-pointer ${method === "email" ? "border-green-700" : "border-gray-300"}`}
                            onClick={() => setMethod("email")}
                        >
                            <div className="flex items-center gap-2">
                                <div className="p-2  bg-[#299769B2] rounded-full">
                                <Message className="text-white text-sm" />
                                </div>
                                <div>
                                <span className="text-[#034B5E] font-[600] text-[16px]">Réinitialiser par e-mail</span>
                                <p className="text-[12px] text-[#c4c4c4]">
                                Nous vous enverrons un code dans votre boite mail
                            </p>
                                </div>
                            </div>
                            
                            {method === "email" && (
                                <Input
                                    type="email"
                                    placeholder="Saisissez votre adresse mail"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="mt-2
                                    h-[53px] placeholder:text-gray-400 rounded-lg focus-visible:ring-2 focus-visible:rounded focus-visible:ring-green-700
                                    "
                                />
                            )}
                        </div>
                        <div
                            className={`w-full p-4 border rounded-lg cursor-pointer ${method === "sms" ? "border-green-700" : "border-gray-300"}`}
                            onClick={() => setMethod("sms")}
                        >
                            <div className="flex items-center gap-2">
                                <div className="p-2  bg-[#98A0B233] rounded-full">
                                <Call className="text-gray-400 text-sm" />
                                </div>
                                <span className="text-[16px] text-[#98A0B2] font-[600px]">Réinitialiser par SMS</span>
                            </div>
                            {method === "sms" && (
                                <p className="text-sm text-gray-500 mt-2">
                                    Nous vous enverrons un code sur votre téléphone
                                </p>
                            )}
                        </div>
                        <Button className="mt-5 bg-green-700 rounded-lg w-full h-14 hover:bg-green-800" type="submit">
                             <Link href={"/marchand/dashboard"}>
                             Réinitialiser le mot de passe
                             </Link>
                        </Button>
                    </div>
                </form>
                
                <Link href={"/marchand/newpassword"} className="flex gap-3 text-gray-500 mt-4 text-[14px]">
                  <Back/>  Retour pour vous connecter
                </Link>
            </CardContent>
        </Card>
    );
}
