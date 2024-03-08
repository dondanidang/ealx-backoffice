import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';


@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private pusher: Pusher;

  constructor() {
    this.pusher = new Pusher('a4fcad3ed2671add4b09', {
      cluster: 'eu',
    });
  }

  // Subscribe to a channel
  subscribeToChannel(channelName: string) {
    return this.pusher.subscribe(channelName);
  }
}
