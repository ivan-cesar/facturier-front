"use client"

import * as React from "react"
import {CheckIcon, ChevronsUpDown} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem, CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useState} from "react";
import {logger} from "@/lib/logger";
import Image from "next/image";

// Définir le type pour les options de sélection
type Option = {
    value: string;
    label: string;
};

type ComboBoxProps = {
    options: Option[];
    value: string;
    placeholder?: string;
    textNotFound?: string;
    popoverWidth?: string;
    buttonText?: string;
    buttonWidth?: string;
    onChange: (value: string) => void;
};

// Utilisation de combobox
/*
<ComboBox
    options={persons}
    value={selectedValue}
    onChange={(value) => {
        console.log(`La valeur sélectionnée est : ${value}`);
        setSelectedValue(value);
    }}
/>
*/


export function ComboBox({ options, value,buttonWidth="36", buttonText="Sélectionner le pays...", placeholder="Search...", textNotFound="No option found.", popoverWidth="400px", onChange }: ComboBoxProps) {

    const [open, setOpen] = useState(false);

    const handleSelect = (selectedValue: string) => {
        logger.debug(`handleSelect a été appelé avec la valeur: ${selectedValue}`); // Ajout d'un log de débogage
        onChange(selectedValue);
        setOpen(false);
    };


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`w-${buttonWidth} justify-between items-center p-6 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:rounded focus-visible:ring-green-700`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="text-sm font-light tracking-tight text-gray-400 truncate">
                        {value ? `${options.find((option) => option.value === value)?.label} ${options.find((option) => option.value === value)?.value}` : buttonText}
                    </span>
                    <ChevronsUpDown className="ml-3 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`w-${popoverWidth} p-0`}>
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandEmpty>{textNotFound}</CommandEmpty>
                    <CommandList>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={() => {
                                        //console.log(`onSelect a été appelé avec la valeur: ${option.value}`); // Ajout d'un log de débogage
                                        handleSelect(option.value);
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {option.label + " " + option.value}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === option.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

const isImageUrl = (url: string) => {
    return /\.(jpeg|jpg|gif|png|svg|webp)$/.test(url);
};

export function ComboBoxEnterprise({ options, value,buttonWidth="36", buttonText="Sélectionner le pays...", placeholder="Search...", textNotFound="No option found.", popoverWidth="400px", onChange }: ComboBoxProps) {

    const [open, setOpen] = useState(false);

    const handleSelect = (selectedValue: string) => {
        logger.debug(`handleSelect a été appelé avec la valeur: ${selectedValue}`); // Ajout d'un log de débogage
        onChange(selectedValue);
        setOpen(false);
    };

    const selectedOption = options.find((option) => option.value === value)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`w-${buttonWidth} justify-between items-center px-6 py-6 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:rounded focus-visible:ring-green-700`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/*
                    <span className="text-sm font-light tracking-tight text-gray-400 truncate">
                        ${options.find((option) => option.value === value)?.value}` : buttonText}
                    </span>
                    */}

                    {selectedOption ? (
                        isImageUrl(selectedOption.label) ? (
                            <>
                                <Image
                                    src={selectedOption.label}
                                    alt={"logo"}
                                    width={24}
                                    height={24}
                                    className="inline-block mr-3"
                                />

                                <span className="text-base font-light tracking-tight text-gray-400 truncate">
                                    {selectedOption.value}
                                </span>
                            </>
                        ) : (
                            `${selectedOption} ${value}`
                        )
                    ) : (
                        <span className="text-base font-light tracking-tight text-gray-400">
                            {buttonText}
                        </span>
                    )}

                    <ChevronsUpDown className="ml-3 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`w-${popoverWidth} p-0`}>
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandEmpty>{textNotFound}</CommandEmpty>
                    <CommandList>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={() => {
                                        //console.log(`onSelect a été appelé avec la valeur: ${option.value}`); // Ajout d'un log de débogage
                                        handleSelect(option.value);
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {option.value}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === option.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
