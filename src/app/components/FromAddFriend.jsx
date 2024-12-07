import React, { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

const FromAddFriend = ({ onClickAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmitAddFriend = (e) => {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name: name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onClickAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <div>
      <form onSubmit={handleSubmitAddFriend} className="w-[400px] bg-sky-900 rounded-lg p-4 space-y-4">
        <Input label="name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="image" value={image} onChange={(e) => setImage(e.target.value)} />
        <Button full black onClick={handleSubmitAddFriend}>
          tambah
        </Button>
      </form>
    </div>
  );
};

export default FromAddFriend;
