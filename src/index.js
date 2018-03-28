import React from 'react';
import Cards from './components/Card/cards';
import RSSParser from 'rss-parser';

class PurelyGhost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    addPosts(posts) {
        this.setState({
            isLoading: false,
            posts: posts,
        });
    }

    componentDidMount() {
        const {url} = this.props;
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

        let parser = new RSSParser();
        parser.parseURL(CORS_PROXY + url + "/rss", (err, feed) => {
            this.addPosts(feed.items);
        });
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <div>wait</div>}
                {!this.state.isLoading && <Cards posts={this.state.posts}/>}
            </div>
        );
    }
};

export default PurelyGhost;