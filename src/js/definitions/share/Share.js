
var kanColleWidget = kanColleWidget || {};

(function(){
    var Share = kanColleWidget.Share = function(){};
    Share.prototype.url = "";
    Share.prototype.defaultOpt = {
        target : "_blank",
        windowOpt : "width=550,height=260"
    };
    Share.prototype.share = function(opt) {
        opt = opt || this.defaultOpt;
        window.open(this.url, opt.target, opt.windowOpt);
    };

    var Twitter = kanColleWidget.Twitter = function(){
        this.baseUrl = "https://twitter.com/intent/tweet/update?";
    };
    Twitter.prototype = Object.create(Share.prototype);
    Twitter.prototype.constructor = Twitter;
    Twitter.prototype.shareCreateItem = function(params){
        var tweet_body = "[開発報告] #kancolle_item\n";
        tweet_body += "資材 => " + params.api_item1[0] + "/" + params.api_item2[0] + "/" + params.api_item3[0] + "/" + params.api_item4[0] + "\n";
        tweet_body += "結果 => ";
        this.url = this.baseUrl + "text=" + encodeURIComponent(tweet_body);
        return this.share();
    };
    Twitter.prototype.shareCreateShip = function(params){
        var tweet_body = "[建造報告] #kancolle_ship\n";
        tweet_body += "資材 => " + params.api_item1[0] + "/" + params.api_item2[0] + "/" + params.api_item3[0] + "/" + params.api_item4[0] + "\n";
        tweet_body += "結果 => ";
        this.url = this.baseUrl + "text=" + encodeURIComponent(tweet_body);
        return this.share();
    };

})();
