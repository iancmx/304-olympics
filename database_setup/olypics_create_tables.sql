drop table if exists medal_count cascade;
drop table if exists countrymedal cascade;
drop table if exists sport cascade;
drop table if exists coach cascade;
drop table if exists participant cascade;
drop table if exists mentorship cascade;
drop table if exists team cascade;
drop table if exists nationalitycolor cascade;
drop table if exists athlete cascade;
drop table if exists sportevent cascade;
drop table if exists partofteam cascade;
drop table if exists venue cascade;
drop table if exists eventresults cascade;
drop table if exists participatesinevent cascade;
drop table if exists user cascade;

CREATE TABLE medal_count (
	gold_medal_count int NOT NULL,
	silver_medal_count int NOT NULL,
	bronze_medal_count int NOT NULL,
	total_medal_count int NOT NULL,
	PRIMARY KEY(gold_medal_count, silver_medal_count, bronze_medal_count),
	CONSTRAINT positive_count CHECK (gold_medal_count >= 0 AND silver_medal_count >= 0 AND bronze_medal_count >= 0 AND total_medal_count >= 0),
	CONSTRAINT sum_correct CHECK (gold_medal_countmy + silver_medal_count + bronze_medal_count = total_medal_count)
);
grant select on medal_count to public;

CREATE TABLE countrymedal (
	country_name varchar (255) PRIMARY KEY,
	gold_medal_count int NOT NULL,
	silver_medal_count int NOT NULL,
	bronze_medal_count int NOT NULL,
	FOREIGN KEY (gold_medal_count) REFERENCES medal_count(gold_medal_count),
	FOREIGN KEY (silver_medal_count) REFERENCES medal_count(silver_medal_count),
	FOREIGN KEY (bronze_medal_count) REFERENCES medal_count(bronze_medal_count)
);
grant select on countrymedal to public;


CREATE TABLE sport (
	sport_id int PRIMARY KEY,
	name varchar(255) NOT NULL
);
grant select on sport to public;

CREATE TABLE coach (
	coach_id int PRIMARY KEY,
	age int NOT NULL,
	name varchar(255) NOT NULL,
	sex varchar(30) NOT NULL,
	CONSTRAINT check_sex_coach CHECK (sex IN ('Male', 'Female', 'Others', 'N/A')),
	CONSTRAINT check_age_coach CHECK (age >= 18 AND age <= 110)
);
grant select on coach to public;

CREATE TABLE participant (
	participant_id int PRIMARY KEY,
	name varchar(255) NOT NULL,
	sport_id int NOT NULL,
	country varchar (255),
	FOREIGN KEY (country) REFERENCES countrymedal(country_name),
	FOREIGN KEY (sport_id) REFERENCES sport(sport_id),
); 
grant select on participant to public;

CREATE TABLE mentorship(
	participant_id int NOT NULL,
	coach_id int NOT NULL,
	PRIMARY KEY (participant_id, coach_id),
	FOREIGN KEY(participant_id) REFERENCES participant(participant_id),
	FOREIGN KEY(coach_id) REFERENCES coach(coach_id)
);
grant select on mentorship to public;

CREATE TABLE team (
	team_id int PRIMARY KEY,
	nationality	varchar(30),
	size int NOT NULL,
	participant_id int NOT NULL,
	FOREIGN KEY (participant_id) REFERENCES participant(participant_id)
	FOREIGN KEY (nationality) REFERENCES participant(country)
);
grant select on team to public;

CREATE TABLE nationalitycolor (
	nationality varchar(30) PRIMARY KEY,
	colour  varchar(30),
	FOREIGN KEY (nationality) REFERENCES participant(country)
);
grant select on nationalitycolor to public;

CREATE TABLE athlete (
	athlete_id int PRIMARY KEY,
	age int NOT NULL, 
	sex varchar(30) NOT NULL,
	weight double NOT NULL,
	height double NOT NULL,
	gold_medal_count int,
	silver_medal_count int,
	bronze_medal_count,
	participant_id int,
	FOREIGN KEY (participant_id) REFERENCES participant(participant_id),
	FOREIGN KEY (gold_medal_count) REFERENCES medal_count(gold_medal_count),
	FOREIGN KEY (silver_medal_count) REFERENCES medal_count(silver_medal_count),
	FOREIGN KEY (bronze_medal_count) REFERENCES medal_count(bronze_medal_count),
	CONSTRAINT check_sex_athlete CHECK (sex IN ('Male', 'Female', 'Others', 'N/A')),
	CONSTRAINT check_age_athlete CHECK (age >= 18 AND age <= 110)
);
grant select on athlete to public;

CREATE TABLE sportevent (
	event_id  int PRIMARY KEY
	name varchar(255) UNIQUE NOT NULL,
	date Date NOT NULL,
	sport_id int NOT NULL,
	FOREIGN KEY (sport_id) REFERENCES sport(sport_id)
);
grant select on sportevent to public;

CREATE TABLE partofteam(
	athlete_id int NOT NULL,
	team_id int NOT NULL,
	PRIMARY KEY(athlete_id, team_id),
	FOREIGN KEY(athlete_id) REFERENCES athlete(athlete_id),
	FOREIGN KEY(team) REFERENCES team(team_id)
);
grant select on partofteam to public;	

CREATE TABLE venue (
	city varchar(25) NOT NULL,
	Street varchar(25) NOT NULL,
	zip_code varchar(25) NOT NULL,	
	name varchar(25) NOT NULL,
	PRIMARY KEY(city, street, zip_code) 
);
grant select on venue to public;

CREATE TABLE eventresults (
	result_id int PRIMARY KEY,
	description varchar(255) NOT NULL,
	participant_id int NOT NULL,
	event_id varchar(25) NOT NULL,
	FOREIGN KEY(participant_id) REFERENCES participant(participant_id),
	FOREIGN KEY(event_id) REFERENCES event(event_id)
	CONSTRAINT event_description CHECK (description IN ('Won', 'Lost', 'Draw', 'Disqualified', 'Qualified', 'Not Qualified', 'Withdrew', 'Not Available'))

);
grant select on eventresults to public;

CREATE TABLE participatesinevent (
	participant_id int NOT NULL,
	event_id int NOT NULL,
	PRIMARY KEY (participant_id, event_id),
	FOREIGN KEY(participant_id) REFERENCES participant(participant_id),
	FOREIGN KEY(event_id) REFERENCES event(event_id)

);
grant select on participatesinevent to public;

CREATE TABLE user (
	user_id int PRIMARY KEY,
	login varchar(25) NOT NULL,
	password varchar(25) NOT NULL,
	permission boolean
);
grant select on user to public;