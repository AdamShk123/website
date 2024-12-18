import { scrollSection } from "./ts/scroll.ts";
import { postMessage } from "./ts/post.ts";
import { Job } from "./ts/job.ts";
import { getJobs, mapJobs } from "./ts/getJobs.ts";

const URI = import.meta.env.VITE_URI;

document.addEventListener("scrollend", scrollSection);

const sendButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('#send');

sendButton!.onclick = () => postMessage(URI)
    .then(() => alert("Message Sent Successfully!"))
    .catch(() => alert("Failed to Send Message!")
);

const result = getJobs(URI)
    .then(jobs => mapJobs(jobs))
    .catch((err) => { console.log(err); return Array<Job>(); });

console.log(result);