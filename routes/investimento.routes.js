import express from "express";
import Investimento from '../models/Investimento.js'

const investimento = express.Router();

investimento.get('/', (req, res) => {
    res.send('Rota de Investimentos');
});

investimento.post("/register", async (req, res) => {
    
    const { name, type, description, valor } = req.body;

    const alreadyExistsInvestimento = await Investimento.findOne({ where: { name } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsInvestimento) {
        return res.status(409).json({ message: "Investimento already registered!" });
    }

    const newInvestimento = new Investimento({ name, type, description, valor });
    const savedInvestimento = await newInvestimento.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Sorry! Could not register the investimento" });
    });

    if (savedInvestimento) res.json({ message: "New Investimento Registered!" });
});

investimento.get('/find', async (req, res) => {
    const investimentos = await Investimento.findAll().catch(
        (err) => {
            console.log(err)
        }
    );

    if (investimentos){
        return res.json({investimentos})
    } else {
        return null
    }
})

export default investimento;