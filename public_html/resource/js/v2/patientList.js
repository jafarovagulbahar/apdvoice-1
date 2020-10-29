
//  function PatientAddTable(){

//  var patientadd=$('#patinetAddModalBody');
//  var p=$('<div>').addClass('row')
 
//      .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Patient ID'))
//      .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','patientName')))
      
//      .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Param 1'))
//      .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','')))

//      .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Param 2'))
//      .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','')))

//      .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Doğum Tarixi'))
//      .append($('<input>').addClass('form-control  apd-form-input').attr('type','date').attr('id','example-date-input')))


//     .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Ailə Vəziyyəti'))
//     .append($('<select>').addClass('noSearch selectStyle')
//     .append($('<option>').addClass('active').append(''))
//     .append($('<option>').append('Subay'))
//     .append($('<option>').append('Evli'))
//     .append($('<option>').append('Dul'))
//     .append($('<option>').append('---')) ) )


//     .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('İxtisas'))
//     .append($('<select>').addClass('noSearch selectStyle')
//     .append($('<option>').addClass('active').append(''))
//     .append($('<option>').append('Müəllim'))
//     .append($('<option>').append('Həkim'))
//     .append($('<option>').append('Aktyor (Aktrisa)'))
//     .append($('<option>').append('Diktor')) 
//     .append($('<option>').append('Çağırı mərkəzi'))
//     .append($('<option>').append('Digər'))  ) )

//     .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Occupation (Other)'))
//     .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','').attr('disabled')))


//     .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Təhsil'))
//     .append($('<select>').addClass('noSearch selectStyle')
//     .append($('<option>').addClass('active').append(''))
//     .append($('<option>').append('Akademik'))
//     .append($('<option>').append('Orta'))
//     .append($('<option>').append('Natamam Ali'))
//     .append($('<option>').append('Ali'))   ) )
 
//     .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Cinsiyyət'))
//     .append($('<select>').addClass('noSearch selectStyle')
//     .append($('<option>').addClass('active').append(''))
//     .append($('<option>').append('Qadın'))
//     .append($('<option>').append('Kişi'))
//     .append($('<option>').append('Digər'))  ) )

//     .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Qan qrupu'))
//     .append($('<select>').addClass('noSearch selectStyle')
//     .append($('<option>').addClass('active').append(''))
//     .append($('<option>').append('O ( Ⅰ )'))
//     .append($('<option>').append('A ( Ⅱ )'))
//     .append($('<option>').append('B ( Ⅲ )')) 
//     .append($('<option>').append('AB (Ⅳ )')) ) )
  
//     .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('RH faktor'))
//     .append($('<select>').addClass('noSearch selectStyle')
//     .append($('<option>').addClass('active').append(''))
//     .append($('<option>').append('-'))
//     .append($('<option>').append('+')) ) )

//     .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Şəhər'))
//     .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','')))


//     patientadd.append(p); 
//  }






   
//    function patinetList(){
  
//    $('.dataTables_empty').css('display','none')
     
//     var patient= $('#paseinetListTbody'); 

//     var patientId=$('#patientId').val();
//     var gander=$('select#gander option:checked').val();
//     var prof=$('select#prof option:checked').val();
//     var family=$('select#family option:checked').val();
//     var edu=$('select#edu option:checked').val();
//     var bloodGroup=$('select#bloodGroup option:checked').val();
//     var rhFactor=$('select#rhFactor option:checked').val();
//     var city=$('select#city option:checked').val();

            // append($('<thead>').append($('<tr>')
            // 	.append($('<th>').append('№'))
            // 	.append($('<th>').append('Patient ID'))
            // 	.append($('<th>').append('Cinsiyyet'))
            // 	.append($('<th>').append('İxtisas'))
            // 	.append($('<th>').append('Occupation (Other)'))
            // 	.append($('<th>').append('Ailə vəziyyəti'))
            // 	.append($('<th>').append('Təhsil'))
            // 	.append($('<th>').append('Qan qrupu'))
            // 	.append($('<th>').append('Rh Faktor'))
            // 	.append($('<th>').append('Ölkə'))
            // 	.append($('<th>').append('Cinsiyyət'))
            // 	.append($('<th>').append('Şəhər'))
            // 	.append($('<th>').append('İzahat')) ))

//             var p=$('<tr>')
//                 .append($('<td>').append('1'))
//                 .append($('<td>').append(patientId))
//                 .append($('<td>').append(gander))
//                 .append($('<td>').append(prof))
//                 .append($('<td>').append('a'))
//                 .append($('<td>').append(family))
//                 .append($('<td>').append(edu))
//                 .append($('<td>').append(bloodGroup))
//                 .append($('<td>').append(rhFactor))
//                 .append($('<td>').append(city))
//                 .append($('<td>').append('11')) 
               
          
//                 patient.append(p); 

//    }
//    ------------------------------------------ADD NEW PASIENT-----------------------------------------------------------------------------------

// patient selectbox value append
$(document).on("click",'#patinetlistcombo li a', function (e) {
    ulVal= $(this).parent().find('input').val();
     document.getElementById('pasientInput').value=ulVal;
    
 });

//patient list search
 $(document).on("keyup",'#pasientInput', function (e) {
    var input, filter, ul, li, a, i;
    input = document.getElementById("pasientInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("patinetlistcombo");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  })

// START AJAX CODE

function patientList(e) {
        var json = { kv: {} };
        console.log(json)
        try {
            json.kv.cookie = getToken();
        } catch (err) {
       
        }
        json.kv.patientName = $("#patientId").val();
        var data = JSON.stringify(json);
        $.ajax({
            url: urlGl+"api/post/srv/serviceCrInsertNewPatient",
            type: "POST",
            data: data,
            contentType: "application/json",
            crossDomain: true,
            async: false,
            success: function (res) {
                //  console.log("ugurlu emeliyyat get", JSON.stringify(res));
                 getpatientList()
            },
            error: function (res, status) {
            //  lert(getMessage('somethingww'));
            }
        });
        
}
function pasientListCombo(res){
    var patientList = $('#patinetlistcombo').html('');
       
    var obj = res.tbl[0].r;
    console.log( JSON.stringify(res));
    for (var i = 0; i < obj.length; i++) {
        var p = $('<li>').append($('<input>').attr('type','hidden').attr( 'value',obj[i].patientName))
        .append($('<a>').attr('href','#').attr('data-value', obj[i].patientName ).append(obj[i].patientName));                        
        patientList.append(p); 
 } 
}

function getpatientList(e) {
    var json = { kv: {} };
    console.log(json)
    try {
        json.kv.cookie = getToken();
    } catch (err) {
   
    }
    json.kv.patientName = $("#patientId").val();
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl+"api/post/srv/serviceCrGetPatientList",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false,
        success: function (res) {
             console.log("ugurlu emeliyyat get", JSON.stringify(res));
             pasientListCombo(res)
        },
        error: function (res, status) {
        //  lert(getMessage('somethingww'));
        }
    });
    
}

function pasientFilter() {
    var json = { kv: {} };
    console.log(json)
    try {
        json.kv.cookie = getToken();
    } catch (err) {
   
    }
    json.kv.patientName = $("#patientId").val();
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl+"api/post/srv/serviceCrGetPatientList4Combo",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false,
        success: function (res) {
             console.log("ugurlu emeliyyat get", JSON.stringify(res));
             pasientListCombo(res)
        },
        error: function (res, status) {
        //  lert(getMessage('somethingww'));
        }
    });
    
}
