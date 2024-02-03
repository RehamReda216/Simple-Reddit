import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{

    @HostBinding('att.class') cssClass= 'row'; //keep value of host elements class in sync with property
    @Input() article!: Article;

    constructor(){
      // article is populated by Input now
    }

    voteUp():boolean{
      this.article.voteUp();
      return false; // to fix reloading
    }

    voteDown():boolean{
      this.article.voteDown();
      return false;
    }
    ngOnInit(): void {
      
    }
}
