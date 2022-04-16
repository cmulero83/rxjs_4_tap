// Ejercicio: https://www.youtube.com/watch?v=FPxlb6hEeWA&list=PLHgpVrCyLWAoSkzNPYt9nhmtSlpXjtnju&index=5
// https://rxjs.dev/api/operators/tap
// tap, no es un observable comun, permite espiar un observable
//

import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_4_tap';

  public ngOnInit(): void{
     
    // Aqui llamamos a los clicks del documento, ya tenemos un observable
    // Este observable no tiene next, complete, etc.

    const clicks = fromEvent(document, 'click')

    // Al utilizar TAP, le añade la posibilidad de usar err, complete, etc...
    const positions = clicks.pipe(
      tap( ev => console.log('Procesado ', ev),
      err => console.log('Err : ' + err),
      () => console.log('Completado')
      )
    )

    positions.subscribe(pos => console.log(pos))


  }
}
