const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uids = new Set();

const generateUID = () => {
    let uid;
    do {
        uid = '';
        for (let i = 0; i < 16; i++) {
            uid += Math.floor(Math.random() * 10).toString();
        }
    } while (uids.has(uid));
    uids.add(uid);
    return uid;
};

app.post('/generate-uid', (req, res) => {
    const uid = generateUID();
    res.json({ uid });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
