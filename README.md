# word-bomb

Goals:

- To have a quick game of guessing-the-word with up to 4 players.
- To build a web application without a page refresh.

Frustrations:

- Getting the layout of the game right to render all assets correctly.
- Coding the flow of the game correctly as many elements (timers, button presses, word guesses) can happen quickly.

ERD: https://github.com/kennethongcs/word-bomb/blob/master/Word%20Bomb.pdf

Screenshots of the game:
- Login page: https://github.com/kennethongcs/word-bomb/blob/master/game-screenshots/login-screen.jpg
- Game start page: https://github.com/kennethongcs/word-bomb/blob/master/game-screenshots/starting-page.jpg
- Settings pane: https://github.com/kennethongcs/word-bomb/blob/master/game-screenshots/settings-pane.jpg
- Game playing: https://github.com/kennethongcs/word-bomb/blob/master/game-screenshots/game-page.jpg

Technologies used:
- Javascript
- Express JS
- AJAX
- HTML
- CSS

Instructions to set-up:
1. npm i
2. start postgresql
3. npx sequelize db:create
4. npx sequelize db:migrate
5. npx sequelize db:seed:all
6. node index.mjs
7. navigate to http://localhost:3004
8. Log in using (user: test1@gmail.com), (pass: hello1234) to play the game!
