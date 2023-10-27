import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {
  @Input() appImageValidation: string | undefined;
  private defaultImageUrl = 'https://www.csam.unam.mx/static/images/imagen-no-disponible.jpg';

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  @HostListener('error') onError() {
    this.loadImage(this.defaultImageUrl);
  }

  ngOnInit() { }

  private loadImage(url: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'src', url);
  }
}
