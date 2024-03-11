-- Drop the database if it already exists
DROP DATABASE IF EXISTS TestDemoFilter;
-- Create database
CREATE DATABASE IF NOT EXISTS TestDemoFilter;
USE TestDemoFilter;

-- Create table Department
DROP TABLE IF EXISTS 	`Department`;
CREATE TABLE IF NOT EXISTS `Department` (
	id 						INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`name` 					NVARCHAR(50) NOT NULL UNIQUE KEY,
    total_member			INT	UNSIGNED,
    `type`					ENUM('Dev','Test','ScrumMaster','PM') NOT NULL,
    created_date			DATETIME DEFAULT NOW()
);

-- create table: Account
DROP TABLE IF EXISTS `Account`;
CREATE TABLE `Account`(
	id						INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username				VARCHAR(50) NOT NULL UNIQUE KEY,
    department_id 			INT UNSIGNED NOT NULL,
    gender					ENUM('Male', 'Female', 'LGBT') NOT NULL,
    created_date			DATETIME DEFAULT now(),
    FOREIGN KEY(department_id) REFERENCES Department(id)
);

-- =============================================
-- INSERT DATA 
-- =============================================
-- Add data Department
INSERT INTO Department(	`name`, 		total_member, 	`type`, 		created_date) 
VALUES
						(N'Marketing'	, 		1,		'Dev', 			'2020-03-05'),
						(N'Sale'		, 		2,		'Test', 		'2020-03-05'),
						(N'Bảo vệ'		, 		3,		'ScrumMaster', 	'2020-03-07'),
						(N'Nhân sự'		, 		4,		'PM', 			'2020-03-08'),
						(N'Kỹ thuật'	, 		5,		'Dev', 			'2020-03-10'),
						(N'Tài chính'	, 		6,		'ScrumMaster', 	NOW()		),
						(N'Phó giám đốc', 		7,		'PM', 			NOW()		),
						(N'Giám đốc'	, 		8,		'Test', 		'2020-04-07'),
						(N'Thư kí'		, 		9,		'PM', 			'2020-04-07'),
						(N'Bán hàng'	, 		1,		'Dev', 			'2020-04-09');
                    
-- Add data Account
INSERT INTO `Account`(	username		,	department_id	,gender, created_date)
VALUES 				(	'dangblack'		,   	'5'		,'Male',	'2020-03-05'),
					(	'quanganh'		,		'1'		,'Male','2020-03-05'	),
                    (	'vanchien'		,		'1'		,'Male','2020-03-05'	),
                    (	'cocoduongqua'	,		'1'		, 'Male',	'2020-03-10'),
                    (	'doccocaubai'	,   	'2'		,'Male','2020-03-10'	),
                    (	'khabanh'		,   	'2'		,'Male','2020-03-10'	),
                    (	'huanhoahong'	,   	'2'		,'LGBT','2020-04-07'	),
                    (	'tungnui'		,   	'8'		,'LGBT','2020-04-07'	),
                    (	'duongghuu'		,   	'9'		,'LGBT','2020-04-07'	),
                    (	'vtiaccademy'	,   	'10'	,'LGBT','2020-04-07'	);
                    insert into `Account` (username, department_id, gender, created_date) values ('Talya', 1, 'Female', '2020-08-28');
insert into `Account` (username, department_id, gender, created_date) values ('Evelin', 2, 'Male', '2020-11-11');
insert into `Account` (username, department_id, gender, created_date) values ('Demetrius', 3, 'Male', '2020-09-08');
insert into `Account` (username, department_id, gender, created_date) values ('Ignaz', 4, 'Male', '2020-10-13');
insert into `Account` (username, department_id, gender, created_date) values ('Ericka', 5, 'Female', '2020-11-06');
insert into `Account` (username, department_id, gender, created_date) values ('Ervin', 6, 'Male', '2021-03-24');
insert into `Account` (username, department_id, gender, created_date) values ('Taite', 7, 'Male', '2021-03-27');
insert into `Account` (username, department_id, gender, created_date) values ('Skylar', 8, 'Male', '2021-03-10');
insert into `Account` (username, department_id, gender, created_date) values ('Melvin', 9, 'Male', '2020-10-09');
insert into `Account` (username, department_id, gender, created_date) values ('Marwin', 8, 'Male', '2020-12-09');
insert into `Account` (username, department_id, gender, created_date) values ('Odelinda', 8, 'Female', '2020-12-09');
insert into `Account` (username, department_id, gender, created_date) values ('Timoteo', 8, 'Male', '2020-08-05');
insert into `Account` (username, department_id, gender, created_date) values ('Trace', 8, 'Male', '2021-02-08');
insert into `Account` (username, department_id, gender, created_date) values ('Erny', 8, 'Male', '2020-12-22');
insert into `Account` (username, department_id, gender, created_date) values ('Kally', 8, 'Female', '2021-02-08');
insert into `Account` (username, department_id, gender, created_date) values ('Penni', 5, 'Female', '2021-03-02');
insert into `Account` (username, department_id, gender, created_date) values ('Crystie', 5, 'Female', '2020-10-08');
insert into `Account` (username, department_id, gender, created_date) values ('Barris', 5, 'Male', '2020-09-05');
insert into `Account` (username, department_id, gender, created_date) values ('Kaitlyn', 5, 'Female', '2021-01-15');
insert into `Account` (username, department_id, gender, created_date) values ('Roby', 5, 'Female', '2020-10-11');
insert into `Account` (username, department_id, gender, created_date) values ('Piper', 2, 'Female', '2020-09-17');
insert into `Account` (username, department_id, gender, created_date) values ('Curry', 2, 'Male', '2020-10-31');
insert into `Account` (username, department_id, gender, created_date) values ('Kamilah', 2, 'Female', '2020-08-17');
insert into `Account` (username, department_id, gender, created_date) values ('Christy', 2, 'Female', '2020-11-13');
insert into `Account` (username, department_id, gender, created_date) values ('Morlee', 2, 'Male', '2021-04-03');
insert into `Account` (username, department_id, gender, created_date) values ('Morlee2', 2, 'LGBT', '2021-04-03');