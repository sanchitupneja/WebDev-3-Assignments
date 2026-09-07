# Smart Utility Toolkit

Lab Assignment 1 - Web Dev III (Node.js), Unit 1.
Made using only Node.js built-in modules: process, http, fs, crypto. No npm packages used.

## Files
```
smart-utility-toolkit/
├── calculator.js      -> 1. calculator using process.argv
├── app.js              -> 2. uses my custom modules
├── server.js           -> 3. http server with routes
├── fileManager.js      -> 4. create/read/update/delete a file
├── dice.js             -> 5. dice roller using crypto
├── modules/
│   ├── isEven.js         -> custom module
│   └── logger.js         -> small logger I made
└── README.md
```

## How to run

1. Calculator
```
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 10 5
node calculator.js div 10 5
```

2. Custom module demo
```
node app.js
```

3. Server
```
node server.js
```
then go to:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- anything else shows 404

4. File manager
```
node fileManager.js
```
creates test.txt, reads it, updates it, reads again, then deletes it.

5. Dice
```
node dice.js
node dice.js 5
```
rolls a dice 1-6 times using crypto module. Also saves rolls to dice-history.txt (bonus).

## What I learned
- how to take input from terminal using process.argv
- making my own module and using require() to reuse it in other files
- basic http server with if-else routing
- doing file operations with fs (write, read, append, delete)
- generating random numbers with crypto instead of Math.random
