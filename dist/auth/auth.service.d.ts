import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    login(): {
        status: number;
        statusText: string;
        message: string;
    };
    signup(): {
        status: number;
        statusText: string;
        message: string;
    };
}
