IF (EXISTS (SELECT *
                 FROM INFORMATION_SCHEMA.TABLES
                 WHERE TABLE_SCHEMA = 'dbo'
                 AND  TABLE_NAME = 'Messages'))
BEGIN
    DROP TABLE dbo.Messages;
	PRINT 'Table [dbo].[Messages] was dropped!' + convert(varchar(25), CURRENT_TIMESTAMP, 120) ;
END

CREATE TABLE dbo.Messages (
	Id INT NOT NULL IDENTITY(1,1),
	Name VARCHAR(50) NOT NULL,
	Email VARCHAR(50) NOT NULL,
	Message VARCHAR(1000) NOT NULL,
	Sent DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Mailed BIT NOT NULL DEFAULT 0,
	PRIMARY KEY (Id)
);

INSERT INTO dbo.Messages (Name, Email, Message)
VALUES ('Adam Shkolnik', 'adam.shkolnik@outlook.com', 'Hey Adam, I''m loving the new contact form!'),
	   ('Julia Shkolnik', 'shkolnikjx@gmail.com', 'Nice website! :)');

INSERT INTO dbo.Messages (Name, Email, Message)
VALUES ('Adam Shkolnik', 'adam.shkolnik@outlook.com', 'lol idk');