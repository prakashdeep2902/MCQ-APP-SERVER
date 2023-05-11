
import { Router } from "express"
import {getQuestions,insertQuestions,dropQuestions,getResult,storeResult,dropResult} from "../controllers/controller.js";

const router=Router();

// Questions routes 

router.get('/questions',getQuestions)
router.post('/questions',insertQuestions)
router.delete('/questions',dropQuestions)



// result routes
router.get('/result',getResult)
router.post('/result',storeResult)
router.delete('/result',dropResult)




export default router;