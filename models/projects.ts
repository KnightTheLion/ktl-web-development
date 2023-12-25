interface Project {
    url: string;
    imageUrl: string;
    title: string;
    description: string;
}

const projects: Project[] = [
    {
        url: "https://www.dreadawnphoto.com/",
        imageUrl: "/assets/projects/drea-dawn.PNG",
        title: "Drea Dawn Photo + Films",
        description: "Photography + Film Website",
    },
    {
        url: "https://example.com/project1",
        imageUrl: "/assets/projects/masters-touch-tile.PNG",
        title: "Master's Touch Tile",
        description: "Business Website.",
    },
    {
        url: "https://event-platform-taupe-ten.vercel.app/",
        imageUrl: "/assets/projects/evently.PNG",
        title: "Evently",
        description: "Event Creation Website (DEMO SITE) via: JS Mastery",
    },
    // Add more projects as needed
];

export default projects;
