const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send({
        message: 'Hello from the API',
        tacos: [
            'Chicken',
            'Beef',
            'Fish',
            'Mushroom'
        ],
        burritos: [
            'Chicken',
            'Beef',
            'Pork',
            'Bean',
            'Veggie',
            "Shrimp"
        ],
    });
});

app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});