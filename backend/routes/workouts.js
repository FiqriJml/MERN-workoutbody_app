const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>{
    res.json({msg: "get all of workouts"})
})
router.get('/:id', (req, res) =>{
    res.json({msg: "get a file of workouts"})
})
router.post('/', (req, res) =>{
    res.json({msg: "add workout"})
})
router.patch('/:id', (req, res) =>{
    res.json({msg: "update a workouts"})
})
router.delete('/:id', (req, res) =>{
    res.json({msg: "delete a workouts"})
})


module.exports = router