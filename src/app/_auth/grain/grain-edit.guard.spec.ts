import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { GrainEditGuard } from './grain-edit.guard';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

describe('GrainEditGuard', () => {
  let guard: GrainEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgApexchartsModule,
        NgxMaskModule.forRoot(maskConfig), //https://www.npmjs.com/package/ngx-mask (como usar)
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        DropdownModule,
        ButtonModule,
        CardModule,
        TableModule,
      ],
      providers: [HttpClient],
    });
    guard = TestBed.inject(GrainEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
