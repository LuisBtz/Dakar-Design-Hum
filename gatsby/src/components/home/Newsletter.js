import React from 'react'
import styled from 'styled-components';
import addToMailchimp from "gatsby-plugin-mailchimp"


// markup
class Newsletter extends React.Component {

  constructor() {
    super()
    this.state = {
      message: "Subscribe to our newsletter",
      name: "",
      email: "",
      result: null,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
    }) // listFields are optional if you are only capturing the email address.
      .then(data => {

        this.setState({ message: data.msg })
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
    this.setState({ email: "", name: "" })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }

  render() {

    return (
      <NewsletterWrapper>

        <h2 className="detail">{this.state.message}</h2>


        <div className='links'>
            <form className="subscribe" onSubmit={this.handleSubmit}>
                <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    name="EMAIL"
                    id="mce-EMAIL"
                    className="subscribe-email"
                    placeholder="SUBSCRIBE"
                    required
                />
            <button className="btn_sent" type="submit">≥</button>
            </form>
        </div>

      </NewsletterWrapper>

    )
  }
}

const  NewsletterWrapper = styled.section`
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    padding: 50px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    .links {
        form {
            display: flex;
            button {
                padding: 10px 20px;
                font-family: var(--bold);
                background-color: var(--yellow);
                display: block;
                border: solid 1px black;
            }
            input {
                font-family: var(--reg);
                background-color: var(--yellow);
                padding-left: 15px;
                padding-right: 50px;
                border: solid 1px black;
                border-right: none;
                ::placeholder,
                ::-webkit-input-placeholder {
                    color: black;
                }
                :-ms-input-placeholder {
                    color: black;
                }
            }
            input:focus, button:focus {
                outline: 0;
            }
        }
    }

@media (max-width: 780px) {
    flex-direction: column;
    .links {
        margin-top: 50px;
    }
}
`

export default Newsletter