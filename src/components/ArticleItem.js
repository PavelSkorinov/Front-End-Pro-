import React, { Component } from 'react';

class ArticleItem extends Component {
    constructor(props) {
        super(props);
        const data = localStorage.getItem("articles");
        if (data) {
            this.articles = JSON.parse(data);
            const { id } = this.props.match.params;
            this.current = this.articles.find(item => item.id === id);
        }
    };

    render() {
        if (this.current) {
            return (
                <div>
                    <div className='article'>
                        Title:
                        {this.current.title}
                    </div>
                    <div className='article'>
                        Text:
                        {this.current.text}
                    </div>
                    <div className='article'>
                        Tags:
                        {this.current.tags}
                    </div>
                </div>
            );
        }
        return (<div/>);
    };
}
export default ArticleItem
