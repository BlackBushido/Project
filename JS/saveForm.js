function check(){
    objectName=/^[A-ZĄĆĘŃÓŁŚŻŹ]{1}[a-ząćęłńóśżź]{2,20}$/;
    objectEmail=/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    objectTel=/^([+]?[1-9]{2} )?\d{9}$/;
    objectPost=/^\d{2}-\d{3}$/;
    objectCity=/^\D{5,20}( \D{5,20})*$/;
    
    
    var name = document.getElementById("name");
    var lastname=document.getElementById("lastname");
    var email=document.getElementById("email");
    var tel=document.getElementById("tel");
    var post=document.getElementById("post");
    var city=document.getElementById("city");
    var country=document.getElementById("country");
    
    
    if(!objectName.test(name.value)){
        
        document.getElementById('name_err').innerHTML="Wpisz poprawne imię!";
        return false;
    }
    else
        document.getElementById('name_err').innerHTML="";
        
    if(!objectName.test(lastname.value)){
        
        document.getElementById('lastname_err').innerHTML="Wpisz poprawne nazwisko!";
        return false;
    }
    else 
        document.getElementById('lastname_err').innerHTML="";
    
    if(!objectEmail.test(email.value)){
        
        document.getElementById('email_err').innerHTML="Wpisz poprawny e-mail!";
        return false;
    }
    else
        document.getElementById('email_err').innerHTML="";
        
    if(!objectTel.test(tel.value)){
        
        document.getElementById('tel_err').innerHTML="Wpisz poprawny numer telefonu!";
        return false;
    }
    else
        document.getElementById('tel_err').innerHTML="";
    
    if(!objectPost.test(post.value)){
        
        document.getElementById('post_err').innerHTML="Wpisz poprawny kod!";
        return false;
    }
    else
        document.getElementById('post_err').innerHTML="";
    
    if(!objectCity.test(city.value)){
        
        document.getElementById('city_err').innerHTML="Wpisz poprawne miasto!";
        return false;
    }
    else
        document.getElementById('city_err').innerHTML="";
    
    if(!objectCity.test(country.value)){
        
        document.getElementById('country_err').innerHTML="Wpisz poprawną miejscowość!";
        return false;
    }
    else
        document.getElementById('country_err').innerHTML="";
    
    return true;
    
}

function again(){
    
    $(document).ready(function(){
        fetch("https://raw.githubusercontent.com/BlackBushido/Project/main/shop.html").then( response => {
            return response.text();
        } ).then( dane => { 
            document.getElementById("content").innerHTML = dane; 
        });
});
}

function save(){
    if(check()){
        
        var item={};
        item.name=document.getElementById("name").value;
        item.lastname=document.getElementById("lastname").value;
        item.email=document.getElementById("email").value;
        item.tel=document.getElementById("tel").value;
        item.post=document.getElementById("post").value;
        item.city=document.getElementById("city").value;
        item.country=document.getElementById("country").value;
        item.product=document.getElementById("product").value;
        item.model=document.getElementById("model").value;
        
        switch(item.product){
            
            case "Traktor":{
                
                var tab=document.getElementsByName('gearbox');
                for(let i=0; i<tab.length; i++){
                    if(tab[i].checked){
                        
                        item.gearbox=tab[i].value;
                        break;
                    }
                }
                
                tab=document.getElementsByName('adds');
                item.adds="";
                for(let i=0; i<tab.length; i++){
                    if(tab[i].checked){
                        
                        item.adds+=tab[i].value+' ';
                    }
                }
                if(item.adds==='')
                    item.adds="Brak";
                
                break;
            }
            
            case "Kombajn":{
                
                var tab=document.getElementsByName('header');
                for(let i=0; i<tab.length; i++){
                    if(tab[i].checked){
                        
                        item.header=tab[i].value;
                        break;
                    }
                }
                
                tab=document.getElementsByName('adds');
                item.adds="";
                for(let i=0; i<tab.length; i++){
                    if(tab[i].checked){
                        
                        item.adds+=tab[i].value+' ';
                    }
                }
                if(item.adds==='')
                    item.adds="Brak";
                
                break;
            }
            
            case "Kosiarka":{
                
                tab=document.getElementsByName('adds');
                item.adds="";
                for(let i=0; i<tab.length; i++){
                    if(tab[i].checked){
                        
                        item.adds+=tab[i].value+' ';
                    }
                }
                if(item.adds==='')
                    item.adds="Brak";
                
                break;
            }
            
            case "Prasa":{
                
                tab=document.getElementsByName('cutting');
                for(let i=0; i<tab.length; i++){
                    if(tab[i].checked){
                        
                        item.cutting=tab[i].value;
                    }
                }
                
                break;
            }
        }
        
        item.attention=document.getElementById("attention").value;
        if(item.attention==='')
            item.attention='Brak';
        
        var list=JSON.parse(localStorage.getItem('list'));
        if(list===null)
            list=[];

        list.push(item);
        localStorage.setItem('list',JSON.stringify(list));
        
        again();
        return false;
    }
    else
        return false;
}

