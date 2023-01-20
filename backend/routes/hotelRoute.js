const express = require('express');
const { getAllHotels,createHotel,updateHotel, deleteHotel ,getHotelDetails} = require('../controllers/hotelController');
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route('/hotels').get(getAllHotels)
router.route('/hotel/new').post(isAuthenticatedUser,authorizeRoles("admin"),createHotel)
router.route('/hotel/:id').put(isAuthenticatedUser,authorizeRoles("admin"), updateHotel).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteHotel).get(getHotelDetails)

module.exports = router;