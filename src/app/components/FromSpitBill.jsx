import React, { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

const FromSpitBill = ({ friend, dataFriends, setDataFriends, setShowFromSpitBill }) => {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [myAmount, setMyAmount] = useState("");
  const friendAmount = paymentAmount ? paymentAmount - myAmount : "";
  const [whoIsPlaying, setWhoIsPlaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentAmount || !myAmount) return;
    const amount = whoIsPlaying === "user" ? friendAmount : -myAmount;
    setDataFriends(
      dataFriends.map((dataFriend) => {
        if (dataFriend.id === friend?.id) {
          return {
            ...dataFriend,
            balance: dataFriend.balance + amount,
          };
        }
        return dataFriend;
      })
    );
    setShowFromSpitBill(null);
  };

  return (
    <div className="py-4 px-6 bg-gray-200 rounded-md">
      <h1 className="text-xl font-semibold text-center mb-5">siapa yang bayar </h1>
      <form onSubmit={handleSubmit} className="flex-col justify-start items-start space-y-3">
        <Input value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} label="total bayar" />
        <Input value={myAmount} onChange={(e) => setMyAmount(e.target.value)} label="bayaran kamu" />
        <Input value={friendAmount} label={`bayaran ${friend.name}`} isDisabled className="cursor-not-allowed" />
        <div className="grid grid-cols-3 space-x-4">
          <label className="font-semibold col-span-1 capitalize" htmlFor="">
            dibayar oleh{" "}
          </label>
          <select value={whoIsPlaying} onChange={(e) => setWhoIsPlaying(e.target.value)} name="" id="user" className="col-span-2 p-[2px] rounded-sm border-none bg-slate-400">
            <option value="user">kamu</option>
            <option value="friend">{friend.name}</option>
          </select>
        </div>
        <div className="pt-5">
          <Button full>Tambah</Button>
        </div>
      </form>
    </div>
  );
};

export default FromSpitBill;
