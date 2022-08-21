export type FileNameAndNumber = [string, number]

export const getFileNameAndNumber = (defualtFilename : string,
    defualtFilenameOfFakeData:number):FileNameAndNumber => {
        const [bin, node, filename, numberOfFakeData] = process.argv
        return [filename || defualtFilename, numberOfFakeData ?
             parseInt(numberOfFakeData, 10): defualtFilenameOfFakeData]
    }