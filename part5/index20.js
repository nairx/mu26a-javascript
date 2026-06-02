function getMoney() {
    return new Promise((resolve, reject) => {
        // resolve(5000)
        reject("Cannot give money")
    })

}
function buyIcecream(amount) {
    console.log("Icecream bought using ", amount)
}
async function main() {
    try {
        const result = await getMoney()
        buyIcecream(result)
    }
    catch (err) {
        console.log(err)
    }
}

main()