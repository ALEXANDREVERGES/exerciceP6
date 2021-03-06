const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
//************CREER NOUVEL OBJ *********************************/
router.post('/', auth, multer, stuffCtrl.createThing);
//************Modifier Produit****************************** */
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
//************Supprimer  produit  *************************************** */
router.delete('/:id', auth, stuffCtrl.deleteThing);
//************Récupérer produit avec ID ****************************** */
router.get('/:id', auth, stuffCtrl.getOneThing);
//************Récupérer TOUS les produits  ****************************** */
router.get('/' , auth, stuffCtrl.getAllThings);

module.exports = router;
