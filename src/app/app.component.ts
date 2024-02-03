import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { Article } from './article/article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ArticleComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles=[
      new Article('How angular works','https://www.educba.com/how-angular-works/',3),
      new Article('Angular Components','https://angular.io/guide/component-overview',6),
      new Article('Angular Built in Directives','https://angular.io/guide/built-in-directives',6),
    ];
  }
  addArticle(title:HTMLInputElement,link:HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0)); // creating new article instance with title and Url & add it to articles
    title.value=''; // clear input fields
    link.value='';
    return false;
  }
  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
