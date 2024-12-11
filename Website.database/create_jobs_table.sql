IF (EXISTS (SELECT *
                 FROM INFORMATION_SCHEMA.TABLES
                 WHERE TABLE_SCHEMA = 'dbo'
                 AND  TABLE_NAME = 'Jobs'))
BEGIN
    DROP TABLE dbo.Messages;
	PRINT 'Table [dbo].[Jobs] was dropped!' + convert(varchar(25), CURRENT_TIMESTAMP, 120) ;
END

IF (EXISTS (SELECT *
                 FROM INFORMATION_SCHEMA.TABLES
                 WHERE TABLE_SCHEMA = 'dbo'
                 AND  TABLE_NAME = 'Jobs'))
BEGIN
    DROP TABLE dbo.Messages;
	PRINT 'Table [dbo].[Jobs] was dropped!' + convert(varchar(25), CURRENT_TIMESTAMP, 120) ;
END

CREATE TABLE dbo.Companies (
	Id INT NOT NULL IDENTITY(1,1),
	Company VARCHAR(50) NOT NULL,
    City VARCHAR(50) NOT NULL,
    State VARCHAR(2) NOT NULL,
	PRIMARY KEY (Id)
);

INSERT INTO dbo.Companies (Company, City, State)
VALUES ('Federal Reserve Bank of Chicago', 'Chicago', 'IL'),
       ('Chicago Transit Authority', 'Chicago', 'IL');

CREATE TABLE dbo.Jobs (
	Id INT NOT NULL IDENTITY(1,1),
    Company Int NOT NULL,
	Title VARCHAR(50) NOT NULL,
	Details VARCHAR(150) NOT NULL,
	StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
	PRIMARY KEY (Id),
    FOREIGN KEY (Company) REFERENCES dbo.Companies(Id)
);

INSERT INTO dbo.Jobs (Company, Title, Details, StartDate, EndDate)
VALUES ('1', 'Computer Science Intern', 'LMAO', '2023-06-12', '2023-08-25'),
       ('2', 'Computer Science Intern', 'LMAO', '2024-01-02', '2024-04-26'),
       ('1', 'Computer Science Intern', 'LMAO', '2024-06-03', '2024-08-23');