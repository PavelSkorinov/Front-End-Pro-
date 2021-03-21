import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import {v4 as uuidv4} from "uuid";
import {TextField} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        }
}});

class ModalPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                title: '',
                text: '',
                tags: ''
            },
            isOpen: false,
            buttonClick: false
        };
        this.createArticle = this.createArticle.bind(this);
        this.getValueOfArticle = this.getValueOfArticle.bind(this);
    };

    createArticle(e) {
        e.preventDefault();
        const id = uuidv4();
        const data = {
            id,
            title: this.state.form.title,
            text: this.state.form.text,
            tags: this.state.form.tags,
        };
        this.props.onCreateArticle(data);
        this.setState({
            form: {
                title: '',
                text: '',
                tags: ''
            }
        });
    };

    handleClickOpen = () => {
        this.setState({
            isOpen: true
        });
    };

    handleClose = () => {
        this.setState({
            isOpen: false
        });
    };

    handleCreate = () => {
        this.setState({
            isOpen: false,
            buttonClick: true
        });
    };

    getValueOfArticle(event) {
        this.setState( (prevState) => ({
            form: {
                ...prevState.form,
                [event.target.name]: event.target.value
            }
        }));
    };


    render() {
        const { classes } = this.props;

        return(
            <div className='container-div'>
                <div className='container-button'>
                    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                        Create Article
                    </Button>
                </div>
                <Dialog open={this.state.isOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Enter your article title, text and tags</DialogTitle>
                    <form onSubmit={this.createArticle} noValidate autoComplete="off" className='form'>
                        <TextField type="text" className='input-field' value={this.state.form.title} onChange={this.getValueOfArticle}  variant="outlined" name="title" label="Title"/>
                        <TextField type="text" className='input-field' value={this.state.form.text} onChange={this.getValueOfArticle} variant="outlined" name="text" label="Text"/>
                        <TextField type="text" className='input-field' value={this.state.form.tags} onChange={this.getValueOfArticle} variant="outlined" name="tags" label="Tags"/>
                       <div className={classes.root}>
                           <Button onClick={this.handleClose} variant="contained" color='primary' className='button-create'>
                               Cancel
                           </Button>
                           <Button type="submit"  variant="contained" onClick={this.handleCreate} color='primary' className='button-create'>
                               Create Article
                           </Button>
                       </div>
                    </form>
                </Dialog>
            </div>
        );
    };
}
export default withStyles(useStyles)(ModalPopUp)


