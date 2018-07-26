// const swissRolls = {
//     flavor: "chololate",
//     shape: "cylinder",
//     packaged: "pairs",
//     calories: 430,
// }

// const oatMeal = {
//     flavor: "oat meal",
//     shape: "circle",
//     packaged: "individual",
//     calories: 330,
// }



// localStorage.setItem("Oat Meal Creme Pies", stringifiedOatMeal)
// localStorage.setItem("Swiss Rolls", stringifiedSwiss)





const createSnackCake = (name, flavor, shape, packaged, calories) => {
    const snackCake = {
        name: name,
        flavor: flavor,
        shape: shape,
        packaged: packaged,
        calories: calories
    }
    
    return snackCake
}

const cosmicBrownies = createSnackCake("Cosmic Brownies", "chocolate", "square", "individual", 280)
const swissRolls = createSnackCake("Swiss Rolls", "chololate", "cylinder", "pairs", 430)
const oatMeal = createSnackCake("Oatmeal Creme Pies", "oat meal", "circle", "individual", 330)
const snackCakes = [swissRolls, oatMeal, cosmicBrownies]


function populateDB () {
    const stringified = JSON.stringify(snackCakes)
    localStorage.setItem("Snack Cakes", stringified)
}
