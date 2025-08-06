import React from "react";

function UserCard({ user }) {
  return (
    <div className="bg-black w-full max-w-xs p-5 rounded-xl shadow-md hover:shadow-xl/20 transition-shadow duration-300 border border-gray-200">
      <div className="flex flex-col items-center ">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-black-600 text-3xl font-bold mb-4">
          {user.name.charAt(0)}
        </div>
        <h2 className="text-xl text-white font-semibold  mb-1">{user.name}</h2>
        <p className="text-sm text-gray-500">Age: {user.age}</p>
      </div>
    </div>
  );
}

export default UserCard;
