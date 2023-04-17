
/*table for users w attributes*/
CREATE TABLE IF NOT EXISTS USER ( username TEXT PRIMARY KEY NOT NULL, password TEXT NOT NULL );

/*table for courses w attributes. Entered by is the faculty who added the page*/
CREATE TABLE IF NOT EXISTS COURSE ( courseid TEXT PRIMARY KEY NOT NULL, coursename TEXT NOT NULL, semester TEXT NOT NULL, coursedesc TEXT, enrollnum INTEGER NOT NULL, enteredby TEXT NOT NULL );

DELETE FROM USER;

DELETE FROM COURSE;

INSERT INTO USER VALUES ('tyjmr', '1234');

INSERT INTO COURSE VALUES ('CPTS_489', 'Web Development', 'Spring', 'course about web development', 80, 'subu');