<script lang="ts">
</script>

<div class="header">
    <div class="left">
        <a href="/" class="header-btn">Home</a>
        <a href="projects" class="header-btn">Projects</a>
        <a href="resume" class="header-btn">Resume</a>
    </div>
    <div class="right">
        <a href="about" class="header-btn">About</a>
    </div>
</div>
<div class="content">
    <div class="attribution">Image by <a href="https://www.freepik.com/free-vector/flat-design-summer-duotone-pattern-design_28474188.htm#query=hawaiian%20floral%20pattern&position=1&from_view=keyword&track=ais&uuid=4a6db952-952f-4ff3-85cd-53b40d4adf51">Freepik</a></div>
    <div class="col">
        <div class="paragraph">I'm Adam Shkolnik, and welcome to my personal website! :)</div>
    </div>
</div>

<style>
    .header {
        flex: 1;
        display: flex;  
        height: 50px;
        /* background-color: #ff6660; */
        background-color: #ffd372;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        border-bottom-style: solid;
        border-bottom-color: #000000;
        border-bottom-width: 4px;
    }
    .header-btn {
        color: #000000; 
        text-decoration: none;
        /* padding: 10px; */
        font-size: 20px;
        height: 100%;   
        align-items: center;
        justify-content: center;
        display: flex;
        padding-right: 10px;
        padding-left: 10px;
        font-weight: bold;
    }
    .header-btn:hover {
        background-color: #f5b326;
    }
    .content {
        height: 100%;
        background-color: #ffc852;
        background-image: url("$lib/floral.jpg");
        justify-content: center;
        display: flex;
    }
    .left {
        flex: 1;
        display: flex;
        height: 100%;
    }
    .right {
        display: flex;
        height: 100%;
    }
    .col {
        background-color: #ffd372;
        margin: 30px;
        width: 60%;
        border-color: #000000;
        border-style: solid;
        border-width: 4px;
    }
    .attribution {
        position: absolute;
        top: 10;
        left: 0%;
        padding: 10px;
        color: white;
        font-size: 16px;
    }
    .paragraph {
        font-size: 20px;
    }
</style>
