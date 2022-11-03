<template>
    <h1>Subjects</h1>

    <ol>
        <li v-for="item in subjects" class="">
            <NuxtLink :to=" {path: 'subject', params:{sub: item}}">
                <strong class="fs-4">{{item}}</strong>
            </NuxtLink>
        </li>
    </ol>
</template>

<script lang="ts" setup>
    //var chapter = {title: "AlFatiha", readlink: "114", playlink: "", infoLink: ""};
    var subjects = ["Zakat", "Marraige", "Prayer"];
</script>