const getImage = async  (URI: string, file: string): Promise<string> => {
    const url = `${URI}/api/image/${file}`;
    const headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("Access-Control-Allow-Origin","*");

    const init: RequestInit = {
        headers: headers,
        method: "GET"
    };

    const response = await fetch(url, init);

    if(!response.ok)
    {
        throw new Error(`Response status: ${response.status}`);
    }
    
    const contents = await response.text()

    return contents.toString();
};

export { getImage };