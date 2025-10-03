##
```html
<style>
    body{margin: 0;}


    .h6,
    .h5{
        font-weight: normal;
    }


    .ref{
      font-size: 10px;
      color:#eee;
    }


    .정관ㆍ등기>li>ul>li{
        width: 100px;
    }



</style>
<script>
    (function(){
        const f = window.location.pathname.split('/').pop();
        const f_  = decodeURIComponent(f);
        const i1 = f_.lastIndexOf(".");
        const i2 = f_.lastIndexOf("-");
        const s  = f_.substring(i2+1,i1);
        console.log();
        $(`.details>summary`).text(s)
    })();

</script>
```