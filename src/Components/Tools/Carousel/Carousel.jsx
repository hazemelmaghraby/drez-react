import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'; // For star icons
import './Carousel.css'; // Ensure this file is created for custom styles

const clientOpinions = [
    {
        name: "Client One",
        opinion: "Great experience working with this developer. Highly recommended!",
        rating: 5,
        date: "January 15, 2023",
        image: "https://randomuser.me/api/portraits/men/1.jpg", // Random profile pic
    },
    {
        name: "Client Two",
        opinion: "Professional and timely delivery. I’m very satisfied with the outcome.",
        rating: 4,
        date: "February 10, 2023",
        image: "https://randomuser.me/api/portraits/women/1.jpg", // Random profile pic
    },
    {
        name: "Client Three",
        opinion: "The project exceeded my expectations. Would hire again!",
        rating: 5,
        date: "March 5, 2023",
        image: "https://randomuser.me/api/portraits/men/2.jpg", // Random profile pic
    }, {
        name: "Salma Eldsoky",
        opinion: "The project exceeded my expectations. Would hire again!",
        rating: 5,
        date: "March 5, 2023",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
    }
];

const CarouselComponent = () => {
    return (
        <>
            <div className="carousel-container">
                <h1 style={{ position: 'absolute', zIndex: '3', color: 'white', top: '0%' }}>My Clients</h1>
                <div className="carousel-background"></div>
                <Carousel className="carousel">
                    {clientOpinions.map((client, index) => (
                        <Carousel.Item key={index}>
                            <div className="carousel-content text-center">
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="client-image"
                                />
                                <h3>{client.name}</h3>
                                <p>{client.opinion}</p>
                                <div className="rating">
                                    {[...Array(5)].map((star, i) => (
                                        <FaStar key={i} color={i < client.rating ? "#ffc107" : "#e4e5e9"} />
                                    ))}
                                </div>
                                <small style={{ marginBottom: '200px' }}>{client.date}</small>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default CarouselComponent;
