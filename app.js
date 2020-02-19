const express = require('express');
const cors = require('cors')
const app = express();


app.use(cors());

app.get('', (req, resp) => {
    resp.send('index');
})

app.get('/help', (req, resp) => {
    resp.send('<h1>Helping you</h1>');
})


app.get('/sample', (req, resp) => {
    const data = {
        "status": "success",
        "data": [
            {
                "id": "1",
                "employee_name": "Tiger Nixon",
                "employee_salary": "320800",
                "employee_age": "61",
                "profile_image": ""
            } 
        ] 
    };
    resp.send(data);
})


app.listen(3000, () => {
    console.log('app started');
})