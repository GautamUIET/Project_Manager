import { User } from "@/state/api";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
        {user.profilePictureUrl ? (
          <Image
          src={`/p1.jpeg`}
            alt={`${user.username}'s profile`}
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {user.username.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="truncate text-sm font-medium text-gray-900 dark:text-white">
          {user.username}
        </h3>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserCard;