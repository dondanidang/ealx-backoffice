import { Component, OnInit } from '@angular/core';
import { PusherService } from './pusher.service';
import { ApiService } from './api.service';
import { OrderDiscount } from './orderDiscount';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ealx-backoffice';

  orderDiscounts: OrderDiscount[] = [];

  // orderHeaders: string[] = this.orders.length > 0 ? [...Object.keys(this.orders[0]), '' ]: [];
  orderHeaders: string[] = ['Created At', 'Order Number', 'Price', ''];

  constructor(private pusherService: PusherService, private apiService: ApiService) {
  }

  ngOnInit(): void {
    const channel = this.pusherService.subscribeToChannel('order-discount');

    this.apiService.getOrderDiscounts().subscribe((data: any) => {
      this.orderDiscounts = data.order_discounts;
    })

    channel.bind('created', (data: OrderDiscount) => {
      this.orderDiscounts = [data, ...this.orderDiscounts];
      console.log(data);
    });
  }
}
