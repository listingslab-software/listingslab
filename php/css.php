<style>
	html {
      height: 100%;
        --scrollbarBG: #fff;
        --thumbBG: <?php echo $pwa[ 'secondaryColor' ]; ?>;
      }
      body::-webkit-scrollbar {
        width: 6px;
      }
      body::-webkit-scrollbar-track {
        background: var(--scrollbarBG);
      }
      body::-webkit-scrollbar-thumb {
        background-color: var(--thumbBG) ;
        border-radius: 0;
        /*border: 2px solid var(--scrollbarBG);*/
      }      
      body {
        scrollbar-width: thin;
        scrollbar-color: var(--thumbBG) var(--scrollbarBG);
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: sans-serif;
        font-size: 1rem;
        /*background: radial-gradient(circle, #fcfcfc 0%, #FFFFFF 100%);*/
      }

      .listingslab-plugin {
        /*border: 1px solid limegreen;*/
      }
</style>
