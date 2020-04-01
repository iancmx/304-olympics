CREATE TABLE medalcount (
	gold_medal_count int NOT NULL,
	silver_medal_count int NOT NULL,
	bronze_medal_count int NOT NULL,
	total_medal_count int NOT NULL,
	PRIMARY KEY(gold_medal_count, silver_medal_count, bronze_medal_count),
	CONSTRAINT positive_count CHECK (gold_medal_count >= 0 AND silver_medal_count >= 0 AND bronze_medal_count >= 0 AND total_medal_count >= 0),
	CONSTRAINT sum_correct CHECK (gold_medal_count + silver_medal_count + bronze_medal_count = total_medal_count)
);


CREATE TABLE countrymedal (
	country_name varchar (255) PRIMARY KEY,
	gold_medal_count int NOT NULL,
	silver_medal_count int NOT NULL,
	bronze_medal_count int NOT NULL,
	FOREIGN KEY (gold_medal_count, silver_medal_count, bronze_medal_count) REFERENCES medalcount(gold_medal_count, silver_medal_count, bronze_medal_count)
);


CREATE TABLE nationalitycolor (
	nationality varchar(30) PRIMARY KEY,
	colour  varchar(30),
	FOREIGN KEY (nationality) REFERENCES countrymedal(country_name)
);


CREATE TABLE sport (
	sport_id int PRIMARY KEY,
	name varchar(255) NOT NULL
);


CREATE TABLE coach (
	coach_id int PRIMARY KEY,
	age int NOT NULL,
	name varchar(255) NOT NULL,
	sex varchar(30) NOT NULL,
	CONSTRAINT check_sex_coach CHECK (sex IN ('Male', 'Female', 'Others', 'N/A')),
	CONSTRAINT check_age_coach CHECK (age >= 18 AND age <= 110)
);


CREATE TABLE participant (
	participant_id int PRIMARY KEY,
	name varchar(255) NOT NULL,
	sport_id int NOT NULL,
	country varchar (255),
	FOREIGN KEY (country) REFERENCES  nationalitycolor(nationality),
	FOREIGN KEY (sport_id) REFERENCES sport(sport_id)
); 


CREATE TABLE mentorship (
	participant_id int NOT NULL,
	coach_id int NOT NULL,
	PRIMARY KEY (participant_id, coach_id),
	FOREIGN KEY(participant_id) REFERENCES participant(participant_id),
	FOREIGN KEY(coach_id) REFERENCES coach(coach_id)
);


CREATE TABLE team (
	team_id int PRIMARY KEY,
	size int NOT NULL,
	participant_id int NOT NULL,
	FOREIGN KEY (participant_id) REFERENCES participant(participant_id)
);


CREATE TABLE athlete (
	athlete_id int PRIMARY KEY,
	age int NOT NULL, 
	sex varchar(30) NOT NULL,
	weight double NOT NULL,
	height double NOT NULL,
	gold_medal_count int,
	silver_medal_count int,
	bronze_medal_count int,
	participant_id int,
	FOREIGN KEY (participant_id) REFERENCES participant(participant_id),
	FOREIGN KEY (gold_medal_count, silver_medal_count, bronze_medal_count) REFERENCES medalcount(gold_medal_count, silver_medal_count, bronze_medal_count),
	CONSTRAINT check_sex_athlete CHECK (sex IN ('Male', 'Female', 'Others', 'N/A')),
	CONSTRAINT check_age_athlete CHECK (age >= 18 AND age <= 110)
);


CREATE TABLE sportevent (
	event_id  int PRIMARY KEY,
	name varchar(255) UNIQUE NOT NULL,
	date Date NOT NULL,
	sport_id int NOT NULL,
	FOREIGN KEY (sport_id) REFERENCES sport(sport_id)
);


CREATE TABLE partofteam(
	athlete_id int NOT NULL,
	team_id int NOT NULL,
	PRIMARY KEY(athlete_id, team_id),
	FOREIGN KEY(athlete_id) REFERENCES athlete(athlete_id),
	FOREIGN KEY(team_id) REFERENCES team(team_id)
);
	

CREATE TABLE venue (
	city varchar(25) NOT NULL,
	Street varchar(25) NOT NULL,
	zip_code varchar(25) NOT NULL,	
	name varchar(25) NOT NULL,
	PRIMARY KEY(city, street, zip_code) 
);


CREATE TABLE eventresults (
	result_id int PRIMARY KEY,
	description varchar(255) NOT NULL,
	participant_id int NOT NULL,
	event_id int NOT NULL,
	FOREIGN KEY(participant_id) REFERENCES participant(participant_id),
	FOREIGN KEY(event_id) REFERENCES sportevent(event_id),
	CONSTRAINT event_result_description CHECK (description IN ('Won', 'Lost', 'Draw', 'Disqualified', 'Qualified', 'Not Qualified', 'Withdrew', 'Not Available'))
);


CREATE TABLE participatesinevent (
	participant_id int NOT NULL,
	event_id int NOT NULL,
	PRIMARY KEY (participant_id, event_id),
	FOREIGN KEY(participant_id) REFERENCES participant(participant_id),
	FOREIGN KEY(event_id) REFERENCES sportevent(event_id)

);


CREATE TABLE user (
	user_id int PRIMARY KEY,
	login varchar(25) NOT NULL,
	password varchar(25) NOT NULL,
	permission boolean
);
