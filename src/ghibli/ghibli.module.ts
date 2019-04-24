import { Module, HttpModule } from '@nestjs/common';

import { RouterModule } from 'nest-router/router.module';
import { GHIBLI_ROUTES } from './ghibli.routes';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

@Module({
    imports: [
        RouterModule.forRoutes(GHIBLI_ROUTES),
        HttpModule,
    ],
    providers: [ FilmsService ],
    controllers: [ FilmsController ],
})
export class GhibliModule {}
