# Workshop - Servers

## Task 1 - Get it working

There is some code needed to get the application running. When the server is working, you should see a website at http://localhost:5000

You should then proceed to add functionality so that you can get the data as needed for the front-end [(index.html)](./views/index.html). You shouldn't change the front-end yet - instead you should figure out how to build a back-end that fits with it's needs.

You will need to allow the front-end to get the data, and add to it.

## Task 2 - Get it in a DB

Refactor your code, and change the data side of things to interact with a database instead of with the given array (which you should use as the seed data for your database). This will mean that the data is now persistant, meaning you can restart your server and all the newly created recipes will still be there rather than disappearing.

Create a Postgres DB on Heroku, connect to it, and then interact with it through SQL queries to allow all the same functionality as you had previously.

## Task 3 - Improve it

OK - now just make it better... you can start styling the front end, adding functionality to both the front-end and back-end, and thinking of things like validation, user messages, and more... go wild!
