import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';



// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { CasePackModalComponent } from './components/case-pack-modal/case-pack-modal.component';
import { BusquedaAvanzadaComponent } from './components/busqueda-avanzada/busqueda-avanzada.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
