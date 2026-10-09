import { Book } from "../models/Book.js";

const bookController = {
    // CREATE - Add a new book
    create: async (req, res) => {
        try {
            const book = await Book.create({
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                publicationYear: req.body.publicationYear,
                publisher: req.body.publisher
            });

            res.status(201).json({
                success: true,
                message: "Book created successfully",
                data: book
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    // READ ALL - Get all books
    getAll: async (req, res) => {
        try {
            const books = await Book.findAll();

            res.status(200).json({
                success: true,
                data: books
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    // READ ONE - Get one book by ID
    getOne: async (req, res) => {
        try {
            const book = await Book.findByPk(req.params.id);

            if (!book) {
                return res.status(404).json({
                    success: false,
                    message: "Book not found"
                });
            }

            res.status(200).json({
                success: true,
                data: book
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    // UPDATE - Update a book
    update: async (req, res) => {
        try {
            const book = await Book.findByPk(req.params.id);

            if (!book) {
                return res.status(404).json({
                    success: false,
                    message: "Book not found"
                });
            }

            await book.update({
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                publicationYear: req.body.publicationYear,
                publisher: req.body.publisher
            });

            res.status(200).json({
                success: true,
                message: "Book updated successfully",
                data: book
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    // DELETE - Delete a book
    delete: async (req, res) => {
        try {
            const book = await Book.findByPk(req.params.id);

            if (!book) {
                return res.status(404).json({
                    success: false,
                    message: "Book not found"
                });
            }

            await book.destroy();

            res.status(200).json({
                success: true,
                message: "Book deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
};

export { bookController };