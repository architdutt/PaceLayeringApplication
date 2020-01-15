import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimePlotComponent } from './time-plot/time-plot.component';
import { PaceLayerComponent } from './pace-layer/pace-layer.component';


const routes: Routes = [
  { path: 'timeplot', component: TimePlotComponent},
  { path: 'pacelayer', component: PaceLayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TimePlotComponent,PaceLayerComponent]
