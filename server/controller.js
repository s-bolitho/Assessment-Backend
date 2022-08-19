module.exports = {

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