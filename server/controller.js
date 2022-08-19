const games = require('./db.json')
let globalID = 11

module.exports = {
    getGame: (req, res) => {
        res.status(200).send(games)
    },
    deleteGame: (req, res) => {
        let index = games.findIndex((movie) => {
            return games.id === +req.params.id
        })
        movies.splice(index, 1)
        res.status(200).send(games)
    },
    createGame: (req, res) => {
        let {title, rating, imageURL} = req.body

        let newGame = {
            id: globalID, 
            title,
            rating,
            imageURL
        }
        games.push(newGame)
        res.status(200).send(games)
        globalID++
    },
    updateGame: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = games.findIndex((game) => {
        return +game.id === +id
        })
        if (games[index].rating === 5 && type === "plus") {
            res.status(400).send("cannot go above 5");
          } else if (games[index].rating === 0 && type === "minus") {
            res.status(400).send("cannot go below 0");
          } else if (type === "plus") {
            games[index].rating++;
            res.status(200).send(games);
          } else if (type === "minus") {
            games[index].rating--;
            res.status(200).send(games);
          } else {
            res.sendStatus(400);
          }
        },

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["You will become very successful", "You will come across a great fortune", "You will find your soulmate", "You will go to space", "You will run into a bear"]

        let randomIndex = Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex]

        res.status(200).send(randomFortune)
    },

    getWillSamPassThisBootcamp: (req, res) => {
        const passBc = ["yes", "Yes", "YES", "YES!", "YEEEEEEEEEEEEEESSSSSSSSSSSSSSSS!!!!!!!!!!"]

        let randomIndex = Math.floor(Math.random() * passBc.length)
        let randomPassBc = passBc[randomIndex]

        res.status(200).send(randomPassBc)
    },

    getIsEghaCool: (req, res) => {
        const isEghaCool = ["YES!", "YES!!", "SO COOL!"]

        let randomIndex = Math.floor(Math.random() * isEghaCool.length)
        let randomIsEghaCool = isEghaCool[randomIndex]

        res.status(200).send(randomIsEghaCool)
    }
}