import { scrollSection } from "./ts/scroll.ts";
import { postMessage } from "./ts/post.ts";
import { createJobSection } from "./ts/getJobs.ts";

const URI = import.meta.env.VITE_URI;

document.addEventListener("scrollend", scrollSection);

const sendButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#send');

sendButton!.onclick = () => postMessage(URI)
    .then(() => alert("Message Sent Successfully!"))
    .catch(() => alert("Failed to Send Message!")
);

createJobSection(URI)
    .then(() => console.log("Finished!"));