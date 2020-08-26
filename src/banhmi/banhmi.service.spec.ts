import { Test, TestingModule } from '@nestjs/testing';
import { BanhmiService } from './banhmi.service';

describe('BanhmiService', () => {
  let service: BanhmiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BanhmiService],
    }).compile();

    service = module.get<BanhmiService>(BanhmiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
