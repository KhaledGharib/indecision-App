import React from "react";

//////////////////////

import Action from "./Action";
import AddOption from "./AddOptions";
import Footer from "./Footer";
import Header from "./Header";
import OptionModal from "./OptionModal";
import Options from "./Options";

/////////////////////
class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: [],
    }));
  };

  handleClear = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handlePick = () => {
    //Generate a random number depending on how many elements are in the array of "options"
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handleAppOption = (option) => {
    if (!option) {
      return "Enter vaild value to add itme";
      // Using indexOf() to seach element
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("option");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do Nothing at all
    }
  }

  componentDidUpdate(prevPorops, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("option", json);
    }
  }

  componentWillUnmount() {
    console.log("did unmount");
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              handleDeleteOptions={this.handleDeleteOptions}
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAppOption={this.handleAppOption} />
          </div>
          <Footer />
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: [],
};

export default IndecisionApp;
