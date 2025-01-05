import React from 'react';
import bannerImage from '../../../assets/menu/banner3.jpg';
import CoverSection from '../../../components/CoverSection/CoverSection';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import CategoryMenuWithButton from '../../../components/CategoryMenuWithButton/CategoryMenuWithButton';
import chefBg from '../../../assets/home/chef-service.jpg';

const OurMenus = () => {
    const [ menu, isPending, isError, error, refetch ] = useMenu();
    const popularMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'popular');
    const saladMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'salad');
    const pizzaMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'pizza');
    const soupMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'soup');
    const dessertMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'dessert');
    const drinksMenu = menu?.filter(menuItem => menuItem?.category.toLowerCase() === 'drinks');

    return (
        <section className='ourMenus'>
            <CoverSection title="Our Menu" sub_title="WOULD YOU LIKE TO TRY A DISH" image={bannerImage} />

            <div className='container mx-auto px-6 py-10'>
                {/* popularMenu section starts */}
                <SectionTitle sub_title="Don't Miss" title="TODAY'S OFFER" />
                <CategoryMenuWithButton meals={popularMenu} isPending={isPending} isError={isError} error={error} buttonText="Order Our Favorite Food" />
                {/* popularMenu section ends */}


                {/* saladMenu section starts */}
                <div className="py-10">
                    <CoverSection title="Salad" sub_title="Bistro Boss Restaurant offers a diverse menu featuring exquisite, freshly prepared dishes crafted from premium ingredients." image={chefBg} />
                </div>
                <CategoryMenuWithButton title="salad" meals={saladMenu.slice(0, 6)} isPending={isPending} isError={isError} error={error} buttonText="Order Our Favorite Food" />
                {/* saladMenu section ends */}

                {/* pizzaMenu section starts */}
                <div className="py-10">
                    <CoverSection title="Pizza" sub_title="Bistro Boss Restaurant offers a diverse menu featuring exquisite, freshly prepared dishes crafted from premium ingredients." image={chefBg} />
                </div>
                <CategoryMenuWithButton title="pizza" meals={pizzaMenu.slice(0, 6)} isPending={isPending} isError={isError} error={error} buttonText="Order Our Favorite Food" />
                {/* pizzaMenu section ends */}

                {/* soupMenu section starts */}
                <div className="py-10">
                    <CoverSection title="Soup" sub_title="Bistro Boss Restaurant offers a diverse menu featuring exquisite, freshly prepared dishes crafted from premium ingredients." image={chefBg} />
                </div>
                <CategoryMenuWithButton title="soup" meals={soupMenu.slice(0, 6)} isPending={isPending} isError={isError} error={error} buttonText="Order Our Favorite Food" />
                {/* soupMenu section ends */}

                {/* dessertMenu section starts */}
                <div className="py-10">
                    <CoverSection title="Dessert" sub_title="Bistro Boss Restaurant offers a diverse menu featuring exquisite, freshly prepared dishes crafted from premium ingredients." image={chefBg} />
                </div>
                <CategoryMenuWithButton title="dessert" meals={dessertMenu.slice(0, 6)} isPending={isPending} isError={isError} error={error} buttonText="Order Our Favorite Food" />
                {/* dessertMenu section ends */}

                {/* drinksMenu section starts */}
                <div className="py-10">
                    <CoverSection title="Drinks" sub_title="Bistro Boss Restaurant offers a diverse menu featuring exquisite, freshly prepared dishes crafted from premium ingredients." image={chefBg} />
                </div>
                <CategoryMenuWithButton title="drinks" meals={drinksMenu.slice(0, 6)} isPending={isPending} isError={isError} error={error} buttonText="Order Our Favorite Food" />
                {/* drinksMenu section ends */}
            </div>
        </section>
    );
};

export default OurMenus;