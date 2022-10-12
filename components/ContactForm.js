import Head from 'next/head'
import {motion} from "framer-motion";
import {useState} from "react";

export default function ContactForm() {

    const [show, setShow] = useState(false)

    async function handleOnSubmit(e) {
        e.preventDefault();

        const formData = {};

        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        console.log(formData)
    }

    if (show) {
        return (
            <div className="bg-white rounded-lg border border-gray-200 shadow-md my-10 px-6 prose prose-sm w-full lg:prose-lg py-5">
                <p className="">thanks for submitting form!</p>
            </div>
        )
    } else {
        return (
            <div className="bg-white rounded-lg border border-gray-200 shadow-md px-6 prose prose-sm w-full lg:prose-lg">

                <h3 className="text-2xl py-5">
                    Contact Me
                </h3>

                {/*TODO: create validation for inputs*/}

                <form onSubmit={handleOnSubmit} className="flex flex-col gap-5">

                    <div className="flex flex-col">
                        <label htmlFor="name">name</label>
                        <input id="name" type="text" name="name"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email">your email</label>
                        <input id="email" type="text" name="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5" />
                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="message">your message</label>
                        <textarea id="message" name="message"
                                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 pb-8" />
                    </div>


                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        className='py-2 px-3 text-sm font-medium text-center text-gray-800 border border-gray-200 border-2 rounded-lg mb-10'
                        onClick={() => setShow(true)}
                    >Submit
                    </motion.button>

                </form>


            </div>
        )
    }
}