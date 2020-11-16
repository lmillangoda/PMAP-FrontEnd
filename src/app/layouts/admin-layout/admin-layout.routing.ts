import { Routes } from '@angular/router';


import { CurrentComponent } from 'app/current/current.component';
import { FaultComponent } from 'app/fault/fault.component';
import { FrequencyComponent } from 'app/frequency/frequency.component';
import { PowerComponent } from 'app/power/power.component';
import { VoltageComponent } from 'app/voltage/voltage.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'current',      component: CurrentComponent },
    { path: 'voltage',   component: VoltageComponent },
    { path: 'frequency',     component: FrequencyComponent },
    { path: 'power',     component: PowerComponent },
    { path: 'faults',     component: FaultComponent },

];
