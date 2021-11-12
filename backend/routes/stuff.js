const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

const auth = require('../middleware/auth');

//************CREER NOUVEL OBJ *********************************/
router.post('/', auth, stuffCtrl.createThing);
//************Modifier Produit****************************** */
router.put('/:id', auth, stuffCtrl.modifyThing);
//************Supprimer  produit  *************************************** */
router.delete('/:id', auth, stuffCtrl.deleteThing);
//************Récupérer produit avec ID ****************************** */
router.get('/:id', auth, stuffCtrl.getOneThing);
//************Récupérer TOUS les produits  ****************************** */
router.get('/' , auth, stuffCtrl.getAllThings);

module.exports = router;
