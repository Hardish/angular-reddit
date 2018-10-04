/*
Step: 3.2 : creating the ArticleComponent class 
  1. we have to define new component with  @Component
  2. the selector says that this component is placed on the web page using tag <app-article></app-article> in markup
*/

/*
  Definition of class
*/
import { Component, OnInit, HostBinding, Input } from '@angular/core'; // Importing HostBinding from package

import { Article } from './article.model'; //import Article class here to use further

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
/* here we created 4 properties*/ 

export class ArticleComponent implements OnInit {


  //in angular, host is the element this component is attached to. we can set host property using host element @HostBinding() decorator. In this case we are asking angular to keep the values of the host elements class to be in sync with the property of CSS class
  //By using @HostBinding() the host element( the app-article tag) we want to set the class attribute to have "row"
  //Using the @HostBinding(), we can encapsulate the app-article markup within our component. thats why we dont have to use both an app-article tag and class="row" in the markup of the parent view. By using @HostBinding decorator , wr are able to configure our host element from within component.



  @HostBinding('attr.class') cssClass = 'row'; //cssClass: the Css class we want to apply to the "host" of this component.
  //we want each app-article to be on its own row. so we are using CSS Class for rows from  sementics UI
  /* commented due to Article class creation and instence use
  // votes: number; //represent sum of all upvotes and minus of downvotes
  // title: string; //a string holding the title of article
  // link: string; // a string holding link of the article
  */
  @Input() article: Article; // to get array of article from app.component.ts

  constructor() 
  {
    // this is hard coding our article so we changed and now Article is populate using @Input tag above to not needed 
   // this.article = new Article('angular 2','http://angular.io',10);
  }

  voteUp():boolean
  {
    //this.votes += 1;commented due to Article class creation and instence use
   // this.article.votes +=1;
   this.article.voteUp(); //to protect law of object should know less
    return false; // to avoid refresh after updating count
  }

  voteDown():boolean
  {
    // this.article.votes -=1;
    //this.votes -= 1; commented due to Article class creation and instence use
    this.article.voteDown(); //calling Article Class methods
    return false;
  }
  ngOnInit() {
  }

}

/*
voteUp() and voteDown() are changing  votes in article class

however this refactoring introduces another changes:
    we need to update our view to get the template variables from the right location
    for that we need to change our template tafs to read from Article. 
    Thats it , where before we had {{votes}}, we need to change it to {{article.votes} } and same with title and link in article.component.html
*/

/*
The idea is that the voteUp() on the ArticleCOmponent relates to the COmponent view, where as in Article class voteup() defines what mutations happen in the model
*/