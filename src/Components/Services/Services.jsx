import React from 'react';
import frontEnd from './../img/Front-End Dev.jpg';
import defaultImage from './../img/default img.jpeg'; // Path to your default image
import './Services.css';

const Services = () => {
    const handleError = (event) => {
        console.error("Image failed to load:", event.target.src);
        event.target.src = defaultImage; // Set default image on error
    };

    return (
        <div>
            <section className='services'>
                <div className="container">
                    <h1 className='servicesTitle'>Services</h1>
                    <div className='title-divider'></div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="service-box card p-3 mb-4">
                                <img
                                    src={frontEnd}
                                    alt="Front End Development"
                                    className="frontendimg img-fluid"
                                    onError={handleError}
                                />
                                <div class="card-body">
                                    <h3 class="card-title">Service 1</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut unde architecto iusto at distinctio rerum totam voluptatum porro. Molestiae illum sint ratione in ipsam! Recusandae suscipit repudiandae vero est reiciendis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="service-box card p-3 mb-4">
                                <img
                                    src={frontEnd}
                                    alt="Front End Development"
                                    className="frontendimg img-fluid"
                                    onError={handleError}
                                />
                                <div class="card-body">
                                    <h3 class="card-title">Service 1</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut unde architecto iusto at distinctio rerum totam voluptatum porro. Molestiae illum sint ratione in ipsam! Recusandae suscipit repudiandae vero est reiciendis.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 col-sm-12">
                            <div className="service-box card p-3 mb-4">
                                <img
                                    src={frontEnd}
                                    alt="Front End Development"
                                    className="frontendimg img-fluid"
                                    onError={handleError}
                                />
                                <div class="card-body">
                                    <h3 class="card-title">Service 2</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut unde architecto iusto at distinctio rerum totam voluptatum porro. Molestiae illum sint ratione in ipsam! Recusandae suscipit repudiandae vero est reiciendis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Services;
