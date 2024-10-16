const { Router } = require('express'); 

const router = Router();

router.get('/', (req, res) => {
    res.send('finAll');
});

router.get('/findByArtista', (req, res) => {
    res.send('findByArtista');
});

router.post('/insert', (req, res) => {
    res.send('insert');
});

router.post('/update', (req, res) => {
    res.send('update');
});

router.get('/deleteById', (req, res) => {
    res.send('deleteById');
});

module.exports = router;