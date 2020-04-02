INSERT INTO medalcount VALUES (0, 0, 0, 0);
INSERT INTO medalcount VALUES (0, 0, 1, 1);
INSERT INTO medalcount VALUES (0, 0, 2, 2);
INSERT INTO medalcount VALUES (0, 1, 0, 1);
INSERT INTO medalcount VALUES (0, 1, 1, 2);
INSERT INTO medalcount VALUES (0, 1, 2, 3);
INSERT INTO medalcount VALUES (0, 2, 0, 2);
INSERT INTO medalcount VALUES (0, 2, 1, 3);
INSERT INTO medalcount VALUES (0, 2, 2, 4);
INSERT INTO medalcount VALUES (1, 0, 0, 1);
INSERT INTO medalcount VALUES (1, 0, 1, 2);
INSERT INTO medalcount VALUES (1, 0, 2, 3);
INSERT INTO medalcount VALUES (1, 1, 0, 2);
INSERT INTO medalcount VALUES (1, 1, 1, 3);
INSERT INTO medalcount VALUES (1, 1, 2, 4);
INSERT INTO medalcount VALUES (1, 2, 0, 3);
INSERT INTO medalcount VALUES (1, 2, 1, 4);
INSERT INTO medalcount VALUES (1, 2, 2, 5);
INSERT INTO medalcount VALUES (2, 0, 0, 2);
INSERT INTO medalcount VALUES (2, 0, 1, 3);
INSERT INTO medalcount VALUES (2, 0, 2, 4);
INSERT INTO medalcount VALUES (2, 1, 0, 3);
INSERT INTO medalcount VALUES (2, 1, 1, 4);
INSERT INTO medalcount VALUES (2, 1, 2, 5);
INSERT INTO medalcount VALUES (2, 2, 0, 4);
INSERT INTO medalcount VALUES (2, 2, 1, 5);
INSERT INTO medalcount VALUES (2, 2, 2, 6);

INSERT INTO countrymedal VALUES ('United-States', 2, 2, 2);
INSERT INTO countrymedal VALUES ('Great-Britain', 1, 2, 2);
INSERT INTO countrymedal VALUES ('China', 1, 2, 1);
INSERT INTO countrymedal VALUES ('Russia', 1, 1, 2);
INSERT INTO countrymedal VALUES ('Germany', 1, 0, 1);

INSERT INTO nationalitycolor VALUES ('United-States', 2, 136, 209);
INSERT INTO nationalitycolor VALUES ('Great-Britain', 13, 71, 161);
INSERT INTO nationalitycolor VALUES ('China', 255, 23, 68);
INSERT INTO nationalitycolor VALUES ('Russia', 211, 47, 47);
INSERT INTO nationalitycolor VALUES ('Germany', 251, 192, 45);

INSERT INTO sport VALUES (1, 'Boxing');
INSERT INTO sport VALUES (2, 'Swimming');
INSERT INTO sport VALUES (3, 'Volleyball');

INSERT INTO coach VALUES (1, 'William Smith', 45, 'Male');
INSERT INTO coach VALUES (2, 'Jacob Davis', 50, 'Male');
INSERT INTO coach VALUES (3, 'Eva Jones', 45, 'Female');

INSERT INTO participant VALUES (1, 'Sophia Jones', 1, 'United-States');
INSERT INTO participant VALUES (2, 'United-States-Voleyball-Male-Team', 3, 'United-States');
INSERT INTO participant VALUES (3, 'Mason Miller', 3, 'United-States');
INSERT INTO participant VALUES (4, 'Noah Brown', 3, 'United-States');
INSERT INTO participant VALUES (5, 'Aiden Davis', 3, 'United-States');
INSERT INTO participant VALUES (6, 'Joshua Wilson', 3, 'United-States');
INSERT INTO participant VALUES (7, 'Liam Miller', 3, 'United-States');
INSERT INTO participant VALUES (8, 'Andrew Smith', 3, 'United-States');
INSERT INTO participant VALUES (9, 'Grace Wilson', 2, 'United-States');

INSERT INTO mentorship VALUES (1, 1);
INSERT INTO mentorship VALUES (2, 2);
INSERT INTO mentorship VALUES (9, 3);

