/**
 * get sprite source path
 * @Param backgroundImage - background image url
 * */
export const getSpriteSrc = (backgroundImage: string): string => {
    const url: string = backgroundImage.slice((backgroundImage.lastIndexOf('/')) * -1);
    return url.slice(0, url.length - 2)
}