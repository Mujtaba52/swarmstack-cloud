import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    if (!token) throw new UnauthorizedException("No token provided");

    try {
      const decoded = this.jwtService.verify(token);
      request["user"] = decoded;
      return true;
    } catch {
      throw new UnauthorizedException("Invalid token");
    }
  }
}
