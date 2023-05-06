import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { jwtKey } from "../jwt";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
      constructor() {
            super({
              jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
              ignoreExpiration: false,
              secretOrKey: jwtKey.secret,
            });
          }
        
          async validate(payload: any) {
            return { userId: payload._id, username: payload.name };
          }
}

