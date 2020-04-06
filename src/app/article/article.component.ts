import { Component, OnInit, HostBinding } from "@angular/core";
import { Article } from "./article.model"; // import our model class to store the properties of each article

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class ArticleComponent implements OnInit {
  @HostBinding("attr.class") cssClass = "row";
  article: Article;

  constructor() {    
    this.article = new Article(
      'Angular 7',
      'https://angular.io',
      9
    );
  }

  voteUp() {
    this.article.votes += 1;
    return false;
  }
  
  voteDown() {
    this.article.votes -= 1;
    return false;
  }
  ngOnInit(): void {}
}
