import {Card} from "@/components/ui/card";
import Image from "next/image";

interface Item {
    title: string,
    url: string,
    alt: string,
    description: string,
    currency?: string,
}



export default function CustomCard({title, url, alt, description, currency}: Item) {

    return (
        <Card className="p-5 shadow-md">
            <div className="flex items-center gap-2">
                <div>
                    <Image
                        src={url}
                        alt={alt}
                        width={90}
                        height={90}
                    />
                </div>
                <div className="mt-2">
                    <p className="text-sm tracking-tight text-gray-400">{description}</p>
                    <h1 className="text-3xl font-bold tracking-tight mt-2">{title} {currency && (
                        <span className="text-xs text-gray-400 font-light tracking-tight align-text-top">{currency}</span>)}
                    </h1>
                </div>
            </div>
        </Card>
    );
}
