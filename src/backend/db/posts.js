import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    firstName: "Anshul",
    lastName: "Raheja",
    username: "anshulraheja",
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`,
    postImage:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Aman",
          lastName: "Rajput",
          username: "frankRajput",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Jaz",
          lastName: "Brown",
          username: "jazbrown",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Nisha",
          lastName: "Singh",
          username: "nishasingh",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    createdAt: new Date("20 May 2022 11:58:15 PM"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        text: "testing comment",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("20 May 2022 10:11:15 PM"),
      },
      {
        _id: uuid(),
        firstName: "Aman",
        lastName: "Rajput",
        username: "frankRajput",
        profilePhoto:
          "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        text: "testing comment",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("20 May 2022 10:11:15 PM"),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Test 1",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Anshul",
          lastName: "Raheja",
          username: "anshulraheja",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    createdAt: new Date("May 10 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Test 2",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Aman",
          lastName: "Rajput",
          username: "frankRajput",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Jaz",
          lastName: "Brown",
          username: "jazbrown",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },

        {
          _id: uuid(),
          firstName: "Nisha",
          lastName: "Singh",
          username: "nishasingh",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Aman",
    lastName: "Rajput",
    username: "frankRajput",
    createdAt: new Date("May 12 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Test 3",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Nisha",
          lastName: "Singh",
          username: "nishasingh",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    username: "anshulraheja",
    firstName: "Anshul",
    lastName: "Raheja",
    createdAt: new Date("May 15 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Test 4",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "Aman",
          lastName: "Rajput",
          username: "frankRajput",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          _id: uuid(),
          firstName: "Nisha",
          lastName: "Singh",
          username: "nishasingh",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Jaz",
    lastName: "Brown",
    username: "jazbrown",
    createdAt: new Date("May 16 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Test 5",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Aman",
          lastName: "Rajput",
          username: "frankRajput",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Jaz",
          lastName: "Brown",
          username: "jazbrown",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Anshul",
          lastName: "Raheja",
          username: "anshulraheja",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Nisha",
    lastName: "Singh",
    username: "nishasingh",
    createdAt: new Date("May 13 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Test 6",
    postImage:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Aman",
          lastName: "Rajput",
          username: "frankRajput",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Jaz",
          lastName: "Brown",
          username: "jazbrown",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },

        {
          firstName: "Nisha",
          lastName: "Singh",
          username: "nishasingh",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    username: "anshulraheja",
    firstName: "Anshul",
    lastName: "Raheja",
    createdAt: new Date("May 17 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },

  {
    _id: uuid(),
    content: "Test 7",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Anshul",
          lastName: "Raheja",
          username: "anshulraheja",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    username: "anshulraheja",
    firstName: "Anshul",
    lastName: "Raheja",
    createdAt: new Date("May 11 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Test 9",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: "Anshul",
          lastName: "Raheja",
          username: "anshulraheja",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },

        {
          _id: uuid(),
          firstName: "Nisha",
          lastName: "Singh",
          username: "nishasingh",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Jaz",
    lastName: "Brown",
    username: "jazbrown",
    createdAt: new Date("May 09 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Test 10",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "Anshul",
          lastName: "Raheja",
          username: "anshulraheja",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: new Date("May 15 2022 05:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },

  {
    _id: uuid(),
    content: "hello world",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          firstName: "Anshul",
          lastName: "Raheja",
          username: "anshulraheja",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Aman",
          lastName: "Rajput",
          username: "frankRajput",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Jaz",
          lastName: "Brown",
          username: "jazbrown",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Aman",
    lastName: "Rajput",
    username: "frankRajput",
    createdAt: new Date("May 07 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "javascript is best",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Anshul",
          lastName: "Raheja",
          username: "anshulraheja",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Nisha",
    lastName: "Singh",
    username: "nishasingh",
    createdAt: new Date("May 11 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Do questions on leetcode",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Aman",
          lastName: "Rajput",
          username: "frankRajput",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Jaz",
          lastName: "Brown",
          username: "jazbrown",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },

        {
          _id: uuid(),
          firstName: "Nisha",
          lastName: "Singh",
          username: "nishasingh",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Aman",
    lastName: "Rajput",
    username: "frankRajput",
    createdAt: new Date("May 03 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "LinkedIn for jov",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Aman",
          lastName: "Rajput",
          username: "frankRajput",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    username: "anshulraheja",
    firstName: "Anshul",
    lastName: "Raheja",
    createdAt: new Date("May 02 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Eat Sleep Play Repeat",
    likes: {
      likeCount: 3000,
      likedBy: [
        {
          firstName: "Jaz",
          lastName: "Brown",
          username: "jazbrown",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Anshul",
          lastName: "Raheja",
          username: "anshulraheja",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },

    firstName: "Aman",
    lastName: "Rajput",
    username: "frankRajput",
    createdAt: new Date("May 18 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },

  {
    _id: uuid(),
    content: "I'm The Rock",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Nisha",
          lastName: "Singh",
          username: "nishasingh",
          profilePhoto:
            "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: new Date("May 01 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    comments: [],
  },
];