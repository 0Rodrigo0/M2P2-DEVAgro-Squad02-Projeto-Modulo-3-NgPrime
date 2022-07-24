import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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

import { GrainListComponent } from './grain-list.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

describe('GrainListComponent', () => {
  let component: GrainListComponent;
  let fixture: ComponentFixture<GrainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrainListComponent],
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
