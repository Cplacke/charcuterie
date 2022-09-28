/** @jsx h */
import { h, Router } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts";



export const Navigation = () => {
    return (
        <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div class="w-full relative flex justify-between w-auto block justify-start">
                    <a class="text-sm h-full font-bold leading-relaxed inline-block mr-4 p-2 rounded whitespace-nowrap uppercase text-white active:bg-gray-100 active:text-gray-700 hover:bg-amber-200"
                        href="/" style="transition: all 0.15s ease 0s;"
                    >
                        Home
                    </a>
                    <a class="text-sm h-full font-bold leading-relaxed inline-block mr-4 p-2 rounded whitespace-nowrap uppercase text-white active:bg-gray-100 active:text-gray-700 hover:bg-amber-200"
                        href="/gallery" style="transition: all 0.15s ease 0s;"
                    >
                        View Gallery
                    </a>
                    {/* <button
                        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onclick="toggleNavbar('example-collapse-navbar')"
                    >
                        <i class="text-white fas fa-bars"></i>
                    </button> */}
                    <ul class="flex flex-col flex-row list-none ml-auto">
                        {/* <li class="flex items-center"> */}
                        {/* <a
                            class="text-white hover:text-gray-300 text-gray-800 px-3 py-4 py-2 flex items-center text-xs uppercase font-bold"
                            href="#pablo"
                            ><i
                            class="text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "
                            ></i
                            ><span class="hidden inline-block ml-2">Share</span></a
                        >
                        </li>
                        <li class="flex items-center">
                        <a
                            class="text-white hover:text-gray-300 text-gray-800 px-3 py-4 py-2 flex items-center text-xs uppercase font-bold"
                            href="#pablo"
                            ><i
                            class="text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "
                            ></i
                            ><span class="hidden inline-block ml-2">Tweet</span></a
                        >
                        </li>
                        <li class="flex items-center">
                        <a
                            class="text-white hover:text-gray-300 text-gray-800 px-3 py-4 py-2 flex items-center text-xs uppercase font-bold"
                            href="#pablo"
                            ><i
                            class="text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "
                            ></i
                            ><span class="hidden inline-block ml-2">Star</span></a
                        >
                        </li> */}
                        <li class="flex items-center">
                            <button
                                class="bg-blue-500 text-white active:bg-gray-100 active:text-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-0 ml-3 mb-3"
                                type="button"
                                style="transition: all 0.15s ease 0s;"
                            >
                                <i class="fab fa-facebook"></i> connect on facebook
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}