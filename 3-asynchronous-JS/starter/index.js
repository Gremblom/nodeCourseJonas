const fs = require('fs');
const superagent = require('superagent');

const hola = [2, 3];

const readFilePro = file=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(file, (err, data)=>{
            if (err) reject('I could not find that file');

            resolve(data);
        });
    });
}

const writeFilePro = (file, data)=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(file, data, err =>{
            if (err) reject('Could not write file');
            resolve('success');
        });
    });
}

const getDogPic = async ()=>{
    try {
        const imgs = [];

        const data = await readFilePro(`${__dirname}/dog.txt`);

        const str = data.toString();
        const razas = str.split(',');

        console.log(`Breed: ${razas}`);

        razas.forEach(async (raza)=>{
            try {
                const res = await superagent.get(`https://dog.ceo/api/breed/${raza}/images/random`);
                imgs.push(res.body.message);                
                    
                await writeFilePro('dog-img.txt', imgs.join('\n'));

            } catch (error) {
                console.log(error.message);
            }
        });

        console.log('Random dog image saved to file!'); 

    } catch (err) {
        console.log(err.message);

        throw err;
    }

    return '2: Ready!';
}

(async ()=>{
    try {
        console.log('1: Will get dog pics!');

        const x = await getDogPic();
        console.log(x);

        console.log('3: Done getting dog pics!');
    } catch (err) {
        console.log(err.message);
    }
})();