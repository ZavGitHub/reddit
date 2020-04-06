/**
 * Model class (not a component) to encapsulate a logic within the structure of the article
 */
export class Article {
  votes: number;
  title: string;
  link: string;
  constructor(title: string, link: string, votes?: number) { // votes? means that this parameter is optional
    this.title = title;
    this.link = link;
    this.votes = votes || 0; // default value is zero
  }
}
