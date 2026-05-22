import express from 'express';

const app = express();




app.listen(3000, (error) => {
    if (error){
        console.error(error);
    } else 
        console.log('Server in ascolto sulla porta 3000');
    
});


export default app;