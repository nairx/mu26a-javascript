function getMoney() {
    return 5000
}

function buyIcecream(amount) {
    console.log("Icecream bought using ", amount)
}

function main() {
    const result = getMoney()
    buyIcecream(result)
}

main()