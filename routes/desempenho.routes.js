import express from "express";
import Desempenho from '../models/Desempenho.js';
import Investimento from '../models/Investimento.js';
import User from "../models/User.js";

const desempenho = express.Router();

desempenho.get('/', (req, res) => {
    res.send('Rota de Desempenhos');
});

desempenho.post("/register", async (req, res) => {

    const { idUser, idInvestimento, comment, stars } = req.body;

    const alreadyExistsDesempenho = await Desempenho.findOne({ where: { idUser, idInvestimento } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsDesempenho) {
        return res.status(409).json({ message: "Desempenho already registered!" });
    }

    const newDesempenho = new Desempenho({ idUser, idInvestimento, comment, stars });
    const savedDesempenho = await newDesempenho.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Sorry! Could not register the Desempenho" });
    });

    if (savedDesempenho) res.json({ message: "New Desempenho Registered!" });
});

desempenho.get('/findByInvestimento', async (req, res) => {
    const idInvestimento = req.query.idInvestimento;
    const desempenhos = await Desempenho.findAll({
        where: {
            idInvestimento: idInvestimento
        },
        include: [{model: User}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (desempenhos) {
        return res.json({ desempenhos })
    } else {
        return null
    }
})

desempenho.get('/findByUser', async (req, res) => {
    const idUser = req.query.idUser;
    const desempenhos = await Desempenho.findAll({
        where: {
            idUser: idUser
        },
        include: [{model: Investimento}]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (desempenhos) {
        return res.json({ desempenhos })
    } else {
        return null
    }
})

export default desempenho;  