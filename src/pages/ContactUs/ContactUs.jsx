import React from 'react';
import CoverSection from '../../components/CoverSection/CoverSection';
import bannerImage from '../../assets/contact/banner.jpg';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ContactUs = () => {
    return (
        <section className="contact-us">
            <CoverSection title="Contact Us" sub_title="WOULD YOU LIKE TO TRY A DISH" image={bannerImage} />

            {/* our-location div starts */}
            <div className="our-location container mx-auto px-6 py-10">
                <SectionTitle sub_title="Visit Us" title="Our Location" />

                <div className='grid gap-5 grid-cols-1 md:grid-cols-3 '>
                    <div className="border">
                        <div className='w-full py-3 flex items-center justify-center bg-yellow-500'>
                            <PhoneIcon className="size-7 text-white" />
                        </div>

                        <div className='p-5 pt-0 h-[150px]'>
                            <div className="bg-gray-100 text-center h-full flex items-center justify-center">
                                <div>
                                    <h1 className='text-xl md:text-2xl font-medium uppercase pb-1'>Location</h1>
                                    <p>+880 1752 145978</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border">
                        <div className='w-full py-3 flex items-center justify-center bg-yellow-500'>
                            <MapPinIcon className="size-7 text-white" />
                        </div>

                        <div className='p-5 pt-0 h-[150px]'>
                            <div className="bg-gray-100 text-center h-full flex items-center justify-center">
                                <div>
                                    <h1 className='text-xl md:text-2xl font-medium uppercase pb-1'>Address</h1>
                                    <p>+880 1752 145978</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border">
                        <div className='w-full py-3 flex items-center justify-center bg-yellow-500'>
                            <ClockIcon className="size-7 text-white" />
                        </div>

                        <div className='p-5 pt-0 h-[150px]'>
                            <div className="bg-gray-100 text-center h-full flex items-center justify-center">
                                <div>
                                    <h1 className='text-xl md:text-2xl font-medium uppercase pb-1'>Working Hours</h1>
                                    <p>+880 1752 145978</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* send us a message div starts */}
            <div className="contact-form container mx-auto px-6 pb-10">
                <SectionTitle sub_title="Send Us A Message" title="Contact Form" />
            </div>
        </section>
    );
};

export default ContactUs;