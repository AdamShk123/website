const scrollSection = () => {
    const experienceSection: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#experience');
    const projectsSection: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#projects');

    const aboutLinkText: HTMLHeadingElement | null = document.querySelector<HTMLHeadingElement>('#aboutLinkText');
    const experienceLinkText: HTMLHeadingElement | null = document.querySelector<HTMLHeadingElement>('#experienceLinkText');
    const projectsLinkText: HTMLHeadingElement | null = document.querySelector<HTMLHeadingElement>('#projectsLinkText');

    const scrollY = document.documentElement.scrollTop + 60;

    const projectsY = projectsSection?.offsetTop;
    const experienceY = experienceSection?.offsetTop;

    if(experienceY !== undefined && scrollY < experienceY)
    {
        if(aboutLinkText !== null)
        {
            aboutLinkText.style.color = '#FFDD51';
        }

        if(experienceLinkText !== null)
        {
            experienceLinkText.style.color = '#FFFFFF';
        }

        if(projectsLinkText !== null)
        {
            projectsLinkText.style.color = '#FFFFFF';
        }
    }
    else if(projectsY !== undefined && scrollY < projectsY)
    {
        if(aboutLinkText !== null)
        {
            aboutLinkText.style.color = '#FFFFFF';
        }

        if(experienceLinkText !== null)
        {
            experienceLinkText.style.color = '#FFDD51';
        }

        if(projectsLinkText !== null)
        {
            projectsLinkText.style.color = '#FFFFFF';
        }
    }
    else
    {
        if(aboutLinkText !== null)
        {
            aboutLinkText.style.color = '#FFFFFF';
        }

        if(experienceLinkText !== null)
        {
            experienceLinkText.style.color = '#FFFFFF';
        }

        if(projectsLinkText !== null)
        {
            projectsLinkText.style.color = '#FFDD51';
        }
    }
};

export { scrollSection };