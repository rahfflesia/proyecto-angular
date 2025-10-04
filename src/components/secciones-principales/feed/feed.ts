import { Component } from '@angular/core';
import { Cabecera } from '../../etc/cabecera/cabecera';
import { FeedCard } from '../../cards/feed-card/feed-card';

@Component({
  selector: 'feed',
  imports: [Cabecera, FeedCard],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {}
