<template>
    <div id="landing-page-header">
         <img src="../assets/logo.png" alt="logo">
        <h1 id="name">{{appName }}</h1>
        </div>
</template>
<script>
export default {
    data(){
    return{
        appName: 'Quiz App'
    }
    },
}
</script>
<style  scoped>
#landing-page-header {
    display: flex;
    align-content: center
}

#landing-page-header img {
    width: 80px;
    height: 80px;
    align-items: center;
    margin-top: 30px;
    padding-right: 5px;
}
#name {
    margin-top: 50px;
    margin-bottom: 16px;
    font-weight: bold;
}

</style>