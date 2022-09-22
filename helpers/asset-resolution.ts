
export const assetRouteHandler = async (pathname) => {

    const assetPath = pathname.replace(
        /^.*\/assets/i, './assets'
    )
    console.log({ assetPath, cwd: Deno.cwd() });
    const file = await Deno.readFile(assetPath);
    // Respond to the request with the style.css file.
    return new Response(file, {
        headers: {
            "content-type": "text/css",
        },
    });
}

const getAssetHeadersFromPath = (pathname) => {
    switch (pathname) {
        case /\.css$/:
            return {
                'content-type': 'text/css'
            };
        case /\.jp(e)?g$/:
            return {
                'content-type': 'image/jpg'
            };
        default:
            break;
    }
}