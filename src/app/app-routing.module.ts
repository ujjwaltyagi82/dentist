import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component'; // Import the ThankYouComponent

const routes: Routes = [
  { path: 'thank-you', component: ThankYouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
