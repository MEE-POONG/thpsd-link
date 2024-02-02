import React, { useState } from 'react';

type QuestionsItem = {
    id: number;
    title: string;
    content: string;
};
const QuestionsData: QuestionsItem[] = [
    {
        id: 1,
        title: 'Can I use Landwind in open-source projects?',
        content: 'Landwind is an open-source library...',
    },
    {
        id: 2,
        title: 'Is there a Figma file available?',
        content: 'Landwind is first conceptualized and designed using Figma...',
    },
    // ... add more items as needed
];
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
                                    <svg
                                        className={`w-6 h-6 transition-transform ${openItem === item.id ? 'transform rotate-180' : ''
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-height duration-300 ${openItem === item.id ? 'h-auto' : 'h-0'
                                        }`}
                                >
                                    <p className="py-5 text-gray-500 dark:text-gray-400">{item.content}</p>
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