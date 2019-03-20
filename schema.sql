/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to execute the queries in this file.
 */

CREATE DATABASE IF NOT EXISTS grocery_list;

USE grocery_list;

CREATE TABLE groceries (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(50) NOT NULL,
  quantity varchar(20) NOT NULL
);

INSERT INTO groceries (name, quantity) VALUES ('eggs', 12);