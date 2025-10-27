import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]'
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appRevealThreshold') threshold = 0.15; // fraction of element visible to trigger
  @Input('appRevealRootMargin') rootMargin = '0px';
  @Input('appRevealDuration') duration = 600; // ms if you want to dynamically control — not used directly but left for extensibility
  @Input('appRevealRepeat') repeat = true; // we default to repeat always (per your request)

  observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const native = this.el.nativeElement as HTMLElement;

    // Set initial hidden state (Tailwind utility classes are used so we toggle classes)
    this.renderer.addClass(native, 'opacity-0');
    this.renderer.addClass(native, 'translate-y-4');
    this.renderer.addClass(native, 'transition');
    this.renderer.addClass(native, 'duration-700');
    this.renderer.addClass(native, 'ease-out');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Reveal: remove hidden transforms, set visible
            this.renderer.removeClass(native, 'opacity-0');
            this.renderer.removeClass(native, 'translate-y-4');
            this.renderer.addClass(native, 'opacity-100');
            this.renderer.addClass(native, 'translate-y-0');
          } else if (this.repeat) {
            // Hide again when it leaves viewport (repeat behavior)
            this.renderer.removeClass(native, 'opacity-100');
            this.renderer.removeClass(native, 'translate-y-0');
            this.renderer.addClass(native, 'opacity-0');
            this.renderer.addClass(native, 'translate-y-4');
          }
        });
      },
      {
        root: null,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      }
    );

    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}
