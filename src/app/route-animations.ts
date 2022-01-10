import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const slide = 
  trigger('routeAnimations', [
    transition('isCepInfo => *', slideTo('left')),
    transition('isCepSearch => *', slideTo('right'))
]);

function slideTo(direction: string) {
    return [
      query(':enter, :leave', [
        style({
          position: 'fixed',
          width: '100%',
          [direction]: 0
        }),
      ], {optional: true}),
      query(':enter', [
        style({[direction]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('1000ms ease', 
            style({[direction]: '100%'})
          ),
        ], {optional: true}),
        query(':enter', [
          animate('1000ms ease',
            style({[direction]: '0%'})
          ),
        ], {optional: true}),
    ]),
  ];
}