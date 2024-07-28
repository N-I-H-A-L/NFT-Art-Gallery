import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";


function Profile({name, email, username}) {
  const [profilePic, setProfilePic] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
      setShowSaveButton(true);
    }
  };

  const handleSave = () => {
    console.log("Profile picture saved.");
    setShowSaveButton(false);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Your Profile</h1>
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="relative">
          <img
            src={profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full border border-gray-300"
          />
          <label
            htmlFor="profilePic"
            className="absolute bottom-0 right-0 bg-gray-700 p-1 rounded-full cursor-pointer hover:bg-gray-600"
          >
            <img src="edit.svg" alt="" />
            <input
              type="file"
              id="profilePic"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      {showSaveButton && (
        <Button className="my-4 flex items-center" onClick={handleSave}>
          Save
        </Button>
      )}
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="mb-4 flex gap-5 items-center">
          <Label htmlFor="name">Name: </Label>
          <Input
            id="name"
            type="text"
            placeholder={name}
            className="w-full pointer-events-none"
            readOnly
          />
        </div>
        <div className="mb-4 flex gap-5 items-center">
          <Label htmlFor="email">Email: </Label>
          <Input
            id="email"
            type="email"
            placeholder={email}
            className="w-full pointer-events-none"
            readOnly
          />
        </div>
        <div className="mb-4 flex gap-5 items-center">
          <Label htmlFor="email">Username: </Label>
          <Input
            id="email"
            type="email"
            placeholder={username}
            className="w-full pointer-events-none"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
