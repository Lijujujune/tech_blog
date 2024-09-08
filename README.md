# Tech Blog

Description

Tech Blog is a CMS-style blog site where users can publish articles, blog posts, and thoughts on tech topics. The platform allows users to sign up, create an account, log in, and interact with the platform by creating, editing, and deleting blog posts. Authenticated users can also comment on other users’ posts.

This project utilizes Node.js, Express, Sequelize, and Handlebars for the backend and frontend functionality, along with MySQL for the database. The project follows the Model-View-Controller (MVC) paradigm, with authentication provided via Express Sessions and bcrypt for secure password storage.


Usage

	•	Sign up for an account or log in if you already have one.
	•	Once logged in, you can create, update, or delete your own blog posts.
	•	You can also comment on other users’ posts.
	•	To log out, simply click the “Logout” button in the navigation.

Technologies

	•	Node.js - JavaScript runtime environment.
	•	Express.js - Web framework for Node.js.
	•	Sequelize - ORM for working with SQL databases.
	•	MySQL - Database used for data storage.
	•	Handlebars.js - Template engine for rendering HTML views.
	•	bcrypt - Library for hashing passwords.
	•	Express Sessions - Middleware for handling user sessions and authentication.
	•	dotenv - Environment variable management.

Features

	•	User Authentication: Users can sign up, log in, and log out. Passwords are securely hashed using bcrypt.
	•	Blog Posts: Authenticated users can create, update, and delete their own blog posts.
	•	Commenting: Users can comment on blog posts. Comments display the username of the commenter.
	•	Session Timeout: If a user is idle for too long, they will be automatically logged out for security reasons.

License

This project is licensed under the MIT License. See the LICENSE file for details.