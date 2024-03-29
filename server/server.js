const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 5000

app.use('/', express.static(path.join(__dirname, '../client/build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});