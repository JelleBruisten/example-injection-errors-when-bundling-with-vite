import { Component, Injectable, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class MessageService {
  message() {
    return of('hello world');
  }
}

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  selector: 'example-angular-esbuild-secondary-entry-points-build-failure-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'main';

  service = inject(MessageService);
}
