import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) { }

  public getRepos(): Observable<any[]> {
    return this.http.get<any[]>('https://api.github.com/users/caviglia80/repos')
      .pipe(
        catchError(error => {
          console.error(error);
          return this.handleError('An error occurred while fetching repositories.');
        })
      );
  }

  public getLanguages(repoName: string): Observable<string[]> {
    const url = `https://api.github.com/repos/caviglia80/${repoName}/languages`;
    return this.http.get<any>(url)
  }

  private handleError(errorMessage: string): Observable<never> {
    return throwError(errorMessage);
  }
}
