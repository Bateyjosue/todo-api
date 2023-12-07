import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        id: number;
        createdAt: Date;
        email: string;
    }>;
    signin(): {
        status: number;
        statusText: string;
        message: string;
    };
}
