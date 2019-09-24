import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FormComponent } from './form.component';
import { DebugElement } from '@angular/core';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement
  let el: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FormComponent 
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(FormComponent);

      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

 it("should have as text 'contact page'", async(() => {
   expect(component.text).toEqual('contact page');
 }));

 it("should set submitted to true", async(() => {
  component.onSubmit();
  expect(component.submitted).toBeTruthy();
}));

it('should call the onSubmit method', async(() => {
  fixture.detectChanges();
  spyOn(component, 'onSubmit');
  el = fixture.debugElement.query(By.css('button')).nativeElement;
  el.click();
  expect(component.onSubmit).toHaveBeenCalledTimes(0);
}));

it('form should be invalid', async (() => {
  component.contactForm.controls['email'].setValue('');
  component.contactForm.controls['name'].setValue('');
  component.contactForm.controls['text'].setValue('');
  expect(component.contactForm.valid).toBeFalsy();
}));

it('form should be valid', async (() => {
  component.contactForm.controls['email'].setValue('asd@asd.com');
  component.contactForm.controls['name'].setValue('aada');
  component.contactForm.controls['text'].setValue('text');
  expect(component.contactForm.valid).toBeTruthy();
}));
});