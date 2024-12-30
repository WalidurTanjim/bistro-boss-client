import React from 'react';
import bannerImage from '../../../assets/shop/banner2.jpg';
import CoverSection from '../../../components/CoverSection/CoverSection';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useMenu from '../../../hooks/useMenu';
import CategoryMenuWithButton from '../../../components/CategoryMenuWithButton/CategoryMenuWithButton';
// import 'react-tabs/style/react-tabs.css';


const OurShop = () => {
    const [ menu, isPending, isError, error, refetch ] = useMenu();
    const popularMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'popular');
    const saladMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'salad');
    const pizzaMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'pizza');
    const soupMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'soup');
    const dessertMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'dessert');
    const drinksMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'drinks');

    return (
        <section className='ourShop'>
            <CoverSection title="Our Shop" sub_title="WOULD YOU LIKE TO TRY A DISH" image={bannerImage} />

            <div className='container mx-auto px-6 py-14'>
                <Tabs>
                    <TabList className="flex items-center justify-center gap-x-3 w-full uppercase overflow-auto">
                        <Tab className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 font-medium">Salad</Tab>
                        <Tab className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 font-medium">Pizza</Tab>
                        <Tab className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 font-medium">Soup</Tab>
                        <Tab className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 font-medium">Dessert</Tab>
                        <Tab className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 font-medium">Drinks</Tab>
                    </TabList>

                    <TabPanel className="pt-10">
                        <CategoryMenuWithButton meals={saladMenu} isPending={isPending} isError={isError} error={error} />
                    </TabPanel>
                    
                    <TabPanel>
                        <CategoryMenuWithButton meals={pizzaMenu} isPending={isPending} isError={isError} error={error} />
                    </TabPanel>

                    <TabPanel>
                        <CategoryMenuWithButton meals={soupMenu} isPending={isPending} isError={isError} error={error} />
                    </TabPanel>

                    <TabPanel>
                        <CategoryMenuWithButton meals={dessertMenu} isPending={isPending} isError={isError} error={error} />
                    </TabPanel>

                    <TabPanel>
                        <CategoryMenuWithButton meals={drinksMenu} isPending={isPending} isError={isError} error={error} />
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default OurShop;