/*
* Download json file
* @Param exportObject - object that you want to put into the file
* @Param fileName - name of the file
*  */
export const downloadJson = (exportObject: Record<string, any>, fileName: string): void => {
    const dataStr: string = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject));
    const downloadAnchorNode: HTMLAnchorElement = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", fileName + ".json");
    document.body.appendChild(downloadAnchorNode);  // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}