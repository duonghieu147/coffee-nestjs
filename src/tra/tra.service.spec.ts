import { Test, TestingModule } from '@nestjs/testing';
import { TraService } from './tra.service';

describe('TraService', () => {
  let service: TraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TraService],
    }).compile();

    service = module.get<TraService>(TraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
