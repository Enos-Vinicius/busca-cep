import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCepRoutingModule } from './module-cep-routing.module';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';
import { MaterialSharedModule } from '../shared/modules/material-shared/material-shared.module';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BuscaCepComponent, TableComponent],
  imports: [
    CommonModule,
    ModuleCepRoutingModule,
    MaterialSharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ]
})
export class ModuleCepModule { }
