import { Response, Request, NextFunction } from 'express';
import { ValidateError } from 'tsoa';
import { isDev } from '../env';

/**
 * Must be added after RegisterRoutes
 */
const errorHandler = (err: unknown, req: Request,
    res: Response, next: NextFunction): Response | void =>
{
    if (err instanceof ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
        return res.status(422).json({
        msg: "Validation Failed",
        details: err?.fields,
        });
    }
    if (err instanceof Error) {
        if (isDev) {
            console.error(err);
            return res.status(500).json({msg: "Internal Server Error", err: err.message})
        }
        return res.status(500).json({msg: "Internal Server Error",});
    }

    next(); 
}

export default errorHandler;