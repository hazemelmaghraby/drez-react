// src/Footer.js
import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    EmailIcon,
} from 'react-share';
import './Footer.css'; // For the additional styling

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const shareUrl = window.location.href;
    const title = "Check out this awesome website!";

    return (
        <>
            <section className="Footer">
                <div className="container">
                    <footer className="text-center text-lg-start text-muted">
                        {/* Social Media Section */}
                        <section className="social-media p-4 border-bottom">
                            <div className="d-none d-lg-block">
                                <span className="connect-text">Get connected with us on social networks:</span>
                            </div>

                            <div className="social-icons">
                                <FacebookShareButton url={shareUrl} quote={title} className="me-4 text-reset">
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                <TwitterShareButton url={shareUrl} title={title} className="me-4 text-reset">
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                <LinkedinShareButton url={shareUrl} title={title} className="me-4 text-reset">
                                    <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                                <EmailShareButton url={shareUrl} subject={title} className="me-4 text-reset">
                                    <EmailIcon size={32} round />
                                </EmailShareButton>
                            </div>
                        </section>

                        {/* Footer Content */}
                        <section className="footer-content">
                            <div className="container text-center text-md-start mt-5">
                                <div className="row mt-3">
                                    {/* Company Info */}
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        <h5 className="footer-title">DRE.$</h5>
                                        <p className="footer-text">
                                            Join the DRE.$ Marketplace Community, become a part of the DRE.$ Marketplace community and explore a world of digital possibilities.
                                        </p>
                                        <a href="#!" className="footer-link">Our Team</a>
                                    </div>

                                    {/* Products Section */}
                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="footer-heading">Products</h6>
                                        <ul className="footer-list">
                                            <li><a href="#!" className="footer-link">Angular</a></li>
                                            <li><a href="#!" className="footer-link">React</a></li>
                                            <li><a href="#!" className="footer-link">Vue</a></li>
                                            <li><a href="#!" className="footer-link">Laravel</a></li>
                                        </ul>
                                    </div>

                                    {/* Useful Links */}
                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="footer-heading">Useful Links</h6>
                                        <ul className="footer-list">
                                            <li><a href="#!" className="footer-link">Pricing</a></li>
                                            <li><a href="#!" className="footer-link">Settings</a></li>
                                            <li><a href="#!" className="footer-link">Admin Rules</a></li>
                                            <li><a href="#!" className="footer-link">Help</a></li>
                                        </ul>
                                    </div>

                                    {/* Contact Section */}
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footer-contact">
                                        <h6 className="footer-heading">Contact</h6>
                                        <ul className="footer-list">
                                            <li><i className="fa fa-home me-3"></i> New York, NY 10012, US</li>
                                            <li><i className="fa fa-envelope me-3"></i> DRE.$.Adminstraion@yahoo.com</li>
                                            <li><i className="fa fa-phone me-3"></i> +20 1147273196</li>
                                            <li><i className="fa fa-print me-3"></i> +1 206 848 1729</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Copyright */}
                        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                            © {currentYear} Copyright:
                            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                                <span className="thedre-link">The_DRE</span> and <span className="Maria-link">Maria W. Miller</span>
                            </a>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    );
};

export default Footer;
