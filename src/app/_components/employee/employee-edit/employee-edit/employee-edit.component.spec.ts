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

import { EmployeeEditComponent } from './employee-edit.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

describe(EmployeeEditComponent.name, () => {
  let component: EmployeeEditComponent;
  let fixture: ComponentFixture<EmployeeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeEditComponent],
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
    fixture = TestBed.createComponent(EmployeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('o nome do botão deve ser', () => {
    expect(component.btnName).toEqual('EDITAR');
  });

  it('o nome do menuName deve ser', () => {
    expect(component.menuName).toEqual('Editar Funcionários');
  });

  it('o objeto allFarmsByCompanyFromEmployee deve ser', () => {
    let farm = {
      id: '',
      name: '',
      farmId: '',
      cpf: '',
      telephoneNumber: '',
      hiringDate: '',
      companyId: {
        id: '',
        name: '',
        address: '',
        cnpj: '',
        email: '',
        password: '',
      },
      job: '',
      status: false,
    };
    expect(component.employee).toEqual(farm);
  });

  it('o objeto allFarmsByCompanyFromEmployee deve ser', () => {
    let farm = {
      id: '',
      name: '',
      companyId: '',
      grainId: '',
      lastHarvest: '',
    };
    expect(component.allFarmsByCompanyFromEmployee).toContain(farm);
  });
});
