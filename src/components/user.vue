<template>

    <div class="users">

        <h1>User component</h1>

        <ul>
            <li v-for="user in user">

                {{user.name}} - {{user.email}}

            </li>
        </ul>

    </div>
  
</template>

<script>

    export default {

        data(){
            return {
                user: [ //creamos un arreglo con usuarios
                    {
                        name: "isai",
                        email: "isak@gmail.com",
                        contacted: false
                    },
                    {
                        name: "elmo",
                        email: "elmo@gmail.com",
                        contacted: false
                    },
                    {
                        name: "kakaroto",
                        email: "kaka@gmail.com",
                        contacted: true
                    } 
                ]
            }
        }

    }

</script>

<style lang="css">

    .users {
        background:darkgrey;
    }

</style>