import React, { useState } from 'react';
import dataJson from '../data/skill-list.json'



function About(props) {
    // const renderStack = () => {
    //     const techStack = dataJson.skill[0].language;
    //     return techStack.map((item) => (
    //         <li key={item.id}>
    //             <div className='stack' style={{ ...stackStyle, backgroundImage: `linear-gradient(to bottom right, ${item.color}, white)` }}>
    //                 <p>{item.name}</p>
    //                 <img src='' />
    //             </div>
    //         </li>
    //     ));
    // }

    // console.log(dataJson.skill[0])

    // const renderFram =()=>{
    //     const techFram = dataJson.skill[0].framework;
    //     return techFram.map((item)=>(
    //         <li key={item.id}>
    //             <div className='stack' style={{ ...stackStyle, backgroundImage: `linear-gradient(to bottom right, ${item.color}, white)` }}>
    //                 <p>{item.name}</p>
    //                 <img src='' />
    //             </div>
    //         </li>
    //     ));
    // }

    // const rendEtc =()=>{
    //     const techEtc = dataJson.skill[0].ETC;
    //     return techEtc.map((item)=>(
    //         <li key={item.id}>
    //             <div className='stack' style={{ ...stackStyle, backgroundImage: `linear-gradient(to bottom right, ${item.color}, white)` }}>
    //                 <p>{item.name}</p>
    //                 <img src='' />
    //             </div>
    //         </li>
    //     ))
    // }

    const [heightY, setHeightY] = useState(false);
    const toggleSty = () => {
        setHeightY(prevState => !prevState);
    }

    const stackStyle = {
        transform: heightY ? 'translateY(0%)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out'
    }
    const lineHeight = {
        height: heightY ? '100%' : '54px',
        transition: 'transform 1s cubic-bezier(0.42, 0, 0.02, 0.99) 0s'
    }

    const [stackColor, setStackColor] = useState();

    const renders =(items)=>{
        const techEtc = items;
        return techEtc.map((item)=>(
            <li key={item.id}>
                <div className='stack' style={{ ...stackStyle, backgroundImage: `linear-gradient(to bottom right, ${item.color}, white)` }}>
                    <p>{item.name}</p>
                    <img src={item.img} />
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
                            <div className='skills-click'><span className='permanent'>Click me !</span></div>
                            <li className='skill-box' onClick={toggleSty}>
                                <h3>Language</h3>
                                <div className='skill-line one' style={lineHeight}></div>
                                <div className='skill-line two' style={lineHeight}></div>
                                <div className='skills-box'>
                                    <ul className='tech-stack'>
                                        {renders(dataJson.skill[0].language)}
                                    </ul>
                                </div>

                            </li>
                            <li className='skill-box'>
                                <h3 onClick={toggleSty}>Framework</h3>
                                <div className='skill-line one' style={lineHeight}></div>
                                <div className='skill-line two' style={lineHeight}></div>
                                <div className='skills-box'>
                                    <ul className='tech-stack'>
                                        {renders(dataJson.skill[0].framework)}
                                    </ul>
                                </div>
                            </li>
                            <li className='skill-box'>
                                <h3 onClick={toggleSty}>ETC</h3>
                                <div className='skill-line one' style={lineHeight}></div>
                                <div className='skill-line two' style={lineHeight}></div>
                                <div className='skills-box'>
                                    <ul className='tech-stack'>
                                        {renders(dataJson.skill[0].ETC)}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;