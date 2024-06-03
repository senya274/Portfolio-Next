export const projects = [
  {
    id: 1,
    image: "/car-rent.png",
    title: "Car-rent",
    technologies: ["HTML", "CSS", "JavaScript"],
    descriptionShort: "Landing page for car-rent service",
    descriptionFull:
      "Car-Rent is a landing page that connects people with cars that are ready to make their dreams come true. The main idea is to provide users with instant access to cars on demand, with minimal effort and maximum comfort.",
      usedTech: [
        "HTML - For structuring and creating the content of web pages.",
        "CSS - To style and visualize pages, providing a nice user experience.",
        "JavaScript - To add interactivity, animations and improve the user experience of web application."
      ],
    idea: "The goal of the project is to provide the user with a quick and high-quality opportunity to select a suitable car, as well as receive feedback from the manager after requesting a call",
    background: "/car-rent.png",
    url: "https://car-rent-landing.vercel.app/",
  },
  {
    id: 2,
    image: "/case-gen.png",
    title: "Case-Gen",
    technologies: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind", "Prisma", "KindeAuth"],
    descriptionShort:
      "Custom Phone-Case configurator",
    descriptionFull:
      "Online Shop where users can configure and buy their own fully-custom phone-case",
    usedTech:
      [
        "HTML - For structuring and creating the content of web pages.",
        "TailWind - To style and visualize pages",
        "Next.js - To add interactivity",
        "KindeAuth - For user authentification",
        "Prisma - Remote database",
        "UploadThing - Hosting for images",
        "React-DND - For Drag & Drop",
        "Stripe - For test payment",
      ],
    idea: "A fully responsive app where users can create and buy their own phone cases by uploading their images and customizing them in real time on their phone model. Payment occurs through a secure service",
    url: "https://case-gen.vercel.app/",
    background: "/case-gen.png",
  },
  {
    id: 3,
    image: "/rick.png",
    title: "Rick and Morty",
    technologies: ["HTML", "CSS", "React", "OAuth 2.0"],
    descriptionShort:
      "Rick and Morty App: Character Library",
    descriptionFull:
      "Creating a library where the user can log in and find information about any character from the universe using search and filtering",
      usedTech: [
        "HTML - For structuring and creating the content of web pages.",
        "CSS - To style and visualize pages, providing a nice user experience.",
        "React - To add interactivity and improve the user experience of web application.",
        "OAuth 2.0 - To add authorization with Google"
      ],
    idea: "The result is that the user, using the library, easily finds information about the desired character without having to search for everything on the Internet himself, the API provides all the data",
    background: "/rick.png",
    url: "https://rickmorty-c81m-4e071lfw4-senya274.vercel.app/",
  },
];

export const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];
