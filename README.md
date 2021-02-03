Instaclone is a social media application modeled on [Instagram](https://instagram.com) built using React, Flask, PostgreSQL and SQLAlchemy. It currently supports image uploading, photo feed, follows, likes, and comments.

## Demo

Here is a working live demo: [Demo](https://instaclone-group.herokuapp.com/)

## Dependencies

#### Backend

-   Flask
-   SQLAlchemy
-   WTForms
-   Flask Login
-   Flask JWT
-   boto3
-   awscli
-   Werkzeug
-   Psycopg2
-   alembic

#### Frontend

-   React
-   React Router DOM
-   Bootstrap Icons
-   Font Awesome Icons
-   Styled Components
-   React Particles
-   HTTP Proxy Middleware

## Application Architecture

Instaclone's backend was built using Flask for Python. The server has a RESTful API layer for all CRUD actions. It is connected to a PostgreSQL database which leverages the SQLAlchemy ORM for information retrieval and data manipulation. The frontend was built using React and Hooks, and uses built-in context and prop-threading for client storage and global state management. All ougoing client requests are proxied to Flask server.

## Features

### Minimum Viable Product

-   Authentication
-   Post (CRUD)
-   Photo Feed
-   Profiles
-   Follows
-   Likes
-   Comments

### Future Features

-   User Search

## Database Schema

<img src="https://insta-group-project.s3.amazonaws.com/database-schema.png"/>

## Usage

### Development

Want to contribute?

To fix a bug or add a feature, follow these steps:

- Fork the repository
- Create a new branch with `git checkout -b feature-branch-name`
- Make appropriate changes to the files and push back to github
- Create a Pull Request
   - Use a clear and descriptive title for the issue to identify the suggestion.
   - Include any relevant issue numbers in the PR body, not the title.
   - Provide a comprehensive description of all changes made.

--------------------------------------------------------
## Team

| [Chris Resnick](https://github.com/) | [Elijah Hubbard](https://github.com/) | [Daniel Tillero](https://github.com/gardensgreen) | [Ezra Pinsky](https://github.com/) |
|-|-|-|-|


