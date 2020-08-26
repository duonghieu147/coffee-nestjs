import { Test, TestingModule } from '@nestjs/testing';
import { TraController } from './tra.controller';

describe('TraController', () => {
  let controller: TraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraController],
    }).compile();

    controller = module.get<TraController>(TraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
