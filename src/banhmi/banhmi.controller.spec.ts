import { Test, TestingModule } from '@nestjs/testing';
import { BanhmiController } from './banhmi.controller';

describe('BanhmiController', () => {
  let controller: BanhmiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanhmiController],
    }).compile();

    controller = module.get<BanhmiController>(BanhmiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
