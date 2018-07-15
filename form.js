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
      <div>
        <br /><br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Type in something:
            <input type="text" value={this.state.value} onChange={this.handleChange} />  
          </label>  
          <input type="submit" value="Submit" />
          <h2>{this.state.value}</h2>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <NameForm />
    <br /><br /><br />
    <h3><a href="https://github.com/Usheninte/react-forms">View on Github</a></h3>
  </div>,
  document.getElementById("app")
);