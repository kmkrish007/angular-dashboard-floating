import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

import { MapsAllModule } from '@syncfusion/ej2-angular-maps';

import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';

import { TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

import { CheckBoxModule, ButtonAllModule} from '@syncfusion/ej2-angular-buttons';

import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [NumericTextBoxModule, MapsAllModule,AutoCompleteModule, DashboardLayoutModule, CheckBoxModule,SidebarModule, ButtonAllModule, TextBoxModule, ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
