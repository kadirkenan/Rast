import { Pipe, PipeTransform } from '@angular/core';
import { Link } from 'src/app/models/links/links';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(links: Link[] | null, searchText: string, criteria: string): Link[] {
    if (!links) {
      return [];
    }
    if (!searchText) {
      return links;
    }

    searchText = searchText.toLowerCase();

    return links.filter(link => {
      const matchesUrl = criteria === 'url' || criteria === 'all';
      const matchesName = criteria === 'name' || criteria === 'all';

      return (
        (matchesUrl && link.url.toLowerCase().includes(searchText)) ||
        (matchesName && link.name.toLowerCase().includes(searchText))
      );
    });
  }
}
