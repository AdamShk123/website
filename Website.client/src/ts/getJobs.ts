import {Company, Job} from "./job.js";

const getJobs = async (URI: string): Promise<any[]> => {

    const url = URI + '/api/jobs';
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

    return await response.json();
};

const mapJobs = (jobs: any[]): Job[] => {
    return jobs.map((item: any) => {
        const company: Company = {
            company: item.companyItem.company,
            city: item.companyItem.city,
            state: item.companyItem.state,
            logo: item.companyItem.logo
        } as Company;

        const job: Job = {
            company: company,
            title: item.title,
            details: item.details,
            startDate: new Date(item.startDate),
            endDate: new Date(item.endDate)
        };

        return job;
    })
};

export { getJobs, mapJobs };