/** @jsx h */
import { h } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts";


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
                                Complete this form and we will get back to you in 48 hours.
                            </p>
                            <div id="order-form-error-banner" class="border rounded border-red-500 text-red-500 bg-red-200 flex p-1">
                                <i class="w-2/12 p-3 text-xl fas fa-exclamation-triangle"></i>
                                <div class="w-10/12">
                                    Please complete all required fields in order to start a request
                                </div>
                            </div>
                            <div id="order-form-success-banner" class="hidden rounded border border-emerald-500 text-emerald-500 bg-emerald-200 flex p-1">
                                <i class="w-2/12 p-3 text-xl fas fa-vote-yea"></i>
                                <div class="w-10/12 py-2">
                                    <div>Request successfully submitted!</div>
                                    <div>
                                        You should receive a confirmation email shortly. 
                                        We will take a look and get back to you as soon as we can and begin planing with you!
                                    </div>
                                </div>
                            </div>
                            <div id="order-form-inputs">
                                <div class="relative w-full mb-3 mt-8">
                                    <label
                                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        for="full-name"
                                    > Full Name </label>
                                    <input id="order-form-name"
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
                                    > Email </label>
                                    <input id="order-form-email"
                                        type="email"
                                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                        placeholder="Email"
                                        style="transition: all 0.15s ease 0s;"
                                    />
                                </div>
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        for="message"
                                    > Message </label>
                                    <textarea id="order-form-message"
                                        rows="4"
                                        cols="80"
                                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                        placeholder="Tell us a little about your event and what we can do to help..."
                                    ></textarea>
                                </div>
                                <div class="text-center mt-6">
                                    <button id="order-form-submit"
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
        </div>
    )
}