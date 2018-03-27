import React from 'react';
import Cards from './components/Card/cards';
import RSSParser from 'rss-parser';

class PurelyGhost extends React.Component {

    render() {

        const { url } = this.props;

        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

        let parser = new RSSParser();
        parser.parseURL(CORS_PROXY + url + "/rss", function (err, feed) {
            console.log(feed.title);
            feed.items.forEach(function (entry) {
                console.log(entry);
            })
        });

        return (
            <div>
                <Cards/>
            </div>
        );
    }
};

export default PurelyGhost;