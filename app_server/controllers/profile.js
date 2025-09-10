const User = require('../model/user');
const Ride = require('../model/ride');

async function updateUserInfo(req, res) {
  try {
    await User.findByIdAndUpdate(req.user._id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobileNum: req.body.mobileNum,
      email: req.body.email
    });
    res.redirect('/profile');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating user information');
  }
}

async function getRideHistory(req, res) {
  try {
    if (!req.user.rides.length) {
      return res.json([]);
    }

    const rideHistory = await Promise.all(req.user.rides.map(async (rideId) => {
      const ride = await Ride.findById(rideId);
      return {
        userType: req.user._id.equals(ride.riderId) ? "Rider" : "Driver",
        meetingPoint: ride.meetingPoint + ", " + ride.area,
        date: ride.date,
        time: ride.time
      };
    }));

    res.json(rideHistory);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching ride history');
  }
}

module.exports = {
  updateUserInfo,
  getRideHistory
};
