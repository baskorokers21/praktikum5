import express from ("express")
const bodyParser = require("bpdy-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/test", (req,res) => {
    let response = {
        message: "ini end-point pertama ku",
        method: req.methode,
        code: res.statusCode
    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("server run on port 8000")
})

app.post("/bujur_sangkar", (req,res)=>{
    let panjang = Number(req.body.panjang)
    let lebar = Number(re.body.lebar)

    let response = {
        panjang : panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})