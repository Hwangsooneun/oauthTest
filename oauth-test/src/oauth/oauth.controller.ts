import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private oauthService: OauthService) {}

  @Post('signup/google')
  googleSignUp(@Body() data) {
    console.log(data);
    const result = this.oauthService.googleSignUp(data);
    return result;
  }

  @Get('naver')
  naverProfile(@Request() req) {
    console.log('aetaest');
    return this.oauthService.naverProfile(req);
  }
}
