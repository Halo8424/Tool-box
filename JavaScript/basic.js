// Getting a random integer between two values, inclusive

    function randomRange(myMin, myMax) {
        return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    }

        console.log(randomRange(1,10));