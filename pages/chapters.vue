<template>
    <h1>Chapters</h1>

    <ol>
        <li v-for="item in chapters" class="">
            <strong class="fs-4">{{item.title}}</strong>
            <i class="bi bi-book-half ms-5" :style="{color:'green'}"></i>
            <i class="bi bi-play-fill ms-3" :style="{color:'red'}"></i>
            <i class="bi bi-info-circle-fill ms-3" :style="{color:'blue'}"></i>
        </li>
    </ol>
</template>

<script lang="ts" setup>
    var chapter = {title: "AlFatiha", readlink: "114", playlink: "", infoLink: ""};
    var chapters = [chapter];
</script>