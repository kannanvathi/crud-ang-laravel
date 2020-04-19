import { NgModule } from '@angular/core';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';

const materialcomponents = [TextFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatTabsModule,
MatIconModule]
@NgModule({
  imports: [materialcomponents
  ],
  exports: [materialcomponents
  ]
})
export class MaterialModule { }