INSERT INTO athlete VALUES(1, 25, 'Female', 56, 180, 0, 0, 0, 1);
INSERT INTO athlete VALUES(2, 29, 'Male', 75, 181, 0, 0, 0, 3);
INSERT INTO athlete VALUES(3, 30, 'Male', 78, 185, 0, 0, 0, 4);
INSERT INTO athlete VALUES(4, 32, 'Male', 68, 175, 0, 0, 0, 5);
INSERT INTO athlete VALUES(5, 28, 'Male', 85, 190, 0, 0, 0, 6);
INSERT INTO athlete VALUES(6, 27, 'Male', 68, 176, 0, 0, 0, 7);
INSERT INTO athlete VALUES(7, 31, 'Male', 73, 182, 0, 0, 0, 8);
INSERT INTO athlete VALUES(8, 27, 'Female', 55, 177, 0, 0, 0, 9);

INSERT INTO team VALUES (1, 6, 2);

INSERT INTO partofteam VALUES (2, 1);
INSERT INTO partofteam VALUES (3, 1);
INSERT INTO partofteam VALUES (4, 1);
INSERT INTO partofteam VALUES (5, 1);
INSERT INTO partofteam VALUES (6, 1);
INSERT INTO partofteam VALUES (7, 1);

INSERT INTO coach VALUES (6, 'Albert Robinson', 50, 'Male');

INSERT INTO participant VALUES (10, 'Great-Britain-Voleyball-Male-Team', 3, 'Great-Britain');
INSERT INTO participant VALUES (11, 'Hugo Adams', 3, 'Great-Britain');
INSERT INTO participant VALUES (12, 'Leo Wilson', 3, 'Great-Britain');
INSERT INTO participant VALUES (13, 'John Burton', 3, 'Great-Britain');
INSERT INTO participant VALUES (14, 'Thomas Lewis', 3, 'Great-Britain');
INSERT INTO participant VALUES (15, 'Rex Payne', 3, 'Great-Britain');
INSERT INTO participant VALUES (16, 'Wilfred Walker', 3, 'Great-Britain');

INSERT INTO mentorship VALUES (10, 6);

INSERT INTO athlete VALUES(9, 35, 'Male', 78, 184, 0, 0, 0, 11);
INSERT INTO athlete VALUES(10, 33, 'Male', 68, 174, 0, 0, 0, 12);
INSERT INTO athlete VALUES(11, 29, 'Male', 85, 188, 0, 0, 0, 13);
INSERT INTO athlete VALUES(12, 29, 'Male', 68, 174, 0, 0, 0, 14);
INSERT INTO athlete VALUES(13, 30, 'Male', 73, 180, 0, 0, 0, 15);
INSERT INTO athlete VALUES(14, 33, 'Male', 75, 185, 0, 0, 0, 16);

INSERT INTO team VALUES (2, 6, 2);

INSERT INTO partofteam VALUES (9, 2);
INSERT INTO partofteam VALUES (10, 2);
INSERT INTO partofteam VALUES (11, 2);
INSERT INTO partofteam VALUES (12, 2);
INSERT INTO partofteam VALUES (13, 2);
INSERT INTO partofteam VALUES (14, 2);

INSERT INTO sportevent VALUES (1, 'Volleyball-Group-Match-1-US-VS-GBR', '2020-08-01', 2);

INSERT INTO venue VALUES ('Vancouver', '2525-Lower-Mall', 'V6T-1Z4', 'MD-Volleball-Stadium');

INSERT INTO eventvenue VALUES ('Vancouver', '2525-Lower-Mall', 'V6T-1Z4', 1);

INSERT INTO participatesinevent VALUES (2, 1, 'Not Available');
INSERT INTO participatesinevent VALUES (10, 1, 'Not Available');

INSERT INTO user VALUES (1, 'khatung', '123456', TRUE);
INSERT INTO user VALUES (2, 'iancmx', '123456', TRUE);
INSERT INTO user VALUES (3, 'yasardh', '123456', TRUE);
INSERT INTO user VALUES (4, 'guest-1', '123456', FALSE);
INSERT INTO user VALUES (5, 'guest-2', '123456', FALSE);
