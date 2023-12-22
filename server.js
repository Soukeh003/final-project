const express = require("express");

const app = express();

const dbConfig = require('./db')

const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')

app.use(express.json()) 

app.use('/api/rooms' , roomsRoute)
app.use('/api/users' , usersRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('node server started using nodemon'))
































// const express = require("express");
// const connectDB = require("./config/connectDB");
// require("dotenv").config({ path: "./config/.env" });
// const roomsRoute = require("./routes/roomsRoute");
// const usersRoute = require("./routes/usersRoute");

// const app = express();

// const router = express.Router();

// connectDB();

// app.use("/api/rooms", roomsRoute);
// app.use("/api/user", usersRoute);
// router.use(express.json());

// // // Get all Rooms
// // // http://localhost:5000/api/room
// // router.get("/room", async (req, res) => {
// //   try {
// //     const rooms = await Room.find();
// //     res.status(200).json({ message: "Rooms found", data: rooms });
// //   } catch (error) {
// //     res.status(404).json({ Error: error });
// //   }
// // });

// // // Create a new Room
// // // http://localhost:5000/api/room/new
// // router.post("/room/new", async (req, res) => {
// //   try {
// //     const { name, maxcount, phonenumber, rentperday, imageurls, currentbooking, description } = req.body;
// //     const newRoom = new Room({
// //       name,
// //       maxcount,
// //       phonenumber,
// //       rentperday,
// //       imageurls,
// //       currentbooking,
// //       description,
// //     });
// //     const savedRoom = await newRoom.save();
// //     res.status(200).json({ message: "Room created", data: savedRoom });
// //   } catch (error) {
// //     res.status(404).json({ Error: error });
// //   }
// // });

// // // Update a Room
// // // http://localhost:5000/api/room/update/:id
// // router.put("/room/update/:id", async (req, res) => {
// //   const { id } = req.params;
// //   const { name, maxcount, phonenumber, rentperday, imageurls, currentbooking, description } = req.body;
// //   try {
// //     await Room.findByIdAndUpdate(id, {
// //       $set: {
// //         name,
// //         maxcount,
// //         phonenumber,
// //         rentperday,
// //         imageurls,
// //         currentbooking,
// //         description,
// //       },
// //     });
// //     res.status(200).send({ message: "Room updated" });
// //   } catch (error) {
// //     res.status(404).send({ message: "Server error" });
// //     console.log(error);
// //   }
// // });

// // // Delete a Room
// // // http://localhost:5000/api/room/delete/:id
// // router.delete("/room/delete/:id", async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     await Room.findByIdAndDelete(id);
// //     res.status(200).send({ message: "Room deleted" });
// //   } catch (error) {
// //     res.status(404).send({ message: "Server error" });
// //     console.log(error);
// //   }
// // });


// const PORT = process.env.PORT || 5000;

// app.listen(PORT, (err) => {
//   err ? console.log(err) : console.log(`Server running on port ${PORT}`);
// });
