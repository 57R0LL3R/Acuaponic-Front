import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Importa el módulo principal

platformBrowserDynamic().bootstrapModule(AppModule)  // Arranca el módulo principal
  .catch(err => console.error(err));

  