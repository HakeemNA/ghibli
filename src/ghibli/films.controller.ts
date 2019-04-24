import { Controller, Get } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('ghibli-films')
export class FilmsController {
    constructor(private readonly filmsService: FilmsService) {}

    @Get()
    getFilms() {
        return this.filmsService.getFilms();
    }
}
