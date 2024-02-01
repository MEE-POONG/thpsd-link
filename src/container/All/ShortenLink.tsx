import Link from "next/link"
import { FormEvent, useState } from "react";

type LinkShortenerProps = {
    // define your props here
};


const ShortenLink: React.FC<LinkShortenerProps> = () => {
    const [longUrl, setLongUrl] = useState('');
    const [backHalf, setBackHalf] = useState('');

    // Handle your form submission logic here
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Implement your URL shortening logic
        // Use 'longUrl' and 'backHalf' as needed
    };
    return (
        <section>
            <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:py-16 lg:pt-28 ">
                <div className="place-self-center bg-white p-5 rounded-md drop-shadow-lg">
                    <h1 className=" mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                        Make every connection count
                        {/* <br /> */}
                        {/* products & brands. */}
                    </h1>
                    <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Shorten a long link</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="long-url" className="block text-sm font-medium text-gray-700">Paste a long URL</label>
                            <input
                                type="text"
                                id="long-url"
                                placeholder="Example: http://super-long-link.com/shorten-it"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={longUrl}
                                onChange={(e) => setLongUrl(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="domain" className="block text-sm font-medium text-gray-700">Domain</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">bit.ly</span>
                                <input
                                    type="text"
                                    id="domain"
                                    className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter a back-half (optional)"
                                    value={backHalf}
                                    onChange={(e) => setBackHalf(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Sign up and get your link</button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}
export default ShortenLink