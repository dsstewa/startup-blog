import React, { Component } from 'react'


class Signup extends Component {
      constructor() {
            super();
            this.state = {
              firstName: "",
              lastName: "",
              email: ""
            }
          }
      
        handleChange = event => {
          console.log(this.state)
            this.setState({
                [event.target.name]: event.target.value
            })
          }
          
        handleSubmit = event => {
          event.preventDefault();
         
          this.props.addUser()
          this.setState = {
            firstName: "",
            lastName: "",
            email: ""
          }
        }
  
    render() {
      console.log(this.props)
        return (
            <div className="card bg-primary text-center card-form">
                    <div className="card-body">
                      <h3>Sign up Today</h3>
                      <p>for Vendrix updates!</p>
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input onChange={this.handleChange}
                            type="text"
                            name="firstName"
                            className="form-control form-control-lg"
                            placeholder="firstname"
                          />
                        </div>
                        <div className="form-group">
                          <input onChange={this.handleChange}
                            type="text"
                            name="lastName"
                            className="form-control form-control-lg"
                            placeholder="lastname"
                          />
                        </div>
                        <div className="form-group">
                          <input onChange={this.handleChange}
                            type="text"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="email"
                          />
                        </div>
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-outline-light btn-block"
                        />
                      </form>
                    </div>
                  </div>
        )
    }
}

export default Signup