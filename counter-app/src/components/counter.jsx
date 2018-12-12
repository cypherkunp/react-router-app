import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log("Counter - constructor()");
  }

  componentDidMount() {
    console.log("Counter - componentDidMount()");
  }

  componentDidUpdate() {
    console.log("Counter - componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("Counter - componentWillUnmount()");
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  getRemoveButtonClass() {
    let classes = "btn btn-primary btn-sm m-2 ";
    classes += this.props.counter.value > 0 ? "" : "disabled";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    console.log("Counter - render()");
    return (
      <div>
        <div className="row">
          <div class="col col-1 m-2">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div class="col-md-auto">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-primary btn-sm m-2"
            >
              Add
            </button>
            <button
              className={this.getRemoveButtonClass()}
              onClick={() => this.props.onDecrement(this.props.counter)}
            >
              Remove
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
