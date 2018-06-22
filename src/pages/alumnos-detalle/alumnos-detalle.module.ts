import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlumnosDetallePage } from './alumnos-detalle';

@NgModule({
  declarations: [
    AlumnosDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(AlumnosDetallePage),
  ],
})
export class AlumnosDetallePageModule {}
