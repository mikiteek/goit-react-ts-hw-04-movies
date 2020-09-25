import React, {Component} from "react";
import styles from "./Searchbar.module.scss";

class Searchbar extends Component {
  state = {
    value: "",
  }

  handleChange = ({target}) => {
    this.setState({value: target.value});
  }
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({value: ""});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Searchbar;