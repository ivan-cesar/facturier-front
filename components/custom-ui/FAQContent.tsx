"use client"

import {Button} from "@/components/ui/button";
import {Minus, Plus} from "lucide-react";
import {useState} from "react";

export default function FAQContent(){

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <div className="w-1/2 bg-white shadow rounded-lg p-5">
                <div className="flex items-center justify-between">
                    <p className="text-xl font-normal">{"Les questions fréquemments posées"}</p>
                    <Button
                        className={`${show ? 'bg-green-700 hover:bg-green-800' : 'bg-white hover:bg-gray-100'}`}
                        onClick={toggleShow}
                        size="icon"
                    >
                        {show ? (
                            <Minus className="h-6 w-6 text-white" />
                        ) : (
                            <Plus className="h-6 w-6 text-gray-400" />
                        )}
                    </Button>
                </div>
                {show && (
                    <p className={`text-base font-normal tracking-tight text-gray-400 mt-3 ${show ? 'transition' : 'transition'}`}>
                        {"Lorem ipsum dolor sit amet consectetur. At interdum non sed tortor metus adipiscing pellentesque."}
                    </p>
                )}
            </div>
        </>
    );

}
