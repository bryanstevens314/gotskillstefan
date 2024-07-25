import React from 'react';

function ContactNow() {
    return (
        <section id="contact-now" className="component-section bg-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    id="firstName"
                                    name="firstName"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    id="lastName"
                                    name="lastName"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <button type="submit" className="cta-button">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

// <section id="contact-now" className="contact-now">
//     <h2>Contact NOW!</h2>
//     <form className="form-transition">
//         <label htmlFor="firstName">First Name:</label>
//         <input type="text" id="firstName" name="firstName" required />
//         <label htmlFor="lastName">Last Name:</label>
//         <input type="text" id="lastName" name="lastName" required />
//         <label htmlFor="email">E-mail:</label>
//         <input type="email" id="email" name="email" required />
//         <button type="submit" className="cta-button">
//             Submit
//         </button>
//     </form>
//     <div id="contactInfo" style={{ display: 'none' }}></div>
// </section>
export default ContactNow;
