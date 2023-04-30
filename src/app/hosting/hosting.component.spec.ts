import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

// import { BuyVpsHostingComponent } from './buy-vps-hosting.component';
// import { VpsHostingService } from './vps-hosting.service';
import { HostingComponent } from './hosting.component';
import { VpsHostingService } from './VpsHostingService';

describe('BuyVpsHostingComponent', () => {
  let component: HostingComponent;
  let fixture: ComponentFixture<HostingComponent>;
  let vpsHostingServiceSpy: jasmine.SpyObj<VpsHostingService>;

  beforeEach(async () => {
    vpsHostingServiceSpy = jasmine.createSpyObj('VpsHostingService', ['getVpsPlans']);
    await TestBed.configureTestingModule({
      declarations: [ HostingComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: VpsHostingService, useValue: vpsHostingServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch VPS hosting plans on init', () => {
    const mockPlans = [
      { id: 1, name: 'Basic', price: 1000 },
      { id: 2, name: 'Premium', price: 2000 },
      { id: 3, name: 'Ultimate', price: 3000 },
    ];
    vpsHostingServiceSpy.getVpsPlans.and.returnValue(of(mockPlans));

    component.ngOnInit();
   // vpsHostingServiceSpy.
   // expect(component.VpsPlan).toEqual(mockPlans);
  });

  it('should purchase a VPS hosting plan', () => {
    const plan = { id: 1, name: 'Basic', price: 1000 };
    spyOn(window, 'alert');

    //component.buyPlan(plan);

    expect(window.alert).toHaveBeenCalledWith(`You have purchased the ${plan.name} plan for ₹${plan.price}`);
  });

  


});
