export declare const logMessage: (message: string) => void;
export declare function logMessage2(message: string): void;
export declare const logMessage3: (message: string) => void;
export declare const logMessage4: (message: string) => void;
export declare const alwaysThrowError: (message: string) => never;
declare type LogMessage = (message: string) => void;
export declare const logMessage6: LogMessage;
declare type FullLogMessage = {
    (message: string): void;
};
export declare const logMessage7: FullLogMessage;
export {};
