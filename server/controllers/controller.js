import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

/** Get all the questions */
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({ error });
    }
}

/** Insert all the questions */
export async function insertQuestions(req, res) {
    try {
        Questions.insertMany({ questions, answers });
        res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}

/** Delete all questions */
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Data Deleted Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}

/** Get all result */
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({ error });
    }
}

/** Post all result */
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;

        if (!username && !result) throw new Error("Data Not Provided...!");
        Results.create({ username, result, attempts, points, achieved });
        res.json({ msg: "Result Saved successfully" });
    } catch (error) {
        res.json({ error });
    }
}

/** Delete all result */
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}
