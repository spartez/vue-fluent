<template>
    <div class="spinner" :size="size">
        <div class="circle"></div>
        <!--<svg-->
        <!--focusable="false"-->
        <!--:size="dimensions.px"-->
        <!--:height="dimensions.px"-->
        <!--:width="dimensions.px"-->
        <!--:viewBox="`0 0 ${dimensions.px} ${dimensions.px}`">-->
        <!--<circle :cx="origin" :cy="origin" :r="dimensions.radius" />-->
        <!--</svg>-->
    </div>
</template>

<script>
    export default {
        props: {
            size: {
                type: String,
                default: 'medium'
            }
        }
    };
</script>

<style scoped>
.spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.circle {
    box-sizing: border-box;
    border-radius: 50%;
    border-width: 1.5px;
    border-style: solid;
    border-color: rgb(0, 120, 212) rgb(199, 224, 244) rgb(199, 224, 244);
    border-image: initial;
    animation-name: css-654;
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);
    width: 20px;
    height: 20px;
}

[size="xsmall"] .circle {
    width: 12px;
    height: 12px;
}

[size="small"] .circle {
    width: 16px;
    height: 16px;
}

[size="large"]  .circle{
    width: 16px;
    height: 16px;
}

[size="large"]  .circle{
    width: 28px;
    height: 28px;
}

@keyframes css-654 {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
