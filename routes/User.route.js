const express = require("express");
const userRouter = express.Router()
const { UserModel } = require("../models/User.model")
userRouter.get("/", async (req, res) => {
    const user = await UserModel.find()
    res.send(user)
})

userRouter.post("/create", async (req, res) => {
    const payload = req.body
    try {
        const new_user = new UserModel(payload)
        await new_user.save()
        res.send("Created the note")
    }
    catch (err) {
        console.log(err)
        res.send({ "msg": "somthing went wrong" })
    }
})

userRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const note = await UserModel.findOne({ "_id": id })
    try {
        await UserModel.findByIdAndUpdate({ "_id": id }, payload)
        res.send(`updated the user whose id is ${id}`)
    }
    catch (err) {
        console.log(err)
        res.send("err: somthing went wrong")
    }
})

userRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const note = await UserModel.findOne({ "_id": id })
    try {
        await UserModel.findByIdAndDelete({ "_id": id })
        res.send(`deleted the user whose id is ${id} `)
    }
    catch (err) {
        console.log(err)
        res.send("err: somthing went wrong")
    }
})
module.exports = { userRouter }