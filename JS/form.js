function load(){
    var product=document.getElementById("product").value;
    var form='';
    switch(product){
        
        case "Traktor":{
                
                form+='Wybierz model: \n\
                    <select id="model" size="1">\n\
                        <option value="9340 TTV Warrior">9340 TTV Warrior</option>\n\
                        <option value="Seria 9">Seria 9</option>\n\
                        <option value="Seria 8">Seria 8</option>\n\
                        <option value="7250 TTV Warrior">7250 TTV Warrior</option>\n\
                        <option value="Seria 7">Seria 7</option>\n\
                        <option value="Seria 6 Warrior">Seria 6 Warrior</option>\n\
                    </select><br><br>';
                
                form+='Przekładnia:<br> \n\
                        <input type="radio" name="gearbox" value="Mechaniczna" checked> Mechaniczna\n\
                        <input type="radio" name="gearbox" value="TTV"> TTV\n\
                        <input type="radio" name="gearbox" value="PowerShift"> PowerShift \n\
                        <input type="radio" name="gearbox" value="RCshift"> RCshift\n\
                        <input type="radio" name="gearbox" value="Cshift"> Cshift<br><br>';
                
                form+='Dodatki:<br>\n\
                        <input type="checkbox" name="adds" value="Ładowacz czołowy">Ładowacz czołowy\n\
                        <input type="checkbox" name="adds" value="Gąsienice">Gąsienice\n\
                        <input type="checkbox" name="adds" value="Skurzany fotel">Skurzany fotel\n\
                        <input type="checkbox" name="adds" value="Nawigacja">Nawigacja<br><br>';
                
                break;
        }
        
    case "Kombajn":{
                
                form+='Wybierz model: \n\
                    <select id="model" size="1">\n\
                        <option value="Seria C5000">Seria C5000</option>\n\
                        <option value="Seria C6000">Seria C6000</option>\n\
                        <option value="Seria C7000">Seria C7000</option>\n\
                        <option value="Seria C9000">Seria C9000</option>\n\
                        <option value="Seria C9300">Seria C9300</option>\n\
                    </select><br><br>';
                
                form+='Heder:<br> \n\
                        <input type="radio" name="header" value="4,2 metra" checked> 4,2 metra\n\
                        <input type="radio" name="header" value="4,8 metra"> 4,8 metra\n\
                        <input type="radio" name="header" value="5,4 metra"> 5,4 metra \n\
                        <input type="radio" name="header" value="6,3 metra"> 6,3 metra<br><br>';
                
                form+='Dodatki:<br>\n\
                        <input type="checkbox" name="adds" value="Napęd na tył">Napęd na tył\n\
                        <input type="checkbox" name="adds" value="Gąsienice">Gąsienice\n\
                        <input type="checkbox" name="adds" value="Skurzany fotel">Skurzany fotel\n\
                        <input type="checkbox" name="adds" value="Nawigacja">Nawigacja<br><br>';
                
                break;
        }
        
        case "Kosiarka":{
                
                form+='Wybierz model: \n\
                    <select id="model" size="1">\n\
                        <option value="DISCMASTER 440H">DISCMASTER 440H</option>\n\
                        <option value="DISCMASTER 340">DISCMASTER 340</option>\n\
                        <option value="DISCMASTER 232">DISCMASTER 232</option>\n\
                        <option value="DISCMASTER 124">DISCMASTER 124</option>\n\
                    </select><br><br>';
                
                form+='Dodatki:<br>\n\
                        <input type="checkbox" name="adds" value="Ochrona listwy tnącej">Ochrona listwy tnącej\n\
                        <input type="checkbox" name="adds" value="Sprężony system breakback">Sprężony system breakback<br><br>';
                
                break;
        }
        
        case "Prasa":{
                
                form+='Wybierz model: \n\
                    <select id="model" size="1">\n\
                        <option value="VM 795 OPTIFEED">VM 795 OPTIFEED</option>\n\
                        <option value="VM 785">VM 785</option>\n\
                        <option value="MP 121">MP 121</option>\n\
                        <option value="FIXMASTER 230">FIXMASTER 230</option>\n\
                    </select><br><br>';
                
                form+='Zespół tnący:<br> \n\
                        <input type="radio" name="cutting" value="OptiCut 14" checked> OptiCut 14\n\
                        <input type="radio" name="cutting" value="OptiCut 23"> OptiCut 23<br><br>';
                
                break;
        }
        
        case "Owijarka":{
                
                form+='Wybierz model: \n\
                    <select id="model" size="1">\n\
                        <option value="WM 1121">WM 1121</option>\n\
                        <option value="WM 1221">WM 1221</option>\n\
                        <option value="WM 1431">WM 1431</option>\n\
                        <option value="WM 1631">WM 1631</option>\n\
                        <option value="WM 1851">WM 1851</option>\n\
                    </select><br><br>';
                
                break;
        }
        
        case "Zgrabiarka":{
                
                form+='Wybierz model: \n\
                    <select id="model" size="1">\n\
                        <option value="KS 1.30">KS 1.30</option>\n\
                        <option value="SWATMASTER 4321">SWATMASTER 4321</option>\n\
                        <option value="KS 2.33 DN">KS 2.33 DN</option>\n\
                        <option value="SWATMASTER 6951">SWATMASTER 6951</option>\n\
                    </select><br><br>';
                
                break;
        }
                
        
    }
    
    form+='Uwagi:<br>\n\
            <textarea id="attention" rows="4" cols="50"></textarea><br><br>';
        
    form+='<input type="submit" id="again" value="Dodaj do koszyka">\n\
            <input type="reset" value="Wyczyść">';
             
    document.getElementById('next').innerHTML=form;
}