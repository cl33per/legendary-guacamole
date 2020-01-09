import axios from "axios";

export default {
    // Gets all profiles
    getProfiles: function () {
        return axios.get("/api/profiles");
    },
    // Gets the book with the given id
    getProfile: function (id) {
        return axios.get("/api/profiles/" + id);
    },
    // Deletes the book with the given id
    deleteProfile: function (id) {
        return axios.delete("/api/profiles/" + id);
    },
    // Saves a book to the database
    saveProfile: function (profileData) {
        return axios.post("/api/profiles", profileData);
    },
    //============================================
    // Gets all groups
    getGroups: function () {
        return axios.get("/api/groups");
    },
    // Gets the book with the given id
    getGroup: function (id) {
        return axios.get("/api/groups/" + id);
    },
    // Deletes the book with the given id
    deleteGroup: function (id) {
        return axios.delete("/api/groups/" + id);
    },
    // Saves a book to the database
    saveGroup: function (groupData) {
        return axios.post("/api/groups", groupData);
    },
    // Gets all todos
    getTodos: function () {
        return axios.get("/api/todos");
    },
    // Gets the book with the given id
    getTodo: function (id) {
        return axios.get("/api/todos/" + id);
    },
    // Deletes the book with the given id
    deleteTodo: function (id) {
        return axios.delete("/api/todos/" + id);
    },
    // Saves a book to the database
    saveTodo: function (todoData) {
        return axios.post("/api/todos", todoData);
    },

    // Gets all events
    getEvents: function () {
        return axios.get("/api/events");
    },
    // Gets the book with the given id
    getEvent: function (id) {
        return axios.get("/api/events/" + id);
    },
    // Deletes the book with the given id
    deleteEvent: function (id) {
        return axios.delete("/api/events/" + id);
    },
    // Saves a book to the database
    saveEvent: function (eventData) {
        return axios.post("/api/events", eventData);
    },
    // Gets all bills
    getBills: function () {
        return axios.get("/api/bills");
    },
    // Gets the bill with the given id
    getBill: function (id) {
        return axios.get("/api/bills/" + id);
    },
    // Deletes the bill with the given id
    deleteBill: function (id) {
        return axios.delete("/api/bills/" + id);
    },
    // Saves a bill to the database
    saveBill: function (billData) {
        return axios.post("/api/bills", billData);
    },
    // Gets all bills
    getFiles: function () {
        return axios.get("/api/files");
    },
    // Gets the bill with the given id
    getFile: function (id) {
        return axios.get("/api/files/" + id);
    },
    // Deletes the bill with the given id
    deleteFile: function (id) {
        return axios.delete("/api/files/" + id);
    },
    // Saves a bill to the database
    saveFile: function (fileData) {
        return axios.post("/api/files", fileData);
    },
    // Saves a user to the database
    userData: function (userData) {
        return axios.get("/api/users", userData);
    },
};
