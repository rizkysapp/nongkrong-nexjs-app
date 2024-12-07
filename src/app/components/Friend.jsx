import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const Friend = ({ srcImage, altImage, name, balance, onClick, id, idShow }) => {
  const isSelected = idShow === id;
  return (
    <li className="flex justify-between items-center w-[400px] rounded-lg bg-gray-200 px-3 py-2 hover:shadow-lg transition">
      <div className="flex justify-center items-center space-x-3">
        <Image className="rounded-full shadow-md" src={srcImage} alt={altImage} width={50} height={50} />
        <div>
          <h1 className="text-base font-semibold font-serif capitalize">{name}</h1>
          {balance < 0 && (
            <p className=" text-xs">
              kamu berhutang ke {name} <span className="text-red-800">Rp{Math.abs(balance)}</span>
            </p>
          )}
          {balance > 0 && (
            <p className="text-xs">
              {name} berhutang ke kamu <span className="text-blue-800">Rp{Math.abs(balance)}</span>
            </p>
          )}
          {balance === 0 && <p className=" text-xs">kamu dan {name} tidak saling berhutang </p>}
        </div>
      </div>
      <Button className={isSelected && "bg-green-950"} onClick={onClick}>
        {isSelected ? "tutup" : "pilih"}
      </Button>
    </li>
  );
};

export default Friend;
