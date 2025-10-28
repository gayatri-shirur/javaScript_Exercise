console.log("file is working")

const url = "https://dummyjson.com/products"

try {

    console.log("try")
    fetch(url)

} catch(e) {
    console.log("catch",e)

} finally {
    console.log("finally")

}