//Github Pages LINK === https://usheninte.github.io/react-forms/form.html

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit(event) {
    alert('This was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />  
        </label>  
        <input type="submit" value="Submit" />
        <h2>{this.state.value}</h2>
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById("app")
);