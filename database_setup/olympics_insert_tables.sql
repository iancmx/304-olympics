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

INSERT INTO participant VALUES (1, 'Sophia Jones', 'United-States');
INSERT INTO participant VALUES (2, 'United-States-Voleyball-Male-Team', 'United-States');
INSERT INTO participant VALUES (3, 'Mason Miller', 'United-States');
INSERT INTO participant VALUES (4, 'Noah Brown', 'United-States');
INSERT INTO participant VALUES (5, 'Aiden Davis', 'United-States');
INSERT INTO participant VALUES (6, 'Joshua Wilson', 'United-States');
INSERT INTO participant VALUES (7, 'Liam Miller', 'United-States');
INSERT INTO participant VALUES (8, 'Andrew Smith', 'United-States');
INSERT INTO participant VALUES (9, 'Grace Wilson', 'United-States');

INSERT INTO participantsport VALUES (1, 1);
INSERT INTO participantsport VALUES (2, 3);
INSERT INTO participantsport VALUES (3, 3);
INSERT INTO participantsport VALUES (4, 3);
INSERT INTO participantsport VALUES (5, 3);
INSERT INTO participantsport VALUES (6, 3);
INSERT INTO participantsport VALUES (7, 3);
INSERT INTO participantsport VALUES (8, 3);
INSERT INTO participantsport VALUES (9, 2);


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
INSERT INTO coach VALUES (7, 'Isabella Stevenson', 48, 'Female');
INSERT INTO coach VALUES (8, 'Jessica Harris', 45, 'Female');
INSERT INTO coach VALUES (9, 'Thomas Hastings', 52, 'Male');
INSERT INTO coach VALUES (10, 'Leo Lewis', 51, 'Male');

INSERT INTO participant VALUES (10, 'Great-Britain-Voleyball-Male-Team', 'Great-Britain');
INSERT INTO participant VALUES (11, 'Hugo Adams', 'Great-Britain');
INSERT INTO participant VALUES (12, 'Leo Wilson', 'Great-Britain');
INSERT INTO participant VALUES (13, 'John Burton', 'Great-Britain');
INSERT INTO participant VALUES (14, 'Thomas Lewis', 'Great-Britain');
INSERT INTO participant VALUES (15, 'Rex Payne', 'Great-Britain');
INSERT INTO participant VALUES (16, 'Wilfred Walker', 'Great-Britain');
INSERT INTO participant VALUES (17, 'Grais Bridget', 'Great-Britain');
INSERT INTO participant VALUES (18, 'Rose Harper', 'Great-Britain');

INSERT INTO participantsport VALUES (10, 3);
INSERT INTO participantsport VALUES (11, 3);
INSERT INTO participantsport VALUES (12, 3);
INSERT INTO participantsport VALUES (13, 3);
INSERT INTO participantsport VALUES (14, 3);
INSERT INTO participantsport VALUES (15, 3);
INSERT INTO participantsport VALUES (16, 3);
INSERT INTO participantsport VALUES (17, 1);
INSERT INTO participantsport VALUES (18, 2);
INSERT INTO participantsport VALUES (14, 3);
INSERT INTO participantsport VALUES (14, 2);

INSERT INTO mentorship VALUES (10, 6);
INSERT INTO mentorship VALUES (14, 9);
INSERT INTO mentorship VALUES (14, 10);
INSERT INTO mentorship VALUES (17, 8);
INSERT INTO mentorship VALUES (18, 7);

INSERT INTO athlete VALUES(9, 35, 'Male', 78, 184, 0, 0, 0, 11);
INSERT INTO athlete VALUES(10, 33, 'Male', 68, 174, 0, 0, 0, 12);
INSERT INTO athlete VALUES(11, 29, 'Male', 85, 188, 0, 0, 0, 13);
INSERT INTO athlete VALUES(12, 29, 'Male', 68, 174, 0, 0, 0, 14);
INSERT INTO athlete VALUES(13, 30, 'Male', 73, 180, 0, 0, 0, 15);
INSERT INTO athlete VALUES(14, 33, 'Male', 75, 185, 0, 0, 0, 16);
INSERT INTO athlete VALUES(15, 25, 'Female', 65, 176, 0, 0, 0, 17);
INSERT INTO athlete VALUES(16, 21, 'Female', 55, 177, 0, 0, 0, 18);

INSERT INTO team VALUES (2, 6, 2);

INSERT INTO partofteam VALUES (9, 2);
INSERT INTO partofteam VALUES (10, 2);
INSERT INTO partofteam VALUES (11, 2);
INSERT INTO partofteam VALUES (12, 2);
INSERT INTO partofteam VALUES (13, 2);
INSERT INTO partofteam VALUES (14, 2);



INSERT INTO coach VALUES (11, 'Fai Wu', 45, 'Male');
INSERT INTO coach VALUES (12, 'Ninhong Yijun', 47, 'Female');
INSERT INTO coach VALUES (13, 'Xiurong Dan', 65, 'Female');

INSERT INTO participant VALUES (19, 'Jin Lo', 'China');
INSERT INTO participant VALUES (20, 'Lihua Hsu', 'China');
INSERT INTO participant VALUES (21, 'Tung Zhou', 'China');
INSERT INTO participant VALUES (22, 'Hop Kai-shek', 'China');
INSERT INTO participant VALUES (23, 'Daiyu Dan', 'China');
INSERT INTO participant VALUES (24, 'Renxiang Kuo', 'China');

INSERT INTO participantsport VALUES (19, 1);
INSERT INTO participantsport VALUES (20, 1);
INSERT INTO participantsport VALUES (21, 2);
INSERT INTO participantsport VALUES (22, 2);
INSERT INTO participantsport VALUES (23, 2);
INSERT INTO participantsport VALUES (24, 2);

INSERT INTO mentorship VALUES (19, 11);
INSERT INTO mentorship VALUES (20, 12);
INSERT INTO mentorship VALUES (21, 13);
INSERT INTO mentorship VALUES (22, 13);
INSERT INTO mentorship VALUES (23, 13);
INSERT INTO mentorship VALUES (24, 13);

INSERT INTO athlete VALUES(17, 25, 'Male', 70, 168, 0, 0, 0, 19);
INSERT INTO athlete VALUES(18, 27, 'Female', 55, 150, 0, 0, 0, 20);
INSERT INTO athlete VALUES(19, 26, 'Male', 75, 172, 0, 0, 0, 21);
INSERT INTO athlete VALUES(20, 21, 'Male', 70, 165, 0, 0, 0, 22);
INSERT INTO athlete VALUES(21, 22, 'Female', 57, 155, 0, 0, 0, 23);
INSERT INTO athlete VALUES(22, 23, 'Female', 56, 160, 0, 0, 0, 24);



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
