import { asyncHandler } from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import Book from '../models/Book.js';

export const doesBookExist = asyncHandler(async function (req, res, next) {
    const book = await Book.findById(req.params.id);
    if (!book) throw new ErrorResponse('Book not found', 404);
    req.book = book;
    next();
});
