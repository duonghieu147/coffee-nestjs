import { Test, TestingModule } from '@nestjs/testing';
import { CapheService } from './caphe.service';

describe('CapheService', () => {
  let service: CapheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapheService],
    }).compile();

    service = module.get<CapheService>(CapheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
