import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import
import { ChatBarComponent } from './chat-bar.component';


describe('ChatBarComponent', () => {
  let component: ChatBarComponent;
  let fixture: ComponentFixture<ChatBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatBarComponent],
      imports: [FormsModule]

    });
    fixture = TestBed.createComponent(ChatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
