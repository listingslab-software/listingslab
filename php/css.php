<?php 
  $pwa = array();
  $pwa[ 'primaryColor' ] = '#ccd31f';
  $pwa[ 'secondaryColor' ] = '#e05717';
?>
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
      }      
      body {
        scrollbar-width: thin;
        scrollbar-color: var(--thumbBG) var(--scrollbarBG);
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: sans-serif;
        font-size: 1rem;
      }
</style>
