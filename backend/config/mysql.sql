create database zummit;

use zummit;

CREATE TABLE patient (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    history TEXT
);

INSERT INTO patient (name, email, phone, password, history) VALUES
('John Doe', 'john.doe@example.com', '555-1234', 'password123', 'No significant medical history'),
('Jane Smith', NULL, '555-5678', 'password456', 'Allergies: peanuts');


CREATE TABLE therapist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    experience INT,
    languages VARCHAR(255),
    expertise VARCHAR(255),
    details TEXT
);

INSERT INTO therapist (name, username, password, experience, languages, expertise, details) VALUES
('Dr. Smith', 'drsmith', 'password123', 10, 'English, Spanish', 'Depression, Anxiety', 'Licensed psychologist with a focus on cognitive-behavioral therapy.'),
('Jane Doe', 'janedoe', 'password456', 5, 'English', 'Relationship counseling', 'Experienced counselor specializing in couples therapy.'),
('John Smith', 'johnsmith', 'password789', NULL, 'English', NULL, 'New therapist eager to help clients achieve their goals.'),
('Alice Johnson', 'alicej', 'passwordabc', 15, 'English, French', 'Trauma therapy', 'Experienced in working with survivors of trauma.'),
('David Brown', 'davidb', 'passworddef', 8, 'English, German', 'Addiction counseling', 'Helping individuals overcome addiction.');

CREATE TABLE booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    therapist_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    booking_datetime DATETIME NOT NULL,
    duration INT NOT NULL,
    type VARCHAR(255),
    status ENUM('upcoming', 'cancelled', 'completed') NOT NULL,
    reason TEXT,
    FOREIGN KEY (patient_id) REFERENCES patient(id),
    FOREIGN KEY (therapist_id) REFERENCES therapist(id)
);

INSERT INTO booking (patient_id, therapist_id, amount, booking_datetime, duration, type, status, reason) VALUES
(1, 1, 2000.00, '2024-05-15 10:00:00', 60, 'Initial consultation', 'upcoming', NULL),
(2, 3, 1500.00, '2024-05-16 15:30:00', 45, 'Follow-up session', 'completed', NULL);


CREATE TABLE available_slots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    therapist_id INT NOT NULL,
    slot_datetime DATETIME NOT NULL,
    duration INT NOT NULL,
    type VARCHAR(255),
    FOREIGN KEY (therapist_id) REFERENCES therapist(id)
);


ALTER TABLE available_slots
MODIFY COLUMN duration INT NOT NULL DEFAULT 1;

INSERT INTO available_slots (therapist_id, slot_datetime, duration, type) VALUES
(1, '2024-05-15 09:00:00', 1, 'Example Type A'),
(2, '2024-05-16 10:00:00', 1, 'Example Type B'),
(1, '2024-05-17 11:00:00', 1, 'Example Type A'),
(3, '2024-05-18 12:00:00', 1, 'Example Type C'),
(2, '2024-05-19 13:00:00', 1, 'Example Type B');



