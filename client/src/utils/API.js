import axios from "axios";

export default {
    // Gets all books
    /* TEMPLATE
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },*/

    // ==========================================
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
};
