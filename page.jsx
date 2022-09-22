/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h, Component } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts";
import { 
    Navigation, 
    ContactUs,
    MainCard,
} from "./components/index.ts";

export class Page extends Component {

    render() {
        return (
            <body class="text-gray-800 antialiased">
                <Navigation/>
                <main>
                <div
                    class="relative lg:m-height-20 lg:m-height-75 pt-16 pb-32 flex content-center items-center justify-center"
                >
                    <div class="absolute top-0 w-full h-full bg-center bg-cover"
                        style="background-image: url('./assets/img/grad.jpg');"
                    >
                    <span
                        id="blackOverlay"
                        class="w-full h-full absolute opacity-75 bg-black"
                    ></span>
                    </div>
                    <div class="container relative mx-auto">
                    <div class="items-center flex flex-wrap">
                        <div class="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                            <h1 class="text-white font-semibold text-5xl">
                                Charcuterie &amp; More by Dylan
                            </h1>
                            <p class="mt-4 mb-5 text-lg text-gray-300">
                                This is a simple example of a Landing Page you can build using
                                Tailwind Starter Kit. It features multiple CSS components
                                based on the Tailwindcss design system.
                            </p>
                        </div>
                    </div>
                    <button class="bg-amber-200 px-8 py-4 rounded text-xl mx-auto block mt-12"
                        onClick={ () => window.document.querySelector('#order-form').scrollIntoView() }
                        onclick="document.querySelector('#order-form').scrollIntoView()"
                    > Order Now 
                    </button>
                    </div>
                    <div
                        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style="height: 70px;"
                    >
                    <svg
                        class="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            class="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                    </div>
                </div>
                <section class="pb-20 bg-gray-300 -mt-24">
                    <div class="container mx-auto px-4">
                        <div class="flex flex-wrap">
                            <MainCard 
                                title="Make Your Gathering Extraordinary"
                                text="Children, adults, grandparents? Bring everyone together and create an help create the excitement in the air, and watch everyone's face light up with happiness."
                                icon="far fa-star"
                                iconClass="text-white bg-red-400"
                                src="./assets/img/grad-2022.jpg"
                            />
                            <MainCard 
                                title="Fresh, Local, Unforgettable"
                                text="Your guests &amp; our community are what's most important to us, and that your gathering is unforgettable and everyone can graze to their hearts content!"
                                icon="fas fa-award"
                                iconClass="text-white bg-blue-400"
                                src="./assets/img/charcute.jpg"
                                imgClass="rounded-full mt-5"
                            />
                            <MainCard 
                                title="Made Just for You"
                                text="Our selection of boards, party platters, and grazing table all personalized for you and your event. We make sure everyone has something delicious to bring a smile to your face."
                                icon="fas fa-fingerprint"
                                iconClass="text-white bg-green-400"
                                src="./assets/img/breakfast-board.jpg"
                            />
                        </div>
                        <div class="flex flex-wrap items-center mt-32">
                            <div class="w-full md:w-6/12 px-4 mr-auto ml-auto">
                                <div
                                    class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
                                >
                                    <i class="fas fa-user-friends text-xl"></i>
                                </div>
                                <h3 class="text-3xl mb-2 font-semibold leading-normal">
                                    Working with you is our pleasure
                                </h3>
                                <p
                                    class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
                                >
                                    Don't let your uses guess by attaching tooltips and popoves to
                                    any element. Just make sure you enable them first via
                                    JavaScript.
                                </p>
                                <p
                                    class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
                                >
                                    The kit comes with three pre-built pages to help you get started
                                    faster. You can change the text and images and you're good to
                                    go. Just make sure you enable them first via JavaScript.
                                </p>
                            </div>
                            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div
                                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-teal-600"
                                >
                                    <img alt="..." src="./assets/img/kids.jpg"
                                        class="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote class="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            class="absolute left-0 w-full block"
                                            style="height: 95px; top: -94px;"
                                        >
                                            <polygon
                                            points="-30,95 583,95 583,65"
                                            class="text-teal-600 fill-current"
                                            ></polygon>
                                        </svg>
                                        <h4 class="text-xl font-bold text-white">
                                            Top Notch Services
                                        </h4>
                                        <p class="text-md font-light mt-2 text-white">
                                            The Arctic Ocean freezes every winter and much of the
                                            sea-ice then thaws every summer, and that process will
                                            continue whatever happens.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="relative py-20">
                    <div
                    class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style="height: 80px;"
                    >
                    <svg
                        class="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                        class="text-white fill-current"
                        points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                    </div>
                    <div class="container mx-auto">
                    <div class="items-center flex flex-wrap">
                        <div class="w-full md:w-6/12 ml-auto mr-auto px-4">
                        <img
                            alt="..."
                            class="max-w-full rounded-lg shadow-lg"
                            src="./assets/img/may-river.jpg"
                        />
                        </div>
                        <div class="w-full md:w-5/12 mt-4 ml-auto mr-auto px-4">
                        <div class="md:pr-12">
                            <div class="text-teal-600 text-center inline-flex items-center justify-center w-1/2 mb-6 shadow-lg">
                                <img class="rounded" src="https://cdn.britannica.com/14/4314-004-A1CFEB4A/state-flag-South-Carolina-Union-fort-palmetto-1861.jpg" 
                                />
                            </div>
                            <h3 class="text-3xl font-semibold">Born in the Low Country</h3>
                            <p class="mt-4 text-lg leading-relaxed text-gray-600">
                                Something pretty here about SC and its inspirations, Something pretty here about SC and its inspirations, Something pretty here about SC and its inspirations,
                            </p>
                            <ul class="list-none mt-6">
                            <li class="py-2">
                                <div class="flex items-center">
                                <div>
                                    <span
                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3"
                                    ><i class="fas fa-fingerprint"></i
                                    ></span>
                                </div>
                                <div>
                                    <h4 class="text-gray-600">
                                    Carefully crafted components
                                    </h4>
                                </div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="flex items-center">
                                <div>
                                    <span
                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3"
                                    ><i class="fab fa-html5"></i
                                    ></span>
                                </div>
                                <div>
                                    <h4 class="text-gray-600">Amazing page examples</h4>
                                </div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="flex items-center">
                                <div>
                                    <span
                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3"
                                    ><i class="far fa-paper-plane"></i
                                    ></span>
                                </div>
                                <div>
                                    <h4 class="text-gray-600">Dynamic components</h4>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section class="pt-20 pb-48">
                    <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center text-center mb-24">
                        <div class="w-full lg:w-6/12 px-4">
                        <h2 class="text-4xl font-semibold">Here are our heroes</h2>
                        <p class="text-lg leading-relaxed m-4 text-gray-600">
                            According to the National Oceanic and Atmospheric
                            Administration, Ted, Scambos, NSIDClead scentist, puts the
                            potentially record maximum.
                        </p>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div class="px-6">
                            <img
                            alt="..."
                            src="./assets/img/sweet-board.jpg"
                            class="shadow-lg rounded-full max-w-full mx-auto"
                            style="max-width: 120px;"
                            />
                            <div class="pt-6 text-center">
                            <h5 class="text-xl font-bold">Ryan Tompson</h5>
                            <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                Web Developer
                            </p>
                            <div class="mt-6">
                                <button
                                class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-twitter"></i></button
                                ><button
                                class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-facebook-f"></i></button
                                ><button
                                class="bg-teal-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-dribbble"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div class="px-6">
                            <img
                            alt="..."
                            src="./assets/img/sweet-board.jpg"
                            class="shadow-lg rounded-full max-w-full mx-auto"
                            style="max-width: 120px;"
                            />
                            <div class="pt-6 text-center">
                            <h5 class="text-xl font-bold">Romina Hadid</h5>
                            <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                Marketing Specialist
                            </p>
                            <div class="mt-6">
                                <button
                                class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-google"></i></button
                                ><button
                                class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-facebook-f"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div class="px-6">
                            <img
                            alt="..."
                            src="./assets/img/sweet-board.jpg"
                            class="shadow-lg rounded-full max-w-full mx-auto"
                            style="max-width: 120px;"
                            />
                            <div class="pt-6 text-center">
                            <h5 class="text-xl font-bold">Alexa Smith</h5>
                            <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                UI/UX Designer
                            </p>
                            <div class="mt-6">
                                <button
                                class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-google"></i></button
                                ><button
                                class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-twitter"></i></button
                                ><button
                                class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-instagram"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div class="px-6">
                            <img
                            alt="..."
                            src="./assets/img/sweet-board.jpg"
                            class="shadow-lg rounded-full max-w-full mx-auto"
                            style="max-width: 120px;"
                            />
                            <div class="pt-6 text-center">
                            <h5 class="text-xl font-bold">Jenna Kardi</h5>
                            <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                Founder and CEO
                            </p>
                            <div class="mt-6">
                                <button
                                class="bg-teal-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-dribbble"></i></button
                                ><button
                                class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-google"></i></button
                                ><button
                                class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-twitter"></i></button
                                ><button
                                class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                >
                                <i class="fab fa-instagram"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section class="pb-20 relative block bg-gray-900">
                    <div
                    class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style="height: 80px;"
                    >
                    <svg
                        class="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                        class="text-gray-900 fill-current"
                        points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                    </div>
                    <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
                    <div id="order-form" class="flex flex-wrap text-center justify-center">
                        <div class="w-full lg:w-6/12 px-4">
                        <h2 class="text-4xl font-semibold text-white">Build something</h2>
                        <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                            Put the potentially record low maximum sea ice extent tihs year
                            down to low ice. According to the National Oceanic and
                            Atmospheric Administration, Ted, Scambos.
                        </p>
                        </div>
                    </div>
                    <div class="flex flex-wrap mt-12 justify-center">
                        <div class="w-full lg:w-3/12 px-4 text-center">
                        <div
                            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                        >
                            <i class="fas fa-medal text-xl"></i>
                        </div>
                        <h6 class="text-xl mt-5 font-semibold text-white">
                            Excelent Services
                        </h6>
                        <p class="mt-2 mb-4 text-gray-500">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                        </div>
                        <div class="w-full lg:w-3/12 px-4 text-center">
                        <div
                            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                        >
                            <i class="fas fa-poll text-xl"></i>
                        </div>
                        <h5 class="text-xl mt-5 font-semibold text-white">
                            Grow your market
                        </h5>
                        <p class="mt-2 mb-4 text-gray-500">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                        </div>
                        <div class="w-full lg:w-3/12 px-4 text-center">
                        <div
                            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                        >
                            <i class="fas fa-lightbulb text-xl"></i>
                        </div>
                        <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>
                        <p class="mt-2 mb-4 text-gray-500">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                        </div>
                    </div>
                    </div>
                </section>
    
                <section class="relative block py-24 lg:pt-0 bg-gray-900">
                    <ContactUs/>
                </section>
    
                </main>
                <footer class="relative bg-gray-300 pt-8 pb-6">
                <div
                    class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style="height: 80px;"
                >
                    <svg
                    class="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                    >
                    <polygon
                        class="text-gray-300 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                    </svg>
                </div>
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                        <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
                        <h5 class="text-lg mt-0 mb-2 text-gray-700">
                        Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div class="mt-6">
                        <button
                            class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                            type="button"
                        >
                            <i class="flex fab fa-twitter"></i></button
                        ><button
                            class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                            type="button"
                        >
                            <i class="flex fab fa-facebook-square"></i></button
                        ><button
                            class="bg-white text-teal-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                            type="button"
                        >
                            <i class="flex fab fa-dribbble"></i></button
                        ><button
                            class="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                            type="button"
                        >
                            <i class="flex fab fa-github"></i>
                        </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex flex-wrap items-top mb-6">
                        <div class="w-full lg:w-4/12 px-4 ml-auto">
                            <span
                            class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                            >Useful Links</span
                            >
                            <ul class="list-unstyled">
                            <li>
                                <a
                                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                href="https://www.creative-tim.com/presentation"
                                >About Us</a
                                >
                            </li>
                            <li>
                                <a
                                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                href="https://blog.creative-tim.com"
                                >Blog</a
                                >
                            </li>
                            <li>
                                <a
                                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                href="https://www.github.com/creativetimofficial"
                                >Github</a
                                >
                            </li>
                            <li>
                                <a
                                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                href="https://www.creative-tim.com/bootstrap-themes/free"
                                >Free Products</a
                                >
                            </li>
                            </ul>
                        </div>
                        <div class="w-full lg:w-4/12 px-4">
                            <span
                            class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                            >Other Resources</span
                            >
                            <ul class="list-unstyled">
                            <li>
                                <a
                                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                                >MIT License</a
                                >
                            </li>
                            <li>
                                <a
                                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                href="https://creative-tim.com/terms"
                                >Terms &amp; Conditions</a
                                >
                            </li>
                            <li>
                                <a
                                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                href="https://creative-tim.com/privacy"
                                >Privacy Policy</a
                                >
                            </li>
                            <li>
                                <a
                                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                href="https://creative-tim.com/contact-us"
                                >Contact Us</a
                                >
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr class="my-6 border-gray-400" />
                    <div
                    class="flex flex-wrap items-center md:justify-between justify-center"
                    >
                    <div class="w-full lg:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-gray-600 font-semibold py-1">
                        Copyright © 2019 Tailwind Starter Kit by
                        <a
                            href="https://www.creative-tim.com"
                            class="text-gray-600 hover:text-gray-900"
                            >Creative Tim</a
                        >.
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
            </body>
        )
    }
}