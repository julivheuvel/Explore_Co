const Activity = require("../models/activities.models");

// ============
//  Find All 
// ============
module.exports.findAllActivities = (req, res) => {
    Activity.find({})
        .sort({ type: 'asc'})
        .then(allActivity => res.json({results: allActivity}))
        .catch(err => res.json({message: "Cannot find activity!", error: err}))
}

// ============
//  Create
// ============
module.exports.createActivity = (req, res) => {
    Activity.create(req.body)
        .then(newActivity => res.json({results: newActivity}))
        .catch(err => res.json({message: "Cannot create the activity!", error: err}))
}

// ============
//  Find One by ID
// ============
module.exports.findOneActivity = (req, res) => {
    Activity.findOne({_id:req.params._id})
        .then(foundActivity => res.json({results: foundActivity}))
        .catch(err => res.json({message: "Could not find the activity!", error: err}))
}

// ============
//  Update
// ============
module.exports.updateActivity = (req, res) => {
    Activity.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true, runValidators: true, useFindAndModify: false}
        )
        .then(updatedActivity => res.json({results: updatedActivity}))
        .catch(err => res.json({message: "Could not update activity!", error: err}))
}

// ============
//  Delete
// ============
module.exports.deleteActivity = (req, res) => {
    Activity.deleteOne({ _id: req.params._id })
        .then(result => res.json({results: result}))
        .catch(err => res.json({message: "Could not delete the activity!", error: err}))     
    }