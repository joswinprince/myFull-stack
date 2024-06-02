import express from 'express';
const app = express();
app.use(express.json())
app.use(express.static('angular-app/dist/angular-app'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/api/pirates/:id', (req, res) => {
    const id = req.params.id;
    const pirate = getPirate(id);
    if(!pirate)
        {
            res.status(404).send('Pirate not found');
            
        }
        else
        {
            res.send({data:pirate});
        }
    })
    function getPirate(id) {
        const pirates = [
            {id: 1, name: 'Jack Sparrow', ship: 'Black Pearl'},
            {id: 2, name: 'Blackbeard', ship: 'Queen Anne\'s Revenge'},
            {id: 3, name: 'Captain Hook', ship: 'Jolly Roger'}
        ];
        return pirates.find(pirate => pirate.id == id);
    }
