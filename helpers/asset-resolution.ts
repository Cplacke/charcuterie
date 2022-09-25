
export const assetRouteHandler = async (pathname) => {
    // const assetPath = pathname.replace(
    //     /^.*\/assets/i, './assets'
    // );
    // console.info({ pathname, assetPath });
    const file = await Deno.readFile('.'+pathname);
    // Respond to the request with the style.css file.
    return new Response(file, {
        headers: getAssetHeadersFromPath(pathname)
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
        case /\.js$/:
            return {
                'content-type': 'application/javascript'
            };
        default:
            break;
    }
}