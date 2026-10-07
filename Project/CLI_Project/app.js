import fs from "fs/promises"
const filename = process.argv[2];

const fileContent = await fs.readFile(filename, 'utf-8')

const wordArray = fileContent.split(/[\W]/). filter( (word) => word)

const wordsCount = {}

wordArray.forEach((word) =>{
    if(word in wordsCount){
        wordsCount[word] += 1
    }
    else{
        wordsCount[word] =1
    }
})

console.log(wordsCount)


 

/*
    import fs from "fs"

    const filename = process.argv[2];

    const data = fs.readfileSync(filename, 'utf-8');

    count words = data.toLowerCase().split(/\s +/);

    const frequency = {}

    for(const word of words){
        frequency[word] = (frequency[word] || 0) + 1
    }

    console.log(frequency)

*/

