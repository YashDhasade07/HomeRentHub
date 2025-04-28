import express from 'express';
import cors from 'cors';

let app = express();
app.use(express.json())
app.use(cors());

app.use('/auth')
app.listen(3100,()=>{
    console.log('server connected with port 3100')
})