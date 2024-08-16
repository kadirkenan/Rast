import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, firstValueFrom, map, Observable, of, startWith, switchMap, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Link } from 'src/app/models/links/links';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private apiUrl = '/api/links';
  
  constructor(private http: HttpClient, private messageService: MessageService) {}

  public requestSubject$ = new BehaviorSubject<void>(undefined);
  public list$: Observable<Link[]> = this.requestSubject$.pipe(
    switchMap(() => this.http.get<Link[]>(this.apiUrl).pipe(
      map(data => data || []),
      catchError((error: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: error.message });
        return of([]); 
      })
    ))
  );

  public getLinkById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  public addLink(link: any) {
    return this.http.post<any>(this.apiUrl, link).pipe(
      switchMap(() => {
        this.messageService.add({severity:'success', summary:'Link başarıyla eklendi'});
        return this.list$;
      }),
      catchError((error: HttpErrorResponse) => {
        this.messageService.add({severity:'success', summary:error.message});
        return throwError(() => new Error('Failed to add link'));
      })
    );
  }


  public async updateLink(link: any): Promise<void> {
    try {
      const result = await this.http.put<any>(`${this.apiUrl}/${link.id}`, link).toPromise();
      if (result) {
        this.messageService.add({ severity: 'success', summary: 'Link güncellendi' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Link güncellenemedi' });
      }
    } catch (error) {
      this.messageService.add({ severity: 'error', summary: 'Link güncellenemedi' });
      console.error('Error updating link:', error);
    }
  }
  


  
  public async deleteLink(id: number) {
     const result = await firstValueFrom(this.http.delete<any>(`${this.apiUrl}/${id}`));
     if(result){
        this.messageService.add({ severity: 'success', summary: 'Link başarıyla silindi' });
     }else{
      this.messageService.add({ severity: 'error', summary: 'Link silinemedi' });
     }
  }
  
}
