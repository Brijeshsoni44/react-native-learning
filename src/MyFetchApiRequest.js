export const myPostRequest = async (data) =>{
    const response = await fetch('https://dummyjson.com/products/add',{
        method:'POST',
        body:JSON.stringify(data),
        headers: {'Content-Type':'application/json'},
       

    })
}