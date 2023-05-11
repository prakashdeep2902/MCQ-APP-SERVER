import { Questions } from "../models/questionSchema.js"
import { results } from "../models/resultSchema.js"
import questions, { answer } from "../database/data.js";


// *****this was for questions*********
// get all question
export async function getQuestions(req, res) {


    try {

        const q = await Questions.find();
        res.json(q)


    } catch (error) {
        res.json({})
    }
}

// insert all question
export async function insertQuestions(req, res) {
    try {
        await Questions.insertMany({ questions, answer });
        res.json({ msg: "Data saved successfully" });
    } catch (error) {
        res.json({ error });
    }
}

// delete all question
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "deleted succesfully" });
    } catch (error) {
        res.json({ error });
    }

}

// *****this was for result*********

export async function getResult(req, res) {
    try {
        const r = await results.find();
        res.json(r)
    } catch (error) {

        res.json({ error })
    }
}
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;

        if (!username && !result) {
            throw new Error('Data not provided...!');
        }
        await results.create({ username, result, attempts, points, achived });
        res.json({ msg: "Result saved successfully" });
    } catch (error) {
        res.json({ error: error.message });
    }

}

export async function dropResult(req, res) {


    try {

        await results.deleteMany();
        res.json({ msg: "result deleted succesfully" })

    } catch (error) {
        res.json({ error })
    }
}
