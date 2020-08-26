import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapheModule } from './caphe/caphe.module';
import { TraModule } from './tra/tra.module';
import { BanhmiModule } from './banhmi/banhmi.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'Coffee',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: false,
  }),
    CapheModule,
    TraModule,
    BanhmiModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
