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

const postMessage = async() => {
    const form: HTMLFormElement | null = document.querySelector<HTMLFormElement>('#form');
    const formData = new FormData(form!);
    
    const url = URI + '/api/messages';
    const headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("Access-Control-Allow-Origin","*");
    const init: RequestInit = { 
        headers: headers, 
        method: "POST", 
        body: JSON.stringify({ 
            name: formData.get('name') as string, 
            email: formData.get('email') as string, 
            message: formData.get('message') as string 
        }) 
    };
    
    console.log(init.body);

    try
    {
        const response = await fetch(url, init);

        if(!response.ok)
        {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        return json;
    }
    catch (err: unknown)
    {
        if (err instanceof Error)
        {
            console.log(err.message);
        }
    }
}

const sendButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#send');

sendButton!.onclick = () => postMessage();

const getData = async () => {
    const url = URI + '/api/messages';
    const headers = new Headers();
    const init: RequestInit = { headers: headers, method: "GET" };

    try 
    {
        const response = await fetch(url, init);

        if(!response.ok)
        {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        
        return json;
    }
    catch (err: unknown) 
    {
        if (err instanceof Error) 
        {
            console.log(err.message);
        }
    }
};

getData().then((data) => console.log(data));
