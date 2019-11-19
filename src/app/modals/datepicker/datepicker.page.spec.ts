import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatepickerPage } from './datepicker.page';

describe('DatepickerPage', () => {
  let component: DatepickerPage;
  let fixture: ComponentFixture<DatepickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatepickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
