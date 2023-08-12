import { Component } from '@angular/core';
import { GithubService } from '@services/github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dev-repositories',
  templateUrl: './dev-repositories.component.html',
  styleUrls: ['./dev-repositories.component.css']
})
export class DevRepositoriesComponent {
  public repos$: Observable<any[]> = this.githubService.getRepos();

  constructor(private githubService: GithubService) { }

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

  public languageList(repoName: string):Observable<any[]> {
    try {
      return this.githubService.getLanguages(repoName);
    } catch (error) {
      console.log(error);
      return new Observable<any[]>;
    }
  }

}
