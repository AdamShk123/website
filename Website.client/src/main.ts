import {scrollSection} from "./ts/scroll.ts";
import { postMessage } from "./ts/post.ts";

const URI = import.meta.env.VITE_URI;

document.addEventListener("scrollend", scrollSection);

const sendButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#send');

sendButton!.onclick = () => postMessage(URI);
