/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    let sorted = products.sort();

    let beginIndex = 0;
    let begin = sorted[beginIndex];

    let endIndex = sorted.length - 1;
    let end = sorted[endIndex];

    let result = [];

    reDo();
    function reDo() {
        let i = 0;
        while (i < searchWord.length) {
            console.log(`current i: ${i}`);
            console.log(`location of begin: ${beginIndex}`);
            console.log(`location of end: ${endIndex}`);
            let letter = searchWord[i];
            if (begin[i] === letter) {
                if (end[i] === letter) {
                    let numOfList = endIndex - beginIndex + 1;
                    if (numOfList > 3) {
                        result.push([
                            sorted[beginIndex],
                            sorted[beginIndex + 1],
                            sorted[beginIndex + 2],
                        ]);
                        i++;
                        console.log("pushed 3 times");
                        console.log(result);
                    } else {
                        for (let i = 0; i < numOfList; i++) {
                            result.push([sorted[beginIndex + i]]);
                            console.log(`pushed ${i} times!!`);
                            console.log(result);
                        }
                        i++;
                    }
                } else {
                    end = sorted[endIndex - 1];
                    endIndex--;
                    console.log("end moved");
                    console.log(`newloopStarting point: ${i}`);
                    reDo();
                }
            } else {
                begin = sorted[beginIndex + 1];
                beginIndex++;
                console.log("begin moved");
                console.log(`newloopStarting point: ${i}`);

                reDo();
            }
        }
        return this.result;
    }

    //     for (let i = loopStart; i < searchWord.length; i++) {
    //         console.log(`current i: ${i}`);
    //         console.log(`location of begin: ${beginIndex}`);
    //         console.log(`location of end: ${endIndex}`);
    //         let letter = searchWord[i];
    //         if (begin[i] === letter) {
    //             if (end[i] === letter) {
    //                 let numOfList = endIndex - beginIndex + 1;
    //                 if (numOfList > 3) {
    //                     result.push([
    //                         sorted[beginIndex],
    //                         sorted[beginIndex + 1],
    //                         sorted[beginIndex + 2],
    //                     ]);
    //                     console.log("pushed 3 times");
    //                     console.log(result);

    //                 } else {
    //                     for (let i = 0; i < numOfList; i++) {
    //                         result.push([sorted[beginIndex + i]]);
    //                         console.log(`pushed ${i} times!!`);

    //                     }
    //                 }
    //             } else {
    //                 end = sorted[endIndex - 1];
    //                 endIndex--;
    //                 loopStart = i;
    //                 console.log("end moved");
    //                 console.log(`newloopStarting point: ${loopStart}`);
    //                 result = [];
    //                 reDo();
    //             }
    //         } else {
    //             begin = sorted[beginIndex + 1];
    //             beginIndex++;
    //             loopStart = i;
    //             console.log("begin moved");
    //             console.log(`newloopStarting point: ${loopStart}`);
    //             result = [];
    //             reDo();
    //         }
    //     }
    //     return result;
    // }
};

let products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
let searchWord = "mouse";
console.log(suggestedProducts(products, searchWord));
