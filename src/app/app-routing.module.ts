/*
* AMRIT – Accessible Medical Records via Integrated Technology 
* Integrated EHR (Electronic Health Records) Solution 
*
* Copyright (C) "Piramal Swasthya Management and Research Institute" 
*
* This file is part of AMRIT.
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see https://www.gnu.org/licenses/.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './app-modules/core/services/auth-guard.service';
import { RedirOpenComponent } from './redir-open/redir-open.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'redirin',
    pathMatch: 'full'
  },
  {
    path:'redirin',
    component: RedirOpenComponent
  },
  {
    path: 'telemedicine',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./app-modules/scheduler/scheduler.module').then(
        (x) => x.SchedulerModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
