import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevRepositoriesComponent } from './dev-repositories.component';

describe('DevRepositoriesComponent', () => {
  let component: DevRepositoriesComponent;
  let fixture: ComponentFixture<DevRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevRepositoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
