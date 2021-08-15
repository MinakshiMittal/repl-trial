const getReady = () => {
    setTimeout(() = >{
        console.log("Wake up")
        setTimeout(() => {
            console.log("Brush your teeth")
            setTimeout(() => {
                console.log("Take a bath")
                setTimeout(() => {
                    console.log("Wear uniform")
                    setTimeout(() => {
                        console.log(`Have breakfast`);
                        setTimeout(() => {
                            console.log("Wear shoes");
                            setTimeout(() => {
                                console.log("Leave the house");
                            }, 1000)
                        }, 2000)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 1000)
    }, 1000)
}

getReady();

// Result
// Wake up
// Brush your teeth
// Take a bath
// Wear uniform
// Have breakfast
// Wear shoes
// Leave the house
