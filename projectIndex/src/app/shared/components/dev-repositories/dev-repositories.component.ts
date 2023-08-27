import { Component, OnInit } from '@angular/core';
import { GithubService } from '@services/github.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dev-repositories',
  templateUrl: './dev-repositories.component.html',
  styleUrls: ['./dev-repositories.component.css']
})
export class DevRepositoriesComponent implements OnInit {
  public repos$: Observable<any[]> = this.githubService.getRepos();

  constructor(public githubService: GithubService) { }

  ngOnInit() {
     this.asd('EstudioJuridico');
  }

  public truncateDescription(description: string): string {
    try {
      if (description)
        return description.length > 80 ? description.substring(0, 80) + '..' : description;
      else
        return '';
    } catch (error) {
      console.log(error);
      return '';
    }
  }

  public truncateTitle(title: string): string {
    try {
      if (title)
        return title.length > 20 ? title.substring(0, 20) + '..' : title;
      else
        return '';
    } catch (error) {
      console.log(error);
      return '';
    }
  }

    public asd(repoName: string) {
      return this.githubService.getLanguages(repoName).pipe(
        map((languages: string[]) => {

          console.log(languages);

        })
      );
    }

    public getLanguagesData(repoName: string): Observable<string[]> {
      return this.githubService.getLanguages(repoName).pipe(
        map((languages: string[]) => {

          console.log(languages);

          return languages;
        })
      );
    }

}
