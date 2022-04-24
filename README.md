# Cubchef

Cubchef is a web application that lets you find recipes based on what ingredients you have in your pantry - the recipes have been taken from bbc.co.uk, it's just a personal learning project so not aiming to make a profit with this.

Tech stack used:

- SvelteKit -> deals with the front end and API endpoints, auth controller etc.
- Node/Express -> powers the API which is being hosted somewhere else, connected to a database with all the recipes scraped from bbc.co.uk
- Prisma/PostgreSQL -> Prisma is an ORM which I used to connect PSQL to my front end and PSQL is the database used for both Cubchef and the Recipe API


If you'd like to check the site out whilst it's still in the works you can do so here:
[Cubchef Website](https://cubchef-app.herokuapp.com/)

