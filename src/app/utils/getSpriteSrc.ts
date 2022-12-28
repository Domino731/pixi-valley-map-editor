export const getSpriteSrc = (backgroundImage: string): string => {
    const url = backgroundImage.slice((backgroundImage.lastIndexOf('/')) * -1);
    return url.slice(0, url.length - 2)
}