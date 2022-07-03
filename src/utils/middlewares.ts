import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AdminMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const authorization = req.headers['authorization'];
    if (authorization) {
      const basic = authorization.match(/^Basic (.+)$/);
      if (basic) {
        const result = Buffer.from(
          authorization.split(' ')[1],
          'base64',
        ).toString('utf8');
        if (
          result === `${process.env.API_USERNAME}:${process.env.API_PASSWORD}`
        ) {
          return next();
        }
      }
    }
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="Login Strict"');
    res.send('');
  }
}
