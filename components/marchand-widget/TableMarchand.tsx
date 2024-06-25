"use client";
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { ChevronLeft } from 'lucide-react';
  import { ChevronRight } from 'lucide-react';
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
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import Image from 'next/image';
import { Button } from '../ui/button';

const users = [
    {
        user_id: "2344",
        nom_prenoms: "Jane Coffi",
        user_picture: "/user-picture/Ellipse-61.png",
        role: "Financier",
        email: "jane@mail.com",
        derniere_connexion: "Connecté",
        status: "Active",
      },
      {
        user_id: "4344",
        nom_prenoms: "Flora Kone",
        user_picture: "/user-picture/Ellipse-62.png",
        role: "Developpeur",
        email: "flora@mail.com",
        derniere_connexion: "Aujourd'hui, 16:14",
        status: "Inative",
      },
];

const ITEMS_PER_PAGE = 5; // Nombre d'éléments par page

const TableMarchand = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to first page on items per page change
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedUsers = users.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <Card className="p-10">
      <div className="col-span-12 flex justify-between items-center gap-2">
        <div>
          <p className="font-bold tracking-tight text-xl">Les utilisateurs</p>
          <p className="text-xs text-green-500 tracking-tight font-light">Liste pour la gestion des utilisateurs</p>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-50 focus-visible:ring-green-700">
              <SelectValue placeholder="Afficher: 10 premiers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 premiers</SelectItem>
              <SelectItem value="10">10 premiers</SelectItem>
              <SelectItem value="15">15 premiers</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="col-span-12 mt-10">
        <Table>
          <TableCaption>
            <div className="float-left">
            Affichage des utilisateur 1 à 8 sur 25 entrées
            </div>
            <div className="float-right">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-0 bg-[#F5F5F5] w-[26px] h-[24px]"
        >
              <ChevronLeft className="text-[#000] text-[12px]"/>

        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={` ${currentPage === index + 1 ? ' text-[12px] bg-green-500 text-white w-[26px] h-[24px] mb-3' : ''}`}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-0 bg-[#F5F5F5] w-[26px] h-[24px]"
        >
        <ChevronRight className="text-[#000]"/>
    </Button>
      </div>
        </TableCaption>
          <TableHeader>
            <TableRow className="bg-white-700 hover:bg-white-800">
              <TableHead className="text-[#B5B7C0] text-[14px] font-[500]">Nom et prénoms</TableHead>
              <TableHead className="text-[#B5B7C0] text-[14px] font-[500]">Rôles</TableHead>
              <TableHead className="text-[#B5B7C0] text-[14px] font-[500]">Email</TableHead>
              <TableHead className="text-[#B5B7C0] text-[14px] font-[500]">Dernière connexion</TableHead>
              <TableHead className="text-[#B5B7C0] text-[14px] font-[500]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={user.user_picture}
                      alt={`Profile of ${user.nom_prenoms}`}
                      width={36}
                      height={34}
                    />
                    <span className="text-[14px] font-[500]">{user.nom_prenoms}</span>
                  </div>
                </TableCell>
                <TableCell className="text-[14px] font-[500]">{user.role}</TableCell>
                <TableCell className="text-[14px] font-[500]">{user.email}</TableCell>
                <TableCell className="text-[14px] font-[500]">
                  {user.derniere_connexion === "Connecté" ? (
                    <div className="flex">
                      <Dot className="text-[#017E59] text-[90px] font-[900]" />
                      <span className="text-[#017E59] font-[500] text-[14px]">Connecté</span>
                    </div>
                  ) : (
                    <span>{user.derniere_connexion}</span>
                  )}
                </TableCell>
                <TableCell>
                  {user.status === "Active" ? (
                    <Badge className="ring-1 ring-green-500 rounded-[4px] bg-green-500/30 hover:bg-green-500/30 text-green-500">
                      {user.status}
                    </Badge>
                  ) : (
                    <Badge className="ring-1 ring-red-500 rounded-[4px] bg-red-500/30 hover:bg-red-500/30 text-red-500">
                      {user.status}
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
    </Card>
  );
};

export default TableMarchand;
