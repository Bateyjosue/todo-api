import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(): {
        status: number;
        statusText: string;
        message: string;
    };
    signin(): {
        status: number;
        statusText: string;
        message: string;
    };
}
