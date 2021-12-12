import { Exception } from "tsoa";

/**
 * Throw this class as an error to have the errorHandler pick it up
 */
export class RequestError implements Exception {
    status: number;
    message: string;
    name: string = 'RequestError';

    /**
     * @param status HTTP Status Code
     * @param message Error message to display
     */
    constructor(status:number,message:string) {
        this.status=status; this.message=message;
    }
}