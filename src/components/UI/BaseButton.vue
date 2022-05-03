<template>
    
<button :type="type" :class="customStyle"> 
    
    <slot> </slot>
    
     </button>

</template>


<script>
export default {
    props: {
        type: String,
        customStyle: {
            default: 'defaultButton'
        }
    }
}
</script>

<style scoped>

.defaultButton{
    background-color: rgb(241, 202, 130);
    border: none;
    letter-spacing: 1px;
    border-radius: 5px;
    transition: .15s;
}
.defaultButton:hover{
    background-color: orange;
    color: rgb(255, 255, 255);
}

.defaultButton:active{
    color: black;
}

.minimal{
    background-color: transparent;
    border: none;
    letter-spacing: 1px;
    transition: .15s; 
}
.minimal:hover{
    text-decoration: underline black;
}

</style>