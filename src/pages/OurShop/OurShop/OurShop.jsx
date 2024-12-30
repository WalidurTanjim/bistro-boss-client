import React from 'react';
import bannerImage from '../../../assets/shop/banner2.jpg';
import CoverSection from '../../../components/CoverSection/CoverSection';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


const OurShop = () => {
    

    return (
        <section className='ourShop'>
            <CoverSection title="Our Shop" sub_title="WOULD YOU LIKE TO TRY A DISH" image={bannerImage} />

            <div className='container mx-auto px-6 py-14'>
                <Tabs>
                    <TabList className="flex items-center justify-center gap-x-3 w-full uppercase">
                        <Tab className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 font-medium">Salad</Tab>
                        <Tab className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 font-medium">Pizza</Tab>
                        <Tab className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 font-medium">Soup</Tab>
                        <Tab className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 font-medium">Dessert</Tab>
                        <Tab className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 font-medium">Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Salad</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Pizza</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Soup</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Dessert</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Drinks</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default OurShop;