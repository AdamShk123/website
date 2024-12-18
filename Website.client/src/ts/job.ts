type Job = 
{
    company: Company
    title: string,
    details: string,
    startDate: Date,
    endDate: Date
};

type Company = 
{
    company: string,
    city: string,
    state: string,
    logo: string
};

export { Job, Company }