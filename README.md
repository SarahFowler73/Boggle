## Boggle in 4 Hours Project

This project was started from opening the prompt, which was to create a web-based boggle game, to delivery of the working url in 4 hours. Because of this constraint, there are some decisions that were made for expediency's sake, rather than in the interest of good design. This includes things like inline styles instead of CSS files, sparse use of comments, hard-coded API key (eep!), inclusion of unit tests, code organization and cleanliness, removal of unneeded boilerplate, and making the game look more attractive with a better UI. In addition, there are things that would make the boggle game itself better, such as having a more realistic alphabet distribution in the board (e.g. including "Qu" as its own square, and having more vowels included). 

This makes use of create react app, and the Words api https://www.wordsapi.com/

_Note that the API key included in this project is no longer valid, so the project will not validate a user's input anymore. See the project that built on this: https://github.com/SarahFowler73/Boggle-Solver_
