import React, { Component } from "react";
import Modal from "./Modal";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Container extends Component {

    constructor(props) {
        super(props);

        const data = localStorage.getItem('articles');
        const value = data ? JSON.parse(data) : [];
        this.articles = value;
        this.createArticle = this.createArticle.bind(this);
        this.removeArticle = this.removeArticle.bind(this);
        this.state = {
            articles: value
        };
    };


    content = null;

    createArticle(data) {
        this.articles.push(data);
        this.setState({articles: this.articles});
        localStorage.setItem("articles", JSON.stringify(this.articles));

    };

    removeArticle(id) {
        this.articles = this.articles.filter(item => item.id !== id);
        this.setState({articles: this.articles});
        localStorage.setItem("articles", JSON.stringify(this.articles));
    };

    render() {
        const list = this.state.articles.map(data => {
            if (data.title && data.text) {
                return ( <div key={data.id}>
                    <Link to={`/article/${data.id}`}  style={{ textDecoration: " none" }} className='articles'>
                        <div className='article'>
                            Title:
                            {data.title}
                        </div>
                        <div className='article'>
                            Text:
                            {data.text}
                        </div>
                        <div className='article'>
                            Tags:
                            {data.tags}
                        </div>
                    </Link>
                    <Button variant="contained" color="primary" onClick={() => this.removeArticle(data.id)}>
                    Remove Article
                    </Button>
                </div>);
            }
        });

        return (
            <div className='container'>
                <Modal onCreateArticle={this.createArticle}/>
                <div className='root'>
                    <Grid container>
                        <Grid container item>
                            <Grid item>
                                <Paper className='paper'>
                                    {list}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    };
}

export default Container;

