<template>
    
<header>
<div class="text-center" :class="light"> <h1>{{title}}</h1> </div>
</header>


</template>


<script>
export default{
    name: 'TheHeader',
    data(){
        return{
            light: 'none',
            boolean: false
        }
    },
    props:{
        title: String
    },
    methods: {
        changeLight() {
            setInterval(()=> {
                this.boolean = !this.boolean;
            if( this.boolean == true){
                this.light = 'on';
            } else{ this.light = 'off'}}, 2000)
        }
    },
    mounted() {
        this.changeLight();
    }
}


</script>

<style scoped>
header{
    background-color: rgb(100, 100, 99);
    color: white;
    padding-top: .5rem;
    padding-bottom: .5rem;
    margin-bottom: 2rem;
    border-radius: 0px 0px 10px 10px;
    margin-left: 1rem;
    margin-right: 1rem;
}
div{
    transition: 2s;
}

.on{
    text-shadow: 0px 4px 8px rgb(241, 202, 130);
}
.off{
    text-shadow: none;
}
</style>
