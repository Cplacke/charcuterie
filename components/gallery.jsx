/** @jsx h */
import { h } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts";

export const Gallery = ({ content }) => {

    const colorArray = [ 'amber', 'red', 'blue', 'emerald', 'purple', 'orange', 'indigo' ];
    const getGalleryBg = (index) => ( `bg-${colorArray[index % colorArray.length]}-200` );
    
    return (
        <div id="gallery" class="bg-gray-300">
            <div class="relative md:m-height-20 lg:m-height-75 pt-16 pb-32 flex content-center items-center justify-center">
                <div class="absolute top-0 w-full h-full bg-center bg-cover"
                    style={`background-image: url('${content.header.img}');`}
                >
                    <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div class="container relative mx-auto">
                    <div class="items-center flex flex-wrap">
                        <div class="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                            <h1 class="text-white font-semibold text-5xl">
                                {content.gallery.title}
                            </h1>
                            <p class="mt-4 mb-5 text-lg text-gray-300">
                                {content.gallery.text}
                            </p>
                        </div>
                    </div>
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

            <div id="photo-gallery-items" class="w-10/12 mx-auto flex flex-wrap items-center">
                {
                    content.gallery.images.map((image, i) => (
                        <div class={"pt-6 px-4 text-center lg:w-6/12 w-full object-fit "+image.imgClass}>
                            <div
                                class={`relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg ${getGalleryBg(i)}`}
                            >
                                <div class="px-4 py-5 flex-auto">
                                    { image.title && <h6 class="text-xl font-semibold">{ image.title }</h6> }
                                    <p class="mt-2 mb-4 text-base text-gray-600">
                                        <img class="mt-2 rounded-lg mx-auto" src={ image.img } />
                                        { image.text && text }
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}