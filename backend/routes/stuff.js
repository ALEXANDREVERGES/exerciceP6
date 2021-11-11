const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');



//************CREER NOUVEL OBJ *********************************/
router.post('/', stuffCtrl.createThing);
//************Modifier Produit****************************** */
router.put('/:id', stuffCtrl.modifyThing);
//************Supprimer  produit  *************************************** */
router.delete('/:id', stuffCtrl.deleteThing);
//************Récupérer produit avec ID ****************************** */
router.get('/:id', stuffCtrl.getOneThing);
//************Récupérer TOUS les produits  ****************************** */
router.get('/' , stuffCtrl.getAllThings);

module.exports = router;