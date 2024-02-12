CREATE TABLE User (
  userId INTEGER PRIMARY KEY,
  pseudo VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(255),
  prompt VARCHAR(255)
);

-- CREATE TABLE GeneratedImages (
--   imageId INTEGER PRIMARY KEY,
--   userId INTEGER,
--   imageUrl VARCHAR(255) NOT NULL,
--   prompt VARCHAR(255),
--   FOREIGN KEY (userId) REFERENCES User(userId)
-- );