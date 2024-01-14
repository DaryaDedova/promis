    document.querySelector('.btn_1').onclick = ()=> {
        function promOne() {
            return new Promise((resolve, reject) =>{
                setTimeout(() => {
                    resolve('Привет');
                }, 1000)
            })
        }
    
        promOne().then((value) =>{
                console.log(value);
            })
    }
    

    document.querySelector('.btn_2').onclick = ()=>{
        let two = new Promise((resolve, reject) =>{
            setTimeout(() => {
                reject('Пока');
            }, 1000)
        })
            
    two.then((value) =>{
            console.log(value);
        })

    }


    document.querySelector('.btn_3').onclick = ()=>{
        function promThree() {
            return new Promise((resolve, reject) =>{
                setTimeout(() => {
                    resolve('3 секунды');
                }, 3000)
            })
        }
        
        promThree().then((value) =>{
                console.log(value);
            })
    }

    
    document.querySelector('.btn_4').onclick = ()=>{
        function promies1 (){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Первая функция');
                }, 2000)
            })
        }
    
        function promies2 (){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('Вторая функция');
                })
            })
        }
    
        promies1()
            .then((value) =>{
                console.log(value);
                return promies2();
            })
            .then((value) =>{
                console.log(value);
            })
    }
    
    document.querySelector('.btn_5').onclick = ()=>{
        async function getPosts(url){
            try{
                const response = await fetch(url)
                const posts = await response.json();
                return posts;
            } catch(error){
                console.warn(error);
                return error;
            }
        }
        
        getPosts('https://jsonplaceholder.typicode.com/albums')
            .then(data => console.log(data))
        
    
    }

    document.querySelector('.btn_6').onclick = ()=>{
        async function getPosts(url){
            try{
                const response = await fetch(url)
                const posts = await response.json();
                return posts;
            } catch(error){
                console.warn(error);
                return error;
            }
        }
            
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then(data => 
                    document.querySelector('div').innerHTML = JSON.stringify(data))
            .catch(console.error)
    }

    
    
    
        


    