export class Article{
    title: string;
    link: string;
    votes: number; //sum of all votes,minus downvotes

    constructor(title: string,link: string, votes: number){
        this.title =title;
        this.link = link;
        this.votes = votes || 0;
    }
    voteUp(){
      this.votes +=1;
    }
    voteDown(){
      this.votes -=1;
    }

    domain(){
        try{
            // e.g. http://woho.com/path/to/bar
            const domainAndPath: string =this.link.split('//')[1];
            // e.g. woho.com/path/to/bar
            return domainAndPath.split('/')[0];
        } 
        catch(err){
            return null;
        }

    }
}
