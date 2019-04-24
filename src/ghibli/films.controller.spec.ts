import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { HttpModule } from '@nestjs/common';
import { FILMS_MOCK } from './films.mock';
import { Observable, from } from 'rxjs';

describe('Films Controller', () => {
  let controller: FilmsController;
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [FilmsService],
      controllers: [FilmsController],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
    controller = module.get<FilmsController>(FilmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('getFlims should call service method', () => {
    const serviceMethod = jest.fn(s => service.getFilms());
    controller.getFilms().subscribe(res => {
      expect(serviceMethod).toHaveBeenCalledTimes(1);
    });
  });
});
