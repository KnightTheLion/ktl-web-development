interface Project {
    url: string;
    imageUrl: string;
    title: string;
    description: string;
    type: string;
}

const projects: Project[] = [
    {
        url: "https://www.dreadawnphoto.com/",
        imageUrl: "/assets/projects/drea-dawn.PNG",
        title: "Drea Dawn Photo + Films",
        description: "Photography + Film Website",
        type: "self",
    },
    {
        url: "https://masters-touch-web.vercel.app/",
        imageUrl: "/assets/projects/masters-touch-tile.PNG",
        title: "Master's Touch Tile + Stone",
        description: "Business Website.",
        type: "self",
    },
    {
        url: "https://event-platform-taupe-ten.vercel.app/",
        imageUrl: "/assets/projects/evently.PNG",
        title: "Evently (DEMO SITE)",
        description: "JS Mastery Project",
        type: "tutorial-project",
    },
    // Add more projects as needed
];

export default projects;
