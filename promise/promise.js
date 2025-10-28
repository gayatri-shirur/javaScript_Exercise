console.log("file is working")

const url = "https://dummyjson.com/products"

try {

    console.log("try")
    fetch(url)

} catch {
    console.log("catch")

} finally {
    console.log("finally")

}