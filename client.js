const fs = require("fs");
const axios = require("axios");

// const WORKER_URL = "https://idella-aboral-semimythically.ngrok-free.dev/public";
const WORKER_URL = "http://localhost:3000";

const BATCH_SIZE = 1000;

async function run() 
{
    const lines = fs.readFileSync("lista.txt", "utf-8")
    .split("\n");
    // .filter(l => l.trim() !== "");

    console.log("Total linhas:", lines.length);

    for (let i = 0; i < lines.length; i += BATCH_SIZE) 
    {


        const batch = lines.slice(i, i + BATCH_SIZE);
        
        const instruction = Math.random() > 0.5
            ? "uppercase"
            : "base64";

        try {

            const response = await axios.post(WORKER_URL, {
                instruction: instruction,
                batch: batch
            });

            console.log(`\nLote ${i/BATCH_SIZE} processado: `);
            console.log(response.data.processed);

        } catch (err) {

            console.log("Erro no envio:", err.message);

        }

    }

}

run();