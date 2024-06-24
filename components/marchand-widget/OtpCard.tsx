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
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import Link from "next/link";

export function OtpCard() {
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
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <Card className="rounded-[14px] otp-card-input">
                            <CardHeader className="text-center">
                                <CardTitle className="text-[#034B5E]">Identification par OTP</CardTitle>
                                <CardDescription className="text-[#C4C4C4]">Veuillez entrer le code à six chiffre reçu par mail</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <InputOTP maxLength={6} className="flex justify-center">
                                    <InputOTPGroup className="w-[62px] h-[62px]">
                                        <InputOTPSlot index={0} className="w-[62px] h-[62px] text-[40px] font-[700] bg-[#F5F7FB]"/>
                                    </InputOTPGroup>
                                    <InputOTPGroup className="w-[62px] h-[62px]">
                                        <InputOTPSlot index={1}  className="w-[62px] h-[62px] text-[40px] font-[700] bg-[#F5F7FB]"/>
                                    </InputOTPGroup>
                                    <InputOTPGroup className="w-[62px] h-[62px]">
                                        <InputOTPSlot index={2}  className="w-[62px] h-[62px] text-[40px] font-[700] bg-[#F5F7FB]"/>
                                    </InputOTPGroup>
                                    <InputOTPGroup className="w-[62px] h-[62px]">
                                        <InputOTPSlot index={3}  className="w-[62px] h-[62px] text-[40px] font-[700] bg-[#F5F7FB]"/>
                                    </InputOTPGroup>
                                    <InputOTPGroup className="w-[62px] h-[62px]">
                                        <InputOTPSlot index={4}  className="w-[62px] h-[62px] text-[40px] font-[700] bg-[#F5F7FB]"/>
                                    </InputOTPGroup>
                                    <InputOTPGroup className="w-[62px] h-[62px]">
                                        <InputOTPSlot index={5}  className="w-[62px] h-[62px] text-[40px] font-[700] bg-[#F5F7FB]"/>
                                    </InputOTPGroup>

                                </InputOTP>
                            </CardContent>
                        </Card>
                        <p className="pt-10 text-[14px] text-[#017E59] font-[500] text-center">Renvoyez le code  00 : 30 s</p>
                        <Button
                            className="mt-5 bg-green-700 rounded-lg w-full h-14 hover:bg-green-800"
                            asChild
                        >
                            <Link href={"/marchand/resetpassword"}>
                                {"Se Connecter"}
                            </Link>
                        </Button>
                    </div>
                </form>
            </CardContent>

        </Card>
    );
}
