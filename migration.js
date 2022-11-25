import connection from "./config/db.js";
import Investimento from "./models/Investimento.js";
import Desempenho from "./models/Desempenho.js";
import User from "./models/User.js";

const migrate = async () => {
    try {
        const result = await connection.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

migrate();