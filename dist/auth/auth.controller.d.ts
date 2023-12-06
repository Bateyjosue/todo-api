import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): {
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
