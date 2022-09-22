/** @jsx h */
import { h } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";


export const ContactUs = () => {
    return (
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div class="w-full lg:w-6/12 px-4">
                    <div
                        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                    >
                        <div class="flex-auto p-5 lg:p-10">
                            <h4 class="text-2xl font-semibold">Want to order from us?</h4>
                            <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                                Complete this form and we will get back to you in 24 hours.
                            </p>
                            <div class="relative w-full mb-3 mt-8">
                                <label
                                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="full-name"
                                >Full Name</label
                                ><input
                                    type="text"
                                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Full Name"
                                    style="transition: all 0.15s ease 0s;"
                                />
                            </div>
                            <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="email"
                                >Email</label
                                ><input
                                    type="email"
                                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Email"
                                    style="transition: all 0.15s ease 0s;"
                                />
                            </div>
                            <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="message"
                                >Message</label
                                ><textarea
                                    rows="4"
                                    cols="80"
                                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Tell us a little about your event and what we can do to help..."
                                ></textarea>
                            </div>
                            <div class="text-center mt-6">
                                <button
                                    class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    style="transition: all 0.15s ease 0s;"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}