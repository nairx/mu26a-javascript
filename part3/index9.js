function greet(name, callBack) {
    console.log(name)
    callBack()
}

greet("John", () => console.log("Good Morning"))

