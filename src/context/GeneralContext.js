import { createContext, useState } from "react";

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {

    const currentYear = new Date().getFullYear();
    const [currentProjects, setProjects] = useState(0);

    const projects = [
        {
            name: "CalendarApp",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9c55.appspot.com/o/CalendarApp.png?alt=media&token=9904dc29-5cfc-4f9c-8ae5-d9e55addb60a",
            repository: "https://github.com/Jrozo97/CalendarApp",
            deployment: "https://calendar-backend-seven.vercel.app",
            tools: [
                "ReactJS",
                "JavaScript",
                "NodeJS",
                "Express",
                "MongoDB"
            ],
        },
        {
            name: "SwappYourHome",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9c55.appspot.com/o/CalendarApp.png?alt=media&token=9904dc29-5cfc-4f9c-8ae5-d9e55addb60a",
            repository: "",
            deployment: "https://swapyourhome.co/",
            tools: [
                "Bubble.io",
                "HTML",
                "CSS",
                "JavaScript",
                "Wompi"
            ],
        },
        {
            name: "EmployeeList",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9c55.appspot.com/o/EmployeeList.png?alt=media&token=62dc24bd-a610-4ea5-b02d-9499792eae81",
            repository: "https://github.com/Jrozo97/EmployeeList",
            deployment: "https://employee-list-chi.vercel.app/",
            tools: [
                "NextJS",
                "TypeScript",
                "Redux Toolkit",
            ],
        },
        {
            name: "JournalApp",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9c55.appspot.com/o/JournalApp.png?alt=media&token=ff2d99d8-2105-4037-b450-012757089377",
            repository: "https://github.com/Jrozo97/JournalApp",
            deployment: "https://journal-app-jet-delta.vercel.app",
            tools: [
                "ReactJs",
                "TypeScript",
                "Redux",
                "SASS",
                "Firebase"
            ],
        },
        {
            name: "HeroApp",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9c55.appspot.com/o/HeroApp.png?alt=media&token=600c8abd-2a38-43ef-916f-6e946676e698",
            repository: "https://github.com/Jrozo97/hero-app",
            deployment: "https://hero-app.vercel.app/login",
            tools: [
                "ReactJS",
                "JavaScript",
            ],
        },
        {
            name: "Portafolio",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-c9c55.appspot.com/o/Portfolio_Angular.png?alt=media&token=d168adce-2df4-401c-87b9-d364d69cc383",
            repository: "https://github.com/Jrozo97/portafolio-angular",
            deployment: "https://portafolio-angular-psi.vercel.app/",
            tools: [
                "Angular",
                "TypeScript",
            ],
        },


    ]


    const data = {
        projects,
        currentYear,
        currentProjects,
        setProjects,
    }

    return (
        <GeneralContext.Provider value={data}>
            {children}
        </GeneralContext.Provider>
    )

}

export { GeneralProvider };
export default GeneralContext;