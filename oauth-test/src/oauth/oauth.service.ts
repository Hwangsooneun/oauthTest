import { Injectable } from '@nestjs/common';

@Injectable()
export class OauthService {
  async googleSignUp(data) {
    console.log(data);
    return;
  }
}
