import React, {Component} from "react";
import styles from "./Searchbar.module.scss";

interface stateTypes {
  value: string,
}

interface propTypes {
  onSubmit: any,
}

class Searchbar extends Component<propTypes, stateTypes> {
  state = {
    value: "",
  }

  handleChange = ({target}: {target: any}) => {
    this.setState({value: target.value});
  }
  handleSubmit = (event: any) => {
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