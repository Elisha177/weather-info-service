const express = require('express');
const path = require('path');
const weatherRouter = require('./routes/weather');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use('/api/weather', weatherRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
