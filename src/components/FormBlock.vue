<template>
    <div class="form">
        <div class="d-flex justify-content-between">
            <slot name="header"></slot>
        </div>
        <hr style="color: #004a8d; border-width: 3px" />
        <div class="d-flex justify-content-center">
            <slot name="add-button"></slot>
        </div>
        <div
            class="d-flex align-items-center flex-column scroll-content m-2 mb-5"
        >
            <slot name="body"></slot>
        </div>
        <div class="bottom-0 mb-3 position-absolute align-self-end">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style lang="scss">
$bgColor: #ffffff;
$bgFormColor: #0074d9;

@mixin flex($direction) {
    display: flex;
    flex-direction: $direction;
}

.form {
    margin: 5em;
    background-color: $bgColor;
    border: 10px solid $bgFormColor;
    border-radius: 12px;
    padding: 20px;
    @include flex(column);
    position: relative;

    min-width: 60vw;
    min-height: 70vh;
    max-height: 70vh;
    max-width: 60vw;
}

.scroll-content {
    overflow: auto;
    max-height: 100%;
}
</style>
