function B(){
    setTimeout(function(){
        console.log('Xin chào js!', 5000);
    })
}

async function A(){
    const resultA = await B();
    console.log('NODEJS: ');
    return B();
}

A();