function show(){
    var data='<h1>Koszyk:</h1>';
    var list=JSON.parse(localStorage.getItem('list'));
    if(list===null)
        data+="Brak produktów w koszyku";
    else
    {
        for(var i=0;i<list.length;i++)
        {
            data+='<table id="basket">\n\
                        <tr>\n\
                            <th>Imię</th>\n\
                            <th>Nazwisko</th>\n\
                            <th>e-mail</th>\n\
                            <th>Telefon</th>\n\
                            <th>Kod pocztowy</th>\n\
                            <th>Miasto</th>\n\
                            <th>Miejscowość</th>\n\
                            <th>Produkt</th>\n\
                            <th>Model</th>';
            switch(list[i].product){
                
                case "Traktor":{
                        
                        data+='<th>Przekładnia</th>\n\
                                <th>Dodatki</th>';
                        break;
                }
                
                case "Kombajn":{
                        
                        data+='<th>Heder</th>\n\
                                <th>Dodatki</th>';
                        break;
                }
                
                case "Kosiarka":{
                        
                        data+='<th>Dodatki</th>';
                        break;
                }
                
                case "Prasa":{
                        
                        data+='<th>Zestaw tnący</th>';
                        break;
                }
            }
                        
            data+='<th>Uwagi</th>\n\
                    <td rowspan="2"><button id="del" onclick="del('+i+')">X</button>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>'+list[i].name+'</td>\n\
                            <td>'+list[i].lastname+'</td>\n\
                            <td>'+list[i].email+'</td>\n\
                            <td>'+list[i].tel+'</td>\n\
                            <td>'+list[i].post+'</td>\n\
                            <td>'+list[i].city+'</td>\n\
                            <td>'+list[i].country+'</td>\n\
                            <td>'+list[i].product+'</td>\n\
                            <td>'+list[i].model+'</td>';
                            
             switch(list[i].product){
                 
                case "Traktor":{

                        data+='<td>'+list[i].gearbox+'</td>\n\
                                <td>'+list[i].adds+'</td>';
                        break;
                }
                
                case "Kombajn":{

                        data+='<td>'+list[i].header+'</td>\n\
                                <td>'+list[i].adds+'</td>';
                        break;
                }
                
                case "Kosiarka":{

                        data+='<td>'+list[i].adds+'</td>';
                        break;
                }
                
                case "Prasa":{

                        data+='<td>'+list[i].cutting+'</td>';
                        break;
                }
             }
                       data+='<td>'+list[i].attention+'</td>\n\
                            </tr>\n\
                            </table>';

        }
        data+='<input type="button" id="clall" onclick="del_all()" value="Wyczyść wszystko">';
    }
    document.getElementById('content').innerHTML=data;
    
}

function del_all(){
    localStorage.removeItem('list');
    show();
}

function del(i){
    var list=JSON.parse(localStorage.getItem('list'));
    
    if(confirm("Usunąć produkt?"))
        list.splice(i,1);
    
    localStorage.setItem('list',JSON.stringify(list));
    show();
}