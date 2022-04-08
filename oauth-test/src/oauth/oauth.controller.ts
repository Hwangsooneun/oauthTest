import { Body, Controller, Post } from '@nestjs/common';
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
}
