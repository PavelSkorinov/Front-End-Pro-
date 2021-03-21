import React, { Component } from "react";
import Modal from "./Modal";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import {withStyles} from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        padding: '2px 4px',
        marginBottom: '30px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
});

class Container extends Component {

    constructor(props) {
        super(props);

        const data = localStorage.getItem('articles');
        const value = data ? JSON.parse(data) : [];
        this.articles = value;
        this.createArticle = this.createArticle.bind(this);
        this.removeArticle = this.removeArticle.bind(this);
        this.searchSpace = this.searchSpace.bind(this);
        this.state = {
            articles: value,
            search: null
        };
    };


    content = null;

    createArticle(data) {
        this.articles.push(data);
        this.setState({articles: this.articles});
        localStorage.setItem("articles", JSON.stringify(this.articles));

    };

    searchSpace(event) {
        let keyword = event.target.value;
        this.setState({
            search : keyword
        });
    };

    removeArticle(id) {
        this.articles = this.articles.filter(item => item.id !== id);
        this.setState({articles: this.articles});
        localStorage.setItem("articles", JSON.stringify(this.articles));
    };

    render() {
        const { classes } = this.props;
        const items = this.state.articles.filter((data) => {
            if(this.state.search == null)
                return data
            else if(data.tags.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
        }).map(data => {
            if (data.title && data.text && data.tags) {
                return ( <div key={data.id} className="articles-container">
                    <Link to={`/article/${data.id}`}  style={{ textDecoration: " none", display: 'block' }} className='articles'>
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
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search by tag"
                        onChange={this.searchSpace}
                    />
                </Paper>
                <div className='root'>
                    <Grid container>
                        <Grid container item>
                            <Grid item>
                                <Paper className='paper'>
                                    {items}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    };
}

export default withStyles(useStyles)(Container);

