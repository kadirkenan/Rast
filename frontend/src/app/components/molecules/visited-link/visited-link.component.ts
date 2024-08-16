import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from '../../services/search-history/search-history.service';

@Component({
  selector: 'app-visited-link',
  templateUrl: './visited-link.component.html',
  styleUrls: ['./visited-link.component.scss']
})
export class VisitedLinkComponent implements OnInit {
  visitedLinks: string[] = [];

  constructor(private searchHistoryService: SearchHistoryService) {}

  ngOnInit(): void {
    this.searchHistoryService.getVisitedLinksObservable().subscribe(links => {
      this.visitedLinks = links;
    });
  }

  clearLinks(): void {
    this.searchHistoryService.clearVisitedLinks();
    this.visitedLinks = [];
  }
  
}
