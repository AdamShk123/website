import { raiseCounter } from "./ts/counter.ts";

const clickButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#clickButton')
const clickCount: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#clickCount')

if(clickButton != null && clickCount != null) 
{
    clickButton.addEventListener("click", () => raiseCounter(clickCount));   
}

// const getData = async () => {
//     const url = "https://adamshkolnik.com/api/weatherforecast";
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
