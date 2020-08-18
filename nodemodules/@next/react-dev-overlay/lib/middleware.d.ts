/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { StackFrame } from 'stacktrace-parser';
import webpack from 'webpack';
export declare type OverlayMiddlewareOptions = {
    rootDirectory: string;
    stats(): webpack.Stats | null;
    serverStats(): webpack.Stats | null;
};
export declare type OriginalStackFrameResponse = {
    originalStackFrame: StackFrame;
    originalCodeFrame: string | null;
};
export declare function createOriginalStackFrame({ line, column, source, rootDirectory, frame, }: {
    line: number;
    column: number | null;
    source: any;
    rootDirectory: string;
    frame: any;
}): Promise<OriginalStackFrameResponse | null>;
declare function getOverlayMiddleware(options: OverlayMiddlewareOptions): (req: IncomingMessage, res: ServerResponse, next: Function) => Promise<any>;
export { getOverlayMiddleware };
