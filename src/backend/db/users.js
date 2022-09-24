import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Anshul",
    lastName: "raheja",
    username: "admin",
    email: "anshulraheja@gmail.com",
    password: "admin123",
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    coverPhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    bio: "FullStack Web Developer 1",
    website: "https://loremipsum.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
      {
        _id: uuid(),
        firstName: "Nisha",
        lastName: "Singh",
        username: "nishasingh",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
      {
        _id: uuid(),
        firstName: "Nisha",
        lastName: "Singh",
        username: "nishasingh",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
    ],
    bookmarks: [],
  },

  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    email: "adarshbalika@gmail.com",
    password: "Holy@123",
    bio: "FullStack Web Developer 2",
    website: "https://loremipsum.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    coverPhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    following: [
      {
        firstName: "Anshul",
        lastName: "raheja",
        username: "anshulraheja",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
    ],
    followers: [
      {
        firstName: "Anshul",
        lastName: "raheja",
        username: "anshulraheja",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
      {
        firstName: "Aman",
        lastName: "Rajput",
        username: "amanrajput",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
    ],
    bookmarks: [],
  },

  {
    _id: uuid(),
    firstName: "Aman",
    lastName: "Rajput",
    username: "amanrajput",
    email: "amanrajput@gmail.com",
    password: "Aman@123",
    bio: "FullStack Web Developer 3",
    website: "https://loremipsum.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    coverPhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    followers: [
      {
        firstName: "Anshul",
        lastName: "raheja",
        username: "anshulraheja",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
      {
        _id: uuid(),
        firstName: "Nisha",
        lastName: "Singh",
        username: "nishasingh",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
    ],
    following: [
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
    ],
    bookmarks: [],
  },

  {
    _id: uuid(),
    firstName: "Nisha",
    lastName: "Singh",
    username: "nishasingh",
    email: "nishasingh@gmail.com",
    password: "Walt@123",
    bio: "FullStack Web Developer 4",
    website: "https://loremipsum.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    coverPhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",

    followers: [
      {
        firstName: "Anshul",
        lastName: "raheja",
        username: "anshulraheja",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
      {
        firstName: "Jaz",
        lastName: "Brown",
        username: "jazbrown",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
    ],
    following: [
      {
        firstName: "Anshul",
        lastName: "raheja",
        username: "anshulraheja",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
      {
        firstName: "Jaz",
        lastName: "Brown",
        username: "jazbrown",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
      {
        firstName: "Aman",
        lastName: "Rajput",
        username: "amanrajput",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
    ],
    bookmarks: [],
  },

  {
    _id: uuid(),
    firstName: "Jaz",
    lastName: "Brown",
    username: "jazbrown",
    email: "jazbrown@gmail.com",
    password: "Jaz@123",
    bio: "FullStack Web Developer 5",
    website: "https://loremipsum.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    coverPhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",

    following: [
      {
        firstName: "Anshul",
        lastName: "raheja",
        username: "anshulraheja",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
      {
        _id: uuid(),
        firstName: "Nisha",
        lastName: "Singh",
        username: "nishasingh",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
    ],
    followers: [
      {
        firstName: "Anshul",
        lastName: "raheja",
        username: "anshulraheja",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
      {
        _id: uuid(),
        firstName: "Nisha",
        lastName: "Singh",
        username: "nishasingh",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
      },
    ],
    bookmarks: [],
  },
];