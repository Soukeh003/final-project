const express = require("express");
const router = express.Router();
const Room = require("../models/room");

router.get("/getallrooms", async (req, res) => {
  // const Room = req.body.rooms
  try {
    const rooms = await Room.find();
    res.send(rooms);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.post("/getroombyid", async (req, res) => {
  const roomid = req.body.roomid;
  try {
    const room = await Room.findOne({ _id: roomid });
    res.send(room);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/addroom", async (req, res) => {
  const newroom = new Room(req.body);
  try {
    const room = await newroom.save([]);
    res.send("New room added");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Room.deleteOne({_id: req.params.id})
    res.status(200).send({message: "Room deleted"});
  } catch (error) {
    return res.status(400).json({ error });
  }
})

module.exports = router;
