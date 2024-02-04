import React, { useState } from 'react';
import { QuestionsData } from '@/data/default';
import { FaChevronDown } from 'react-icons/fa';

const Questions: React.FC = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);
    const toggleItem = (id: number) => {
        setOpenItem(openItem === id ? null : id);
    };
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
                <h2
                    className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                    Frequently asked questions
                </h2>
                <div className="max-w-screen-md mx-auto">
                    <div id="accordion-flush" data-accordion="collapse"
                        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-inactive-classes="text-gray-500 dark:text-gray-400">
                        {QuestionsData.map((item) => (
                            <div key={item.id} className="pt-5">
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="flex justify-between w-full py-5 font-medium text-left text-gray-500 dark:text-gray-400 focus:outline-none"
                                    aria-expanded={openItem === item.id}
                                >
                                    <span>{item.title}</span>
                                    <FaChevronDown className={`w-6 h-6 transition-transform ${openItem === item.id ? 'transform rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openItem === item.id ? 'h-auto' : 'h-0'}`}>
                                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>




    )
}

export default Questions;