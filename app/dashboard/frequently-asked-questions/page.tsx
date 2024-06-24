"use client"

import TopContent from "@/components/custom-ui/TopContent";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import FAQContent from "@/components/custom-ui/FAQContent";

export default function Page(){

    return (
        <>
            <main className="w-full p-3">

                <TopContent />

                <div className="p-5 bg-white flex items-center justify-between rounded-xl mt-5">
                    <p className="text-xl font-normal">{"Les questions fréquemments posées "}</p>
                    <div className="flex items-center gap-3">
                        <p className="text-base font-normal text-gray-400">{"Pour  plus d’aide"}</p>
                        <Button className="bg-green-500/60 hover:bg-green-500/80 rounded-full">
                            {"Nous contacter"}
                        </Button>
                    </div>
                </div>

                <div className="flex mt-5">

                    <FAQContent />

                </div>

            </main>
        </>
    );

}
