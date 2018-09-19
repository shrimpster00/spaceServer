import React, {Component} from 'react';
import classnames from "classnames";

import "./button.scss";

export default class Button extends Component {
    render() {
        let classes = ["btn-container"];
        classes.push(this.props.className);
        const buttonClassName = classnames(classes);
        // noinspection JSUnresolvedVariable
        return (
            <div className={buttonClassName} id={this.props.id} onClick={this.props.onClick}>
                <div className={"btn"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}