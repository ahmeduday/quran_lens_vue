<template>
    <h1>Info</h1>

    <ol>
        <li v-for="item in facts" class="">
            <strong class="fs-4">{{ item.key }}</strong>
            <span class="ms-2">{{ item.value }}</span>
        </li>
    </ol>
</template>

<script lang="ts" setup>
import getInfo from  '../helpers/readJson';
// var fact = {key: "Chapters:", value: "114"};
// var facts = [fact];

var json = getInfo("info");
var facts = json;
</script>