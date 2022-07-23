import { HttpClientModule, HttpClient } from '@angular/common/http';
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
import { IGrainByCompany } from 'src/app/_interfaces/grain/igrain-by-company';

import { GrainEditComponent } from './grain-edit.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

describe('GrainEditComponent', () => {
  let component: GrainEditComponent;
  let fixture: ComponentFixture<GrainEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
      declarations: [GrainEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // comentar - crtl+k+c
  // it(`#${GrainEditComponent.prototype.putGrainInFarm.name} should should redirect to /funcionario`, () => {
  //   let spy = spyOn(component, 'getFarmById');
  //   expect(spy).toHaveBeenCalled();
  // });
});
