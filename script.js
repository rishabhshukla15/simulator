<script>    
    document.getElementById('next').disabled= true;
    document.getElementById('next').style.backgroundColor='grey';
    document.getElementById('prev').disabled= true;
    document.getElementById('prev').style.backgroundColor='grey';
    document.getElementById('submit').onclick=function(){
        //on submit
        //alert("helloo");
        document.getElementById('next').disabled=false;
        document.getElementById('next').style.backgroundColor='#4CAF50';     
        document.getElementById('prev').disabled=false;
        document.getElementById('prev').style.backgroundColor='#4CAF50';
        document.getElementById('submit').disabled=true;
        document.getElementById('submit').style.backgroundColor='grey';
    };
    document.getElementById('reset').onclick=function(){
        document.getElementById('next').disabled= true;
        document.getElementById('next').style.backgroundColor='grey';
        document.getElementById('prev').disabled= true;
        document.getElementById('prev').style.backgroundColor='grey';
        document.getElementById('submit').disabled=false;
        document.getElementById('submit').style.backgroundColor='#4CAF50';
        document.getElementById('input').value='';
    };
</script>
