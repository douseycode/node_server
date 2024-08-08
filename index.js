const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const productData = [];

app.listen(2000,()=>{
    console.log("le server est connecté");
    
});

// post api

app.post("/api/add_produit",(req,res)=>{
    console.log("Resultat:",req.body);

    const pdata = {
        "id": productData.length+1,
        "pname": req.body.post,
        "pprice": req.body.pprice,
        "pdesc": req.body.pdesc
    };

    productData.post(pdata);
    console.log("Final",pdata);

    res.status(200).json({
        "status_code": 200,
        "message": "Produit ajouté avec succès",
        "data": pdata
    });
    
    
    
});