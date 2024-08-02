import { Router } from 'express';
import {
    addBookToReadingList,
    createUser,
    getUsers,
    removeBookFromReadingList,
    updateBookInReadingList,
} from '../controllers/user.js';

const userRouter = Router();

userRouter.route('/').get(getUsers).post(createUser);

userRouter.route('/:id').get().put().delete();

userRouter.route('/:id/books').post(addBookToReadingList);

userRouter
    .route('/:id/books/:bookId')
    .put(updateBookInReadingList)
    .delete(removeBookFromReadingList);

export default userRouter;
