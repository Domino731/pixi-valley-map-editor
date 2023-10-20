/*
* Download json file
* @Param exportObject - object that you want to put into the file
* @Param fileName - name of the file
*  */
export const downloadJson = (exportObject: Record<string, any>, fileName: string): void => {
    console.log('click');
    // create data with passed export object
    const dataStr: string = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject));
    // create anchor needed for click event
    const downloadAnchorNode: HTMLAnchorElement = document.createElement('a');
    // set appropriate attributes
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", fileName + ".json");
    // simulate click on anchor to make file start downloading
    document.body.appendChild(downloadAnchorNode);  // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}