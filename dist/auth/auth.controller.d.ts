import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(): {
        status: number;
        message: string;
    };
    signin(): {
        status: number;
        message: string;
    };
}
