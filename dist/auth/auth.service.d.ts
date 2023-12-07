import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    login(dto: AuthDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firstName: string;
        lastName: string;
    }>;
    signup(dto: AuthDto): Promise<{
        email: string;
        id: number;
        createdAt: Date;
    }>;
}
