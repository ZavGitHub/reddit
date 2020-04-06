import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Article } from "./article.model"; // import our model class to store the properties of each article

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class ArticleComponent implements OnInit {
  @HostBinding("attr.class") cssClass = "row";
  // Add @Input decorator to pass [article] parameter in app.component.html
  @Input() article: Article;

  constructor() {
    // article is populated by the Input now,
    // so we don't need anything here
  }

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }
  ngOnInit(): void {}
}
