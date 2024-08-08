const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // Ajoutez cette ligne pour activer CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productData = [];

app.listen(2000, () => {
    console.log("Le serveur est connecté");
});

app.post("/api/add_produit", (req, res) => {
    console.log("Résultat:", req.body);

    const pdata = {
        "id": productData.length + 1,
        "pname": req.body.pname,
        "pprice": req.body.pprice,
        "pdesc": req.body.pdesc
    };

    productData.push(pdata);
    console.log("Final", pdata);

    res.status(200).json({
        "status_code": 200,
        "message": "Produit ajouté avec succès",
        "data": pdata
    });
});

app.get("/api/get_produit", (req, res) => {
    if (productData.length > 0) { 
        res.status(200).send({
            "status_code": 200,
            "produits": productData
        });
    } else {
        res.status(200).json({
            "status_code": 200,
            "produits": []
        });
    }
});

