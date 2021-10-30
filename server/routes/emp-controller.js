const express = require('express');
const mongoose = require('mongoose');
const Employee = require('../models/emp-model');

const empRouter = express.Router();

// get all employees
empRouter.route('/', async (req, res) => {
    try {
        const employees = await Employee.find({});
        return res.status(200).json({
            employees
        })
    } catch (error) {
        return res.status(404).json({message: err});
    }
});

// get one employee
empRouter.route('/:id', async (req, res) => {
    try {
        const employee = await Employee.findOne(req.params.id);
        if(!employee) {
            return res.status(404).json({message: 'employee not found'});
        }
        return res.status(200).json({
            employee
        })
    } catch (error) {
        return res.status(404).json({message: err});
    }
});

// create an employee
empRouter.route('/', async (req, res) => {
    try {

        const { name, position, level } = req.body;
        const newEmployee = new Employee(name, position, level);
        await newEmployee.save();
        return res.status(201).json({newEmployee});
        
    } catch (error) {
        return res.status(500).json({message: err});
    }
});

// edit an employee
empRouter.route('/:id', async (req, res) => {
    try {
        const editedEmployee = await editedEmployee.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            {new: true}
        ).exec();
        return res.status(201).json({editedEmployee});
        
    } catch (error) {
        return res.status(400).json({message: err});
    }
});

// delete an employee
empRouter.route('/:id', async (req, res) => {
    try {
        const deleted = await Employee.findByIdAndRemove(req.params.id);
        if(!deleted){
            return res.status(404).json({message: 'employee not found'});
        }
        return res.status(200).json({deleted});
    } catch (error) {
        return res.status(400).json({message: err});
    }
});


module.exports = empRouter;