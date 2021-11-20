import { Request, Response } from 'express';

/**
 * Must be added after RegisterRoutes and before errorHandler
 */
const notFoundHandler = (req: Request, res: Response) => {
    res.status(404).send({
      msg: "Not Found",
    });
};

export default notFoundHandler;