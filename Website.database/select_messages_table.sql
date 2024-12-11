-- Select all messages and order by time and date sent in descending order.
SELECT *
FROM dbo.Messages
ORDER BY Sent DESC;

-- Select and group messages sent from same email address. Order by descending message count.
SELECT Email, COUNT(Id) as MessageCount
FROM dbo.Messages
GROUP BY Email
ORDER BY MessageCount DESC;

-- Select number of distinct email addresses
SELECT COUNT(DISTINCT Email) as UniqueEmailCount
From dbo.Messages;

-- Select Messages from specific email address. Order by time and date sent in descending order.
SELECT *
FROM dbo.Messages
WHERE Email = 'adam.shkolnik@outlook.com'
ORDER BY Sent DESC;

-- Select number of entries
SELECT COUNT(*) as EntryCount
From dbo.Messages;