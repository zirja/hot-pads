import React from 'react';
import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.png';
import img4 from '../img/img4.gif';

const Hello = ({ name }) => [
    <h1>Hello {name}</h1>,
    <img src={img1} />,
    <img src={img2} />,
    <img src={img3} />,
    <img src={img4} />
];

export default Hello;