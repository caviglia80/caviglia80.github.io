import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) { }

  public getRepos(): Observable<any[]> {
    try {
      return this.http.get<any[]>(`https://api.github.com/users/caviglia80/repos`);
    } catch (error) {
      console.log(error);
      return new Observable<any[]>;
    }
  }

  public getLanguages(repoName: string): Observable<any[]> {
    try {
      return this.http.get<any[]>('https://api.github.com/repos/caviglia80/' + repoName + '/languagesrepoName');
    } catch (error) {
      console.log(error);
      return new Observable<any[]>;
    }
  }

}
