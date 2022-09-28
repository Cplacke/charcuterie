/** @jsx h */
import { h } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts";
import { YAMLtoJSON } from "https://deno.land/x/y2j/mod.ts";

import { 
    MainCard,
    ContactUs,
    TeamMember 
} from "./index.ts";


export const Home = ({ content }) => {
    return (
        <main>
            <div
                class="relative md:m-height-20 lg:m-height-75 pt-16 pb-32 flex content-center items-center justify-center"
            >
                <div class="absolute top-0 w-full h-full bg-center bg-cover"
                    style={`background-image: url('${content.header.img}');`}
                >
                    <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div class="container relative mx-auto">
                    <div class="items-center flex flex-wrap">
                        <div class="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                            <h1 class="text-white font-semibold text-5xl">
                                {content.header.title}
                            </h1>
                            <p class="mt-4 mb-5 text-lg text-gray-300">
                                {content.header.text}
                            </p>
                        </div>
                    </div>
                    <button class="bg-amber-200 px-8 py-2 rounded text-xl mx-auto block mt-12"
                        id="order-now-button"
                    > <h2 class="text-2xl">Order Now</h2>
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
                        {
                            content.cards.map(card => (
                                <MainCard
                                    title={card.title}
                                    text={card.text}
                                    icon={card.icon}
                                    iconClass={card.iconClass}
                                    imgClass={card.imgClass}
                                    src={card.img}
                                />
                            ))
                        }
                    </div>
                    <div class="flex flex-wrap items-center mt-32">
                        <div class="w-full md:w-6/12 px-4 mr-auto ml-auto">
                            <div
                                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
                            >
                                <i class="fas fa-yin-yang text-xl"></i>
                            </div>
                            <h3 class="text-3xl mb-2 font-semibold leading-normal">
                                {content.main.summary.title}
                            </h3>
                            {
                                content.main.summary.paragraphs.map(paragraph => (
                                    <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                        {paragraph}
                                    </p>
                                ))
                            }
                        </div>
                        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-teal-600"
                            >
                                <img alt="..." src={content.main.sideImage.img}
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
                                        {content.main.sideImage.title}
                                    </h4>
                                    <p class="text-md font-light mt-2 text-white">
                                        {content.main.sideImage.text}
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
                                <div class="text-center inline-flex items-center justify-center w-1/2 mb-6 shadow-lg">
                                    <img class="rounded" src="https://cdn.britannica.com/14/4314-004-A1CFEB4A/state-flag-South-Carolina-Union-fort-palmetto-1861.jpg"
                                    />
                                </div>
                                <h3 class="text-3xl font-semibold">{content.main.origins.title}</h3>
                                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                                    {content.main.origins.text}
                                </p>
                                <ul class="list-none mt-6">
                                    {
                                        content.main.origins.bullets.map(bullet => (
                                            <li class="py-2">
                                                <div class="flex items-center">
                                                    {/* <div> */}
                                                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-gray-200 mr-3"
                                                    ><i class={bullet.icon}></i></span>
                                                    {/* </div>
                                            <div> */}
                                                    <h4 class="text-gray-600 text-sm">{bullet.text}</h4>
                                                    {/* </div> */}
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pt-20 pb-48">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center text-center mb-6">
                        <div class="w-full lg:w-6/12 px-4">
                            <h2 class="text-2xl font-semibold">{content.main.team.title}</h2>
                            {/* <p class="text-lg leading-relaxed m-4 text-gray-600">
                        According to the National Oceanic and Atmospheric
                        Administration, Ted, Scambos, NSIDClead scentist, puts the
                        potentially record maximum.
                    </p> */}
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center">
                        {
                            content.main.team.members.map(member => (
                                <TeamMember
                                    name={member.name}
                                    role={member.role}
                                />
                            ))
                        }
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
                    <div class="flex flex-wrap text-center justify-center">
                        <div class="w-full lg:w-6/12 px-4">
                            <h2 class="text-4xl font-semibold text-white">
                                {content.main.contact.title}
                            </h2>
                            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                                {content.main.contact.text}
                            </p>
                        </div>
                    </div>
                    <div id="order-form" class="flex flex-wrap mt-12 justify-center">
                        {
                            content.main.contact.items.map(item => (
                                <div class="w-full lg:w-3/12 px-4 text-center">
                                    <div
                                        class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                                    >
                                        <i class={item.icon + " text-xl"}></i>
                                    </div>
                                    <h6 class="text-xl mt-5 font-semibold text-white">
                                        {item.title}
                                    </h6>
                                    <p class="mt-2 mb-4 text-gray-500 text-sm">
                                        {item.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section class="relative block py-24 lg:pt-0 bg-gray-900">
                <ContactUs />
            </section>

        </main>
    )
}