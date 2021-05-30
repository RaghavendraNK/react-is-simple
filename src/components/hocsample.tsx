import React, { Component } from "react";
import { getTitles } from "../actions/posts";

const HOCSample = (WrappedComponent: any, path: string) => {
  return class extends Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      getTitles(path).then((data) => {
        this.setState({ data: data });
      });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default HOCSample;
