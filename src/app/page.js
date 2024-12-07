"use client";

import { useState } from "react";
import Container from "./components/Container";
import Friend from "./components/Friend";
import Button from "./components/ui/Button";
import FromAddFriend from "./components/FromAddFriend";
import FromSpitBill from "./components/FromSpitBill";

const initialFriends = [
  {
    id: 21563,
    name: "boboy",
    image: "https://i.pravatar.cc/48?u=21563",
    balance: -1200000,
  },
  {
    id: 163,
    name: "bang ryan",
    image: "https://i.pravatar.cc/48?u=163",
    balance: 0,
  },
  {
    id: 563,
    name: "andrean",
    image: "https://i.pravatar.cc/48?u=563",
    balance: 3000,
  },
  {
    id: 63,
    name: "bang tom",
    image: "https://i.pravatar.cc/48?u=63",
    balance: 1000,
  },
];

export default function Home() {
  const [dataFriends, setDataFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showFromSpitBill, setShowFromSpitBill] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
    setShowFromSpitBill(null);
  };

  const addFriendItem = (friend) => {
    setDataFriends((dataFriends) => [...dataFriends, friend]);
  };

  const handleShowSpitBill = (friend) => {
    setShowFromSpitBill((show) => (show?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  return (
    <main>
      <Container>
        <div className="space-y-10">
          <h1 className="text-3xl font-bold font-serif text-center mb-20 text-sky-900">
            Nongkrong<span className="text-violet-900 ">App</span>
          </h1>
          <div>
            <div className="flex justify-between items-center space-x-5">
              <ul className="space-y-3">
                {dataFriends.map((friend, i) => (
                  <Friend
                    key={i}
                    id={friend.id}
                    srcImage={friend.image}
                    altImage={friend.name}
                    name={friend.name}
                    balance={friend.balance}
                    idShow={showFromSpitBill?.id}
                    onClick={() => handleShowSpitBill(friend)}
                  />
                ))}
              </ul>
              <div>{showFromSpitBill && <FromSpitBill dataFriends={dataFriends} setDataFriends={setDataFriends} friend={showFromSpitBill} setShowFromSpitBill={setShowFromSpitBill} />}</div>
            </div>
            <div className="mt-5">{showAddFriend && <FromAddFriend onClickAddFriend={addFriendItem} />}</div>
            <div className={`${showAddFriend ? "mt-2" : "mt-5"} w-[400px]`}>
              <Button onClick={handleShowAddFriend} full>
                {showAddFriend ? "Batal" : "Tambah Teman"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
