/*
right now we only one article. but we want to add list of articles which is not possible in case we paste another <app-article> tag as it will generate same information in all articles

to overcome this problem, in angular we create an Article Class itself,

A good practice when writting Angular code is to try to isolate the data structure we are using from the component code.

to do this, lets create data structure that represent the single article.

we created this file(Article.model.ts in article folder) for it.

this is plain class and not angular component

*/
export class Article {
    title: string; // we must need it while creating new Article
    link: string; // we must need it while creating new Article
    votes: number; //vote parameneter is optional and we defined it by ? in constructor

    constructor(title:string,link:string,votes?:number)
    {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp():void 
    {
        this.votes += 1;
    }

    voteDown():void
    {
        this.votes -= 1;
    }

    domain():string //its utility function extracts the domain from URL
    {
        try{
            const domainAndPath: string = this.link.split('//')[1];//http://foo.com/path/to/bar
            return domainAndPath.split('/')[0];//foo.com/path/to/bar
        }catch(err)
        {
            return null;
        }
        
    }//now change the ArticleComponent to call these methods
}

// next step is to update ArticleComponent code to use our new Article class.
//insted of storing the properties directly on the ArticleComponent componemt, lets store the properties on an instance of the article class.


