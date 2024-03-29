const express = require("express");
const router = express.Router();
const usrctrl = require('../controller/user-controller');
const Token = require('../middleware/token')
const uploads = require('../middleware/uploads');

router.post('/signupseller', usrctrl.signupSeller);

router.post('/loginseller', usrctrl.loginSeller);

router.post('/addproducts', Token.Seller_Verification, uploads.single('image'), usrctrl.addproducts);

router.post('/editproducts/:pid', Token.Seller_Verification, uploads.single('image'), usrctrl.editproducts);

router.post('/deleteproducts/:pid', Token.Seller_Verification, usrctrl.deleteproducts);




router.post('/signupuser', usrctrl.signupUser);

router.post('/loginuser', usrctrl.loginUser);

router.post('/Home', Token.User_Verification, usrctrl.HomePage);

router.post('/All_Products/:cat', Token.User_Verification, usrctrl.allproductsbycat);

router.post('/All_Productspasc/:cat', Token.User_Verification, usrctrl.allproductsbycatpriceasc);

router.post('/All_Productspdesc/:cat', Token.User_Verification, usrctrl.allproductsbycatpricedesc);

router.post('/Add-to-cart/:pid', Token.User_Verification, usrctrl.addtocart);

router.post('/ViewCart/', Token.User_Verification, usrctrl.viewcart);

router.post('/AddNewAddress/', Token.User_Verification, usrctrl.AddNewAddress);

router.post('/Confirm_Order/', Token.User_Verification, usrctrl.confirmorder);

module.exports = router;