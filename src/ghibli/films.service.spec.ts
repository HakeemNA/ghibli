import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { HttpModule, HttpService } from '@nestjs/common';
import { FILMS } from './films.mock';

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [FilmsService],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getFilms should return films list', () => {
    service.getFilms().subscribe(res => {
      expect(res.length).toBeGreaterThan(0);
    });
  });

  it('should return films in ascending order of rating', () => {
    service.getFilms().subscribe(res => {
      expect(res[0].rtScore < res[res.length - 1].rtScore);
    });
  });
});
