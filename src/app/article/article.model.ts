/**
 * Model class (not a component) to encapsulate a logic within the structure of the article
 */
export class Article {
  votes: number;
  title: string;
  link: string;
  // votes? means that this parameter is optional
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0; // default value is zero
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  // utility function that extracts the domain from URL
  domain(): string {
    try {
      // e.g. https://google.com/path/to/home
      const domainAndPath: string = this.link.split("//")[1];
      // e.g. google.com/path/to/home
      return domainAndPath.split("/")[0];
    } catch (err) {
      return null;
    }
  }
}
