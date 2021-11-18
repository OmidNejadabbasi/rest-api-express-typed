import express from 'express'
const config = require('config');

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.listen(port, host, () => {
    console.log("Server listening on http://${host}:${port}");
})