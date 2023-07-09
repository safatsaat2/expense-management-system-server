const transectionModel = require("../models/transectionModel");
const moment = require("moment")

const getTransection = async (req, res)=>{
    try {
        const {frequency, selectedDate } = req.body;
        const transections = await transectionModel.find({

            ...(frequency !== "custom" ? {
                date:{
                    $gt: moment().subtract(Number(frequency), 'd').toDate(),
                },
            } : {
                date:{
                    $gte: selectedDate[0],
                    $lte: selectedDate[1],
                }
            }),
            userid:req.body.userid})
        res.status(200).json(transections);
    } catch (error) {
        res.status(500).json(error)
    }

}

const addTransection = async(req, res)=>{
        try {
            const newTransection = new transectionModel(req.body);
            await newTransection.save()
            res.status(201).send("transection successfully created")
        } catch (error) {
            res.status(500).json(error)
        }
}

module.exports = {getTransection, addTransection}