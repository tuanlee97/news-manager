import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      isRedirect : false
    }
  }
  isChange = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;
    this.setState({
      [ten]:giatri
    })
    
  }
  isFileChange = (event) => {
 
    const cvValue = event.target.files[0].name;
    this.setState({
      fCv:cvValue
    })
    
  }
  getGiatri =() => {
    var noiDung = "";
    noiDung += " Tên : " + this.state.fName;
    noiDung += " | Email : " + this.state.fEmail;
    noiDung += " | Phone : " + this.state.fPhone;
    noiDung += " | Message : " + this.state.fMessage;
    noiDung += " | Giới tính : " + this.state.fGioitinh;
    noiDung += " | File CV : " + this.state.fCv;
    return noiDung ;

  }
  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      isRedirect:true
    })
  }
    render() {
      if(this.state.isRedirect){
       console.log(this.getGiatri())
        return <Redirect to ="/"/>
      }
        return (
          
            <div>
                    <div>
  {/* begin container */}
  <header className="masthead tintuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-5">Liên hệ</h1>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* end container */}
  {/* begin contact */}
  <section className="page-section" id="contact">
    <div className="container">
      {/* Contact Section Heading */}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên hệ với chúng tôi</h2>
      {/* Icon Divider */}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon">
        </div>
        <div className="divider-custom-line" />
      </div>
      {/* Contact Section Form */}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input onChange = {(event)=> this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input onChange = {(event)=> this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input onChange = {(event)=> this.isChange(event)}  name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea  onChange = {(event)=> this.isChange(event)} name="fMessage" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="gender">Giới tính : </label>
              <select className="form-control" name="fGioitinh" id="gender" onChange={(event)=> this.isChange(event)}>
                <option value="men">Nam</option>
                <option value="women">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div className="form-group">
        <label htmlFor="CV" />Nộp CV
        <input onChange={(event)=> this.isFileChange(event)} type="file" className="form-control-file" name="fCv" id="CV" placeholder="Nộp CV " aria-describedby="fileHelpId" />
      </div>

            <br />
            <div id="success" />
            <div className="form-group">
              <button onClick = {(event)=> this.submitForm(event)} type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* end contact */}
</div>

            </div>
        );
    }
}

export default Contact;