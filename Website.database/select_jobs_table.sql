-- Select all jobs and order by descending start date
SELECT Jobs.Id, Companies.Company, Jobs.Title, Jobs.StartDate, Jobs.EndDate, Companies.City, Companies.State
FROM dbo.Jobs
INNER JOIN dbo.Companies
ON Jobs.Company = Companies.Id
ORDER BY StartDate DESC;

-- Group by company and order by descending count
SELECT Companies.Company, COUNT(*) as JobCount
FROM dbo.Jobs
INNER JOIN dbo.Companies
ON Jobs.Company = Companies.Id
GROUP BY Companies.Company
ORDER BY JobCount DESC;