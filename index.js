const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Status endpoint returning JSON response
app.get('/status', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Node.js Application is running successfully!',
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});