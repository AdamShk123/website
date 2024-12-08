import { raiseCounter } from "./ts/counter.ts";

const clickButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#clickButton')
const clickCount: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#clickCount')

if(clickButton != null && clickCount != null) 
{
    clickButton.addEventListener('click', () => raiseCounter(clickCount));   
}