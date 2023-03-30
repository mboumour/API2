const express = require('express');
const { exec } = require('child_process');
const cors = require('cors'); // Importation de CORS

const app = express();
app.use(cors()); // Utilisation de CORS

app.use(express.urlencoded({ extended: true }));

app.post('/solve', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    console.log(`a = ${a}, b = ${b}`);
    
    exec(`./sum ${a} ${b}`, (error, stdout, stderr) => {
	if (error) {
	    console.error(`exec error: ${error}`);
	    return res.status(500).send("Error occurred !");
	}

	const sum = parseInt(stdout.trim());

	return res.send(`Sum : ${a} + ${b} = ${sum}`);
    });

});
    app.listen(3000, () => {
	console.log('Server listening on port 3000');
    });

    

