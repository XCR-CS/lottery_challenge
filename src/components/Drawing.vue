<script setup lang="ts">
    import { getIntrospectionQuery } from 'graphql';
    // const url = 'http://localhost:8010/proxy/graphql';
    const url = 'https://www.lottohelden.de/graphql';

    /** try to get the schema of the endpoint since i don't know it... would need to successfully run this once to know how to build my query for the actual drawing results
        apparently __schema doesnt exist on the endpoint no matter if you try to build an introspectionQuery by hand or use the graphql default introspectionQuery as seen below
    const introspectionQuery = getIntrospectionQuery();
    const introspectionOptions = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
    },
        body: '{"query":' + JSON.stringify(introspectionQuery) + '}'
    };
    const introspectionRequest = new Request(url, introspectionOptions);

    fetch(introspectionRequest)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const schemaData = data;
            console.log(schemaData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    */

    let drawingData;
    const query = '{xyz}';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: '{"query":' + JSON.stringify(query) + '}'
    };
    const request = new Request(url, options);

    fetch(request)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const drawingData = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
</script>

<template>

    <h2>EUROJACKPOT</h2>
    <div class="lotteries">
        <div class="lottery">
            <div class="lottery__title">Drawing results:</div>
            <div v-if="drawingData" class="lottery__drawing">{{ drawingData.xyz }}</div>
            <div v-else class="lottery__drawing">Well, drawing results are supposed to show up here</div>
        </div>
    </div>
    <router-link to="/" class="button">Home</router-link>
</template>