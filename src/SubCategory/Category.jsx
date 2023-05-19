import {  useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Avengers from '../CardComponents/Avengers';
import Dcs from '../CardComponents/Dcs';
import StarWars from '../CardComponents/StarWars';

const Category = () => {
    const [avengers, setAvengers] = useState([])
    const [dcs, setDcs] = useState([])
    const [starWars, setStarWars] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/category/1`)
            .then(res => res.json())
            .then(data => setAvengers(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/category/2`)
            .then(res => res.json())
            .then(data => setDcs(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/category/3`)
            .then(res => res.json())
            .then(data => setStarWars(data))
    }, [])

    return (
        <div className='md:mx-24 my-24'>
            <h1 className='text-6xl font-semibold text-center '>ACTION HERO TOYS</h1>
            <Tabs>
                <TabList>
                    <p className='underline mb-2'>Sub-Category list Check it.</p>
                    <Tab>Avengers</Tab>
                    <Tab>DC</Tab>
                    <Tab>Star Wars</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-2 gap-12'>
                        {
                            avengers.map(avenger => <Avengers
                                key={avenger.name}
                                avenger={avenger}
                            ></Avengers>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 gap-12'>
                        {
                            dcs.map(dc => <Dcs
                                key={dc.name}
                                dc={dc}
                            ></Dcs>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 gap-12'>
                        {
                            starWars.map(starWar => <StarWars
                                key={starWar.name}
                                starWar={starWar}
                            ></StarWars>)
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Category;