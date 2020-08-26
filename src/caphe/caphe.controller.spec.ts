import { Test, TestingModule } from '@nestjs/testing';
import { CapheController } from './caphe.controller';

describe('CapheController', () => {
  let controller: CapheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapheController],
    }).compile();

    controller = module.get<CapheController>(CapheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
