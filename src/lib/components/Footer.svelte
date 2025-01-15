<script>
</script>

<div class="footer border-1">
    <h2>Footer</h2>
    <svg>
        <circle
            cx="100"
            cy="100"
            r="50"
            style="stroke-width:3;stroke:black;fill:red"
        >
            <animate
                attributeName="fill"
                begin="0s"
                dur="5s"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
                values="pink; yellow; green ; blue; cyan"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
</div>

<style>
    .footer {
        margin-top: auto;
        width: 100%;
        /* height: 1000px;
        background-image: url("/images/svg/mountain.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover; */
    }
</style>
