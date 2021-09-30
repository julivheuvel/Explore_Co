const ActivityController = require("../controllers/activities.controllers");

module.exports = app => {
    // ============
    //  Find All 
    // ============
    app.get("/api/all/activities", ActivityController.findAllActivities);

    // ============
    //  Create
    // ============
    app.post("/api/activity/new", ActivityController.createActivity);

    // ============
    //  Find One by ID
    // ============
    app.get("/api/activity/:_id", ActivityController.findOneActivity);
    // ============
    //  Update
    // ============
    app.put("/api/activity/:_id", ActivityController.updateActivity);
    // ============
    //  Delete
    // ============
    app.delete("/api/activity/:_id", ActivityController.deleteActivity);
}