const Questions = require("../models/questionSchema.js");
const Results = require("../models/resultSchema.js");
// const questions = require('../database/data.js')
const { questions, answers } = require('../database/data.js')

/** get all questions */
 async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questinos */
async function insertQuestions(req, res){
    try {
         Questions.insertMany({ questions, answers }, )
         res.json({ msg: "Questions uploaded Successfully...!"});
    } catch (error) {
        res.json({ error })
    }
}

/** Delete all Questions */
async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
async function storeResult(req, res){
   try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        Results.create({ username, result, attempts, points, achived },) 
            res.json({ msg : "Result Saved Successfully...!"})
        

   } catch (error) {
        res.json({error})
   }
}

/** delete all result */
async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

module.exports = {getQuestions, insertQuestions, dropQuestions, getResult,
    storeResult, dropResult}