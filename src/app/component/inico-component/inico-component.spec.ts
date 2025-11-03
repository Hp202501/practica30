import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicoComponent } from './inico-component';

describe('InicoComponent', () => {
  let component: InicoComponent;
  let fixture: ComponentFixture<InicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
