import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/website/home/home.component';
import {LoginComponent} from './components/website/login/login.component';
import {UserProfileComponent} from './components/user/user-profile/user-profile.component';
import {OrderhistoryComponent} from './components/user/orderhistory/orderhistory.component';
import {CheckoutComponent} from './components/user/checkout/checkout.component';
import {OrderComponent} from './components/user/order/order.component';
import {RestaurantProfileComponent} from './components/restaurant/restaurant-profile/restaurant-profile.component';
import {RegisterComponent} from './components/website/register/register.component';
import {RestaurantHomeComponent} from './components/restaurant/restaurant-home/restaurant-home.component';
import {RestaurantOrderHistoryComponent} from './components/restaurant/restaurant-order-history/order-history.component';
import {CurrentOrderComponent} from './components/restaurant/current-order/current-order.component';
import {MenuEditComponent} from './components/restaurant/menu-edit/menu-edit.component';
import { DetailComponent } from './components/deliver/detail/detail.component';
import { DeliverHomeComponent } from './components/deliver/home/home.component';
import {AuthGuard} from './services/auth-guard.service';
import {MenuComponent} from './components/restaurant/menu/menu.component';
// Import all other components here
import {RestaurantComponent} from './components/website/restaurant/restaurant.component';
import {AdminHomeComponent} from './components/admin/admin-home/admin-home.component';
import {AddUserComponent} from './components/admin/add-user/add-user.component';
import {EditUserComponent} from './components/admin/edit-user/edit-user.component';
import {OrderDetailsComponent} from './components/restaurant/order-details/order-details.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'menu/:restaurantid', component: RestaurantComponent},
    //employee

    //restaurant
  {path: 'restaurant/home/:restaurantid', component: RestaurantHomeComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/profile/:restaurantid', component: RestaurantProfileComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/orderhistory/:restaurantid', component: RestaurantOrderHistoryComponent},
  {path: 'restaurant/currentorders/:restaurantid', component: CurrentOrderComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/menu/:restaurantid', component: MenuComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/editmenu/:did/:restaurantid', component: MenuEditComponent},
  {path: 'restaurant/order/:oid', component: OrderDetailsComponent},
    //user
  {path: 'user/:uid/home', component: UserProfileComponent},
  {path: 'user/:uid/profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/:restaurantid/checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/orderhistory', component: OrderhistoryComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/order/:oid', component: OrderComponent, canActivate: [AuthGuard]},
  //delivery
  {path: 'deliver/:uid/home', component: DeliverHomeComponent},
  {path: 'deliver/:uid/detail/:oid', component: DetailComponent},
  //order-history
  {path: 'delivery/:did/home', component: UserProfileComponent},
  {path: 'delivery/:did/profile', component: UserProfileComponent},
  {path: 'delivery/:did/pendingorder', component: OrderhistoryComponent},
  {path: 'delivery/:did/ondelivery', component: OrderComponent},
    //restaurant-order-history

    //admin
  {path: 'admin/home', component: AdminHomeComponent, canActivate: [AuthGuard]},
  {path: 'admin/adduser', component: AddUserComponent, canActivate: [AuthGuard]},
  {path: 'admin/edituser', component: EditUserComponent, canActivate: [AuthGuard]},
  // {path: 'admin/currentorders', component: CurrentOrderComponent, canActivate: [AuthGuard]},


  // so on
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash: true});
