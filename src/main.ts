import express from "express";
import {port} from "./config";

/**
 *
 *  Create express app here
 *
 */
const app = express();

app.get('/', (req, res) => {
    res.json({
        name: 'Ambroise BAZIE'
    })
})

app.listen(port, () => {
    console.log(`Application is running on port ${port} \n url: http://localhost:${port}`)
})
