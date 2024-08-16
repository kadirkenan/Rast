import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  private storageKey = 'visitedLinks';
  private visitedLinksSubject = new BehaviorSubject<string[]>(this.getVisitedLinks());

  constructor() { }

  addVisitedLink(link: string): void {
    const visitedLinks = this.getVisitedLinks();
    if (!visitedLinks.includes(link)) {
      visitedLinks.push(link);
      localStorage.setItem(this.storageKey, JSON.stringify(visitedLinks));
      this.visitedLinksSubject.next([...visitedLinks]);
    }
  }

  getVisitedLinks(): string[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  clearVisitedLinks(): void {
    localStorage.removeItem(this.storageKey);
    this.visitedLinksSubject.next([]);
  }

  getVisitedLinksObservable() {
    return this.visitedLinksSubject.asObservable();
  }
}
