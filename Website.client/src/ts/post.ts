import { Message } from "./message.js";

const postMessage = async (URI: string) => {
    const form: HTMLFormElement | null = document.querySelector<HTMLFormElement>('#form');
    const formData = new FormData(form!);

    const url = URI + '/api/messages';
    const headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("Access-Control-Allow-Origin","*");

    const message = mapMessage(formData);

    const init: RequestInit = {
        headers: headers,
        method: "POST",
        body: JSON.stringify(message)
    };

    const response = await fetch(url, init);

    if(!response.ok)
    {
        throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    alert("Message Sent Successfully!");

    return json;
};

const mapMessage = (formData: FormData): Message => {
    return {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string
    } as Message
};

export { postMessage };