export declare namespace OasTools {
  export interface ConfigOptions {
    middleware: {
      validator: {
        requestValidation?: boolean;
        responseValidation?: boolean;
        strict?: boolean;
      };
      router: {
        disable?: boolean;
        controllers: string;
      };
      error: {
        disable?: boolean;
        printStackTrace?: boolean;
        customHandler?: ((...args: any[]) => void) | null; // Replace any[] with the actual argument types if possible
      };
      security: {
        disable?: boolean;
        auth?: any; // You may want to specify a more detailed type here
      };
      swagger: {
        disable?: boolean;
        path?: string;
        ui?: any; // You may want to specify a more detailed type here
      };
    };
    oasFile: string | Record<string, any>;
    logger: {
      level: boolean | string;
    };
  }
  export function initialize(
    expressApp: import("express").Express,
    initialize: ConfigOptions
  ): Promise<void>;
}

export = OasTools;