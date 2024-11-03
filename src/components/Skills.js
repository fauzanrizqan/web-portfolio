// src/components/Skills.js
import React, { useState } from 'react';
import './Skills.css';
import { FaPython, FaJava, FaJs } from 'react-icons/fa';
import { SiHaskell, SiC, SiCplusplus } from 'react-icons/si';
import { SiDjango, SiSpring, SiFlutter, SiTensorflow, SiPytorch, 
    SiPostgresql, SiReact, SiSvelte, SiSnowpack, SiNodedotjs, SiBootstrap
    , SiOnnx, SiPandas, SiNumpy
} from 'react-icons/si';

function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const categories = {
        ProgrammingLanguages: [
            { id: 'python', name: 'Python', icon: <FaPython />, description: 'A high-level, interpreted programming language known for its ease of use.' },
            { id: 'java', name: 'Java', icon: <FaJava />, description: 'A class-based, object-oriented programming language.' },
            {id: 'javascript', name: 'JavaScript', icon: <FaJs />, description: 'A high-level, interpreted programming language that conforms to the ECMAScript specification.'},
            {id: 'c', name: 'C', icon: <SiC />, description: 'A general-purpose, procedural computer programming language.'},
            {id: 'cpp', name: 'C++', icon: <SiCplusplus />, description: 'A general-purpose programming language created as an extension of the C programming language.'},
            {id: 'Haskell', name: 'Haskell', icon: <SiHaskell />, description: 'A statically typed, purely functional programming language with type inference and lazy evaluation.'},

        ],
        SoftwareDevelopment: [
            { id: 'django', name: 'Django', icon: <SiDjango />, description: 'A high-level Python Web framework that encourages rapid development.' },
            { id: 'spring', name: 'Spring Boot', icon: <SiSpring />, description: 'Framework for building enterprise applications in Java.' },
            { id: 'flutter', name: 'Flutter', icon: <SiFlutter />, description: 'An open-source UI software development kit created by Google.' },
            { id: 'react', name: 'React', icon: <SiReact />, description: 'A JavaScript library for building user interfaces.' },
            { id: 'svelte', name: 'Svelte', icon: <SiSvelte />, description: 'A new way to build web applications.' },
            { id: 'snowpack', name: 'Snowpack', icon: <SiSnowpack />, description: 'A lightning-fast frontend build tool.' },
            { id: 'nodejs', name: 'Node.js', icon: <SiNodedotjs />, description: 'An open-source, cross-platform, back-end JavaScript runtime environment.' },
            { id: 'bootstrap', name: 'Bootstrap', icon: <SiBootstrap />, description: 'A free and open-source CSS framework directed at responsive, mobile-first front-end web development.' },


        ],
        Databases: [
            { id: 'postgresql', name: 'PostgreSQL', icon: <SiPostgresql />, description: 'A powerful, open source object-relational database system.' },
        ],
        MachineLearning: [
            { id: 'pytorch', name: 'PyTorch', icon: <SiPytorch />, description: 'An open source machine learning library based on the Torch library.' },
            { id: 'tensorflow', name: 'TensorFlow', icon: <SiTensorflow />, description: 'An end-to-end open source platform for machine learning.' },
            { id: 'onnx', name: 'ONNX', icon: <SiOnnx />, description: 'An open format built to represent machine learning models.' },
            { id: 'pandas', name: 'Pandas', icon: <SiPandas />, description: 'A fast, powerful, flexible and easy to use open source data analysis and data manipulation library.' },
            { id: 'numpy', name: 'NumPy', icon: <SiNumpy />, description: 'The fundamental package for scientific computing with Python.' },

        ],
    };

    const handleClick = (skill) => {
        setSelectedSkill(skill);
    };

    const handleClose = () => {
        setSelectedSkill(null);
    };

    return (
        <div className="skills-container">
            <h2>Skills</h2>
            {Object.entries(categories).map(([category, skills]) => (
                <div key={category}>
                    <h3>{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    <div className="skills-grid">
                        {skills.map(skill => (
                            <div key={skill.id} onClick={() => handleClick(skill)} className="skill">
                                {skill.icon}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {selectedSkill && (
                <div className="skill-popup">
                    <button onClick={handleClose}>Close</button>
                    <h3>{selectedSkill.name}</h3>
                    <p>{selectedSkill.description}</p>
                </div>
            )}
        </div>
    );
}

export default Skills;
