const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
    try {
        const { url } = req.body; 
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching HTML:', error.message);
        res.status(500).send('Error fetching HTML');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});