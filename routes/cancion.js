const { Router } = require('express'); 
const { findAllController, findByArtistaController, insertController, updateController, deleteByIdController, preInsertController, preUpdateController } = require('../controllers/cancion');

const router = Router();

router.get('/', findAllController);

router.get('/findByArtista', findByArtistaController);

router.post('/insert', insertController);

router.put('/update', updateController);

router.delete('/deleteById', deleteByIdController);

module.exports = router;