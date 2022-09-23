/** @jsx h */
import { h } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts";

export const TeamMember = ({ 
    name,
    role
}) => {
    return (
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
                <img
                alt="..."
                src="./assets/img/sweet-board.jpg"
                class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">{ name }</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    { role }
                </p>
                <div class="mt-6">
                    <button
                        class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    > <i class="fab fa-twitter"></i>
                    </button>
                    <button
                        class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    > <i class="fab fa-facebook-f"></i>
                    </button>
                    <button
                        class="bg-green-500 text-black w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    > <i class="fab fa-spotify"></i>
                    </button>
                    {/* <button
                        class="bg-yellow text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    > <i class="fab fa-snapchat"></i>
                    </button> */}
                </div>
                </div>
            </div>
        </div>
    )
}

