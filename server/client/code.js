let headers1 = new Headers();
headers1.append("Content-Type","application/json")

let token;

let user = fetch("http://localhost:3000/artisan/login",{
    method: "post",
    headers: headers1,
    body: JSON.stringify({email:"marti@aatanasov.com",password:"1"})
}).then(data => data.json()).then(data => {
    token = data["Auth-Token"]   
})

setTimeout(()=>{
    let body = {
        "name": "Elegant Diamond Necklace",
        "description": "A stunning diamond necklace crafted with 18K white gold.",
        "price": 2,
        "stock_quantity": 5,
        "image_url": "https://example.com/images/diamond_necklace.jpg",
        "artisan_id": "64b8fd12e7f6d5d2c29f4a92",
        "material": "18K white gold",
        "size": "Adjustable",
        "type": "Necklace",
        "gemstone": "Diamond",
        "weight": 2
    }
    
    let headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("Auth-Token",token);
    
    fetch("http://localhost:3000/pottery/6744d49597a319f28b4e4990",{
        method: "put",
        headers: headers,
        body: JSON.stringify(body)
    })
},3000);

