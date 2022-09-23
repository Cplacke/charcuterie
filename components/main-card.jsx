/** @jsx h */
import { h } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts";


export const MainCard = ({
    title,
    text,
    icon,
    iconClass,
    src,
    imgClass,
}) => {
    return (
        <div class="lg:pt-12 pt-6 w-full lg:w-4/12 px-4 text-center">
            <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
                <div class="px-4 py-5 flex-auto">
                <div
                    class={"p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full "+iconClass}
                >
                    <i class={ icon }></i>
                </div>
                <h6 class="text-xl font-semibold">{ title }</h6>
                <p class="mt-2 mb-4 text-base text-gray-600">
                    { text }
                    <img class={"mt-2 rounded-lg mx-auto "+imgClass} src={ src } />
                </p>
                </div>
            </div>
        </div>
    )
}