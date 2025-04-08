import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeticionRoutingModule } from './peticion-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { MineComponent } from './mine/mine.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
    EditComponent,
    IndexComponent,
    MineComponent
  ],
  imports: [
    CommonModule,
    PeticionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  // Exportamos estos componentes si se necesitan en otros módulos
  exports: [
    CreateComponent,
    ViewComponent,
    EditComponent,
    IndexComponent,
    MineComponent
  ]
})
export class PeticionModule { }
