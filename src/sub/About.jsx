import React, { useState } from 'react';
import dataJson from '../data/skill-list.json'



function About(props) {

    const renders = (items) => {
        const techEtc = items;
        return techEtc.map((item) => (
            <li key={item.id}>
                <div className='stack'>
                    <div className='stackDt'>
                        <div className='stackImg'>
                            <img src={item.img} />  
                        </div>
                        <p>{item.name}</p>
                    </div>
                    <div className='stackPro'>
                        {item.pro}
                    </div>
                </div>
            </li>
        ))
    }

    return (
        <>
            <section className='sct2' id='About'>
                <div className='sct2-content2'>
                    <h2>이런걸 할 수있는 <span className='permanent'>me !</span></h2>
                    <div>
                        <ul className='skills-conteiner'>
                            <div className='what'>
                                <li className='skill-box'>
                                    <h3>자신있다!</h3>
                                    <div className='skills-box'>
                                        <ul className='tech-stack'>
                                            {renders(dataJson.skill[0].language)}
                                        </ul>
                                    </div>
                                </li>
                            </div>

                            <div className='what'>
                                <li className='skill-box'>
                                    <h3>배우고 있다!</h3>
                                    <div className='skills-box'>
                                        <ul className='tech-stack'>
                                            {renders(dataJson.skill[0].framework)}
                                        </ul>
                                    </div>
                                </li>
                                <li className='skill-box'>
                                    <h3>이런 것도?</h3>
                                    <div className='skills-box'>
                                        <ul className='tech-stack'>
                                            {renders(dataJson.skill[0].ETC)}
                                        </ul>
                                    </div>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;