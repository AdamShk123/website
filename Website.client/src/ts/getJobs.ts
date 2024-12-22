import {Job} from "./job.js";
import {getImage} from "./getImage.js";

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
        const job: Job = {
            title: item.title,
            details: item.details,
            startDate: new Date(item.startDate),
            endDate: new Date(item.endDate),
            company: item.companyItem.company,
            city: item.companyItem.city,
            state: item.companyItem.state,
            logo: item.companyItem.logo
        };

        return job;
    })
};

const addImages = async(URI: string, jobs: Job[]): Promise<string[]> => {
    return await Promise.all(jobs.map(async (job: Job) => {
        return await getImage(URI, job.logo);
    }));
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const createJobSection = async (URI: string): Promise<void> => {
    const jobs = await getJobs(URI)
        .then(jobs => mapJobs(jobs))
        .catch((err) => { console.log(err); return Array<Job>(); });
    
    const images = await addImages(URI, jobs);
    
    const jobsDiv: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#jobs');
    
    if(jobs.length == 0)
    {
        if(jobsDiv)
        {
            jobsDiv.innerHTML = "<h2>No Jobs Found!</h2>";
        }
    }
    else 
    {
        if(jobsDiv)
        {
            jobs
                .map((job: Job, index: number) =>`
                    <div class="job">
                        <div class="logoDiv">${images[index].replace("<svg", "<svg class=\"logo\"")}</div>
                        <div class="text">
                            <h2>${job.company}</h2>
                            <h3>${job.title}</h3>
                            <h3>${months[job.startDate.getMonth()]} ${job.startDate.getFullYear()} - ${months[job.endDate.getMonth()]} ${job.endDate.getFullYear()}</h3>
                            <h3>${job.city}, ${job.state}</h3>
                            <p>Details Details Details Details Details</p>
                        </div>
                    </div>
                `)
                .forEach((job: string) => jobsDiv.innerHTML += job);
        }
    }
    
};

export { createJobSection };