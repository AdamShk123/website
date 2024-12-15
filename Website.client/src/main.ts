// import { raiseCounter } from "./ts/counter.ts";
    
const URI = import.meta.env.VITE_URI;

// const clickButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#clickButton')
// const clickCount: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#clickCount')
//
// if(clickButton != null && clickCount != null) 
// {
//     clickButton.addEventListener("click", () => raiseCounter(clickCount));   
// }

// const aboutSection: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#about');
const experienceSection: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#experience');
const projectsSection: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#projects');

const aboutLinkText: HTMLHeadingElement | null = document.querySelector<HTMLHeadingElement>('#aboutLinkText');
const experienceLinkText: HTMLHeadingElement | null = document.querySelector<HTMLHeadingElement>('#experienceLinkText');
const projectsLinkText: HTMLHeadingElement | null = document.querySelector<HTMLHeadingElement>('#projectsLinkText');

document.addEventListener("scrollend", () => {
    const scrollY = document.documentElement.scrollTop + 60;
    
    const projectsY = projectsSection?.offsetTop;
    const experienceY = experienceSection?.offsetTop;
    
    if(experienceY !== undefined && scrollY < experienceY) 
    {
        if(aboutLinkText !== null) 
        {
            aboutLinkText.style.color = '#FFDD51';
        }

        if(experienceLinkText !== null)
        {
            experienceLinkText.style.color = '#FFFFFF';
        }

        if(projectsLinkText !== null)
        {
            projectsLinkText.style.color = '#FFFFFF';
        }
    }
    else if(projectsY !== undefined && scrollY < projectsY)
    {
        if(aboutLinkText !== null)
        {
            aboutLinkText.style.color = '#FFFFFF';
        }

        if(experienceLinkText !== null)
        {
            experienceLinkText.style.color = '#FFDD51';
        }

        if(projectsLinkText !== null)
        {
            projectsLinkText.style.color = '#FFFFFF';
        }
    }
    else 
    {
        if(aboutLinkText !== null)
        {
            aboutLinkText.style.color = '#FFFFFF';
        }

        if(experienceLinkText !== null)
        {
            experienceLinkText.style.color = '#FFFFFF';
        }

        if(projectsLinkText !== null)
        {
            projectsLinkText.style.color = '#FFDD51';
        }
    }
})

// const getData = async () => {
//     const url = URI + '/api/messages';
//     const init: RequestInit = { method: "GET" };
//
//     try 
//     {
//         const response = await fetch(url, init);
//
//         if(!response.ok)
//         {
//             throw new Error(`Response status: ${response.status}`);
//         }
//
//         const json = await response.json();
//         console.log(json);
//     }
//     catch (err: unknown) 
//     {
//         if (err instanceof Error) 
//         {
//             console.log(err.message);
//         }
//     }
// };
//
// getData().then(() => console.log("complete"));
