import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../card';


test('Test that Card renders correctly', () => {

    const post = {
        link: "http://www.someurl.com",
        creator: "The Author",
        title: "The title",
        content: "<h1>The Content</h1><img src=\"www.someaddr.com\" alt=\"alt text\"><p>more content</p>"
    };

    const component = renderer.create(
        <Card post={post}/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});