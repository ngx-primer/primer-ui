import { Test, TestingModule } from '@nestjs/testing';

import { ContentFetchingService } from './content-fetching.service';

describe('ContentFetchingService', () => {
  let service: ContentFetchingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentFetchingService],
    }).compile();

    service = module.get<ContentFetchingService>(ContentFetchingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
