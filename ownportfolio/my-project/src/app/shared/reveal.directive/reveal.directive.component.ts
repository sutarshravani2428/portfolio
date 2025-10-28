// app/shared/reveal.directive.ts
import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]'
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'in-view');
          // unobserve if you want one-time reveal
          if (this.observer) this.observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.12 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}
