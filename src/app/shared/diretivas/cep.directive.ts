import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cepMask]'
})
export class CepDirective {

  onTouched: any;
  onChange: any;
  value: '';
  cepType = '99999-999';

  // tslint:disable-next-line:no-input-rename
  @Input('cepMask') cepMask: string;

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeydown($event: any) {
    this.ignoreSome($event);
  }


  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    const value = $event.target.value.replace(/\D/g, '');

    if ($event.keyCode === 8) {
      return value;
    }

    if (value.length <= 7) {
      $event.target.value = this.mascaraCep(value);
    } else {
      return $event.target.value;
    }

  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {

    if ($event.target.value.length === this.cepType.length) {
      return $event.target.value;
    } else {
      return $event.target.value;
    }

  }

  mascaraCep(value: string): string {

    value = value.replace(/\D/g, '');

    const replacement = this.cepType.replace(/\D/g, '').replace(/9/g, '_');
    const valueMask = value + replacement.substring(0, replacement.length - value.length);
    let valueMaskPos = 0;

    value = '';
    for (let i = 0; i < this.cepType.length; i++) {
      if (isNaN(parseInt(this.cepType.charAt(i), 10))) {
        value += this.cepType.charAt(i);
      } else {
        value += valueMask[valueMaskPos++];
      }
    }

    if (value.indexOf('_') > -1) {
      value = value.substr(0, value.indexOf('_'));
    }

    return value;

  }


  ignoreSome(event) {
    if (event.key !== undefined) {
      const k = event.key;
      if (
        !event.ctrlKey &&
        !event.metaKey &&
        k !== '0' &&
        k !== '1' &&
        k !== '2' &&
        k !== '3' &&
        k !== '4' &&
        k !== '5' &&
        k !== '6' &&
        k !== '7' &&
        k !== '8' &&
        k !== '9' &&
        k !== 'Backspace' &&
        k !== 'Tab' &&
        k !== 'Delete' &&
        k !== 'ArrowLeft' &&
        k !== 'ArrowRight'
      ) {
        event.preventDefault();
      }
    } else if (event.keyCode !== undefined) {
      const k = event.keyCode;
      if (k === 32 || // space
        k < 48 || k > 57) {
        event.preventDefault();
      }
    }
  }

}
