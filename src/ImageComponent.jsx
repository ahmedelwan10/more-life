
import { Component } from "react";

class ImageComponent extends Component {
    render () {
        return <img src= {this.props.MySrc}alt={this.props.MyAlt} />

    }
}
export default ImageComponent 
