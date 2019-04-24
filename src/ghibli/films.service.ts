import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { FilmDTO } from './dto/films.dto';
import { Observable } from 'rxjs';

@Injectable()
export class FilmsService {
  constructor(private http: HttpService) {}

  getFilms(): Observable<FilmDTO[]> {
    return this.http.get('https://ghibliapi.herokuapp.com/films/')
      .pipe(
        map(response => response.data.map(
          item => new FilmDTO(item.id, item.title, item.description, item.director, item.producer, item.releaseDate, item.rt_score),
        )),
        map(filmList => filmList.sort((filmItem: FilmDTO, filmItem2: FilmDTO) => {
          return filmItem.rtScore > filmItem2.rtScore ? 1 : -1;
        })),
      );
  }
}
