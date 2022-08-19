const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune)

const passBcBtn = document.getElementById("willSamPassButton")

const getWillSamPass = () => {
    axios.get("http://localhost:4000/api/willSamPassThisBootcamp/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

passBcBtn.addEventListener('click', getWillSamPass)

const isEghaCoolBtn = document.getElementById("isEghaCoolButton")

const getIsEghaCool = () => {
    axios.get("http://localhost:4000/api/isEghaCool/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

isEghaCoolBtn.addEventListener('click', getIsEghaCool)

const isJaredCoolBtn = document.getElementById("isJaredCoolButton")

const getIsJaredCool = () => {
    axios.get("http://localhost:4000/api/isJaredCool/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

isJaredCoolBtn.addEventListener('click', getIsEghaCool)

const isBenCoolBtn = document.getElementById("isBenCoolButton")

const getIsBenCool = () => {
    axios.get("http://localhost:4000/api/isBenCool/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

isBenCoolBtn.addEventListener('click', getIsEghaCool)