import { Component } from '@angular/core';
import { Article } from './article/article.model'; //imported Article class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //below title property was automatically generated for us on the appComponent. 
  //we aren't using the component title hence we are commenting out
  //title = 'angular-reddit';


  //defining the addArticle() function over here
  //this function will call when button is clicked and they are expecting 2 arguments value from template so we have to add in html file step 2:

  //Note:  title and link are object of type HTMLInputElement and not the input value directly. TO get the value from objects, we have to call objectName.value


  //NOTE: `` backsticks strings will expand the templates variables.${link.value} will replace with variables value.

  articles:Article[];  //component property. another way to rewrite this is Array<Article>

  

  constructor()
  {
    this.articles = [
      new Article('Angular 2','http://angular.io',3),
      new Article('Fullstack','http://fullstack.io',2),
      new Article('Angular Homepage','http://angular.io',1),
    ];
  }
  //now we have list of articles which we want to pass as a input and to the ArticleComponent.
  
  //now we want to add article when button is pressed,
  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean
  {
    console.log(`adding article title:${title.value} and link:${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));//now we want to add article when button is pressed.
    title.value ='';
    link.value = '';
    return false;
  }
  //we did above to add article when button is clicked
  //1.we create new Article instance with the submitted URL 
  //2.we add it to the array of Articles
  //3.clear the input field values(title and link are HTMLInputElement objects so we can set their property )

  sortedArticles() : Article[] 
  {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
  //this function making sure that on top of our app, highly votes link will present and it will sort and display articles accoring to there votes on homepage
}
