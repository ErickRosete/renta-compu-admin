import React, { Component } from "react";

import MainAppBar from "../../components/Navigation/MainAppBar";
import MainDrawer from "../../components/Navigation/MainDrawer";

import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    }
});

export class Layout extends Component {
    state = {
        mobileOpen: false,
        expanded: null,
    };

    //expansion panel stuff
    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <header>
                    <MainAppBar
                        title={this.props.title}
                        onClick={this.handleDrawerToggle}
                    />
                </header>
                <MainDrawer
                    toggleDrawer={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    expanded={this.state.expanded}
                    handleChange={this.handleChange}
                />

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.children}
                </main>
                <footer></footer>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Layout);
