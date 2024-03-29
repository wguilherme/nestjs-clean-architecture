import { Module } from '@nestjs/common';
import { RestApiController } from './rest-api.controller';
import { RestApiService } from './rest-api.service';

@Module({
  imports: [],
  controllers: [RestApiController],
  providers: [RestApiService],
})
export class RestApiModule {}
