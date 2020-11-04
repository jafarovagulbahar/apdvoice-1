// LOAD


//    -----------------------------------------------------------------------------------------------------------------------------

// dataTable

function dataTable(){
    $('#example',).DataTable({             
        "dom": 'Bfrltip',
        responsive: true,
        "paging": true,
        "autoWidth": true,
        "buttons": [
            {
                extend: 'colvis',
                text: function (dt, button, config) {
                    return dt.i18n('buttons.colvis', 'Column');
                }
            }
            ,
            'copyHtml5',
            'excelHtml5',
            'pdfHtml5',
            'print',
        ],

        initComplete: function () {
            $('.buttons-copy').html('<i class="fa fa-copy" />')

            $('.buttons-excel').html('<i class="fa fa-file-excel-o" />')
            $('.buttons-pdf').html('<i class="fa fa-file-pdf-o" />')
            $('.buttons-print').html('<i class="fa fa-print" />')

        },
        "language": {
            "lengthMenu": " _MENU_ ",
            "search": "",

            paginate: {
                next: '<i class="fa fa-angle-double-right">',
                previous: '<i class="fa fa-angle-double-left">'
            }
        },
     

    });
    
}
// Next Prev Modal Fn
        $(document).ready(function () {

                $("div[id^='myModal']").each(function () {

                    var currentModal = $(this);

                    //click next
                    currentModal.find('.btn-next').click(function () {
                        currentModal.modal('hide');
                        currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
                    });

                    //click prev
                    currentModal.find('.btn-prev').click(function () {
                        currentModal.modal('hide');
                        currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
               });
          });               
     });



// patient selectbox value append
$(document).on("click",'#patinetlistcombo li a', function (e) {
    ulVal= $(this).parent().find('input').val();
    //PasientName search inputuna elave olunur
     document.getElementById('pasientInput').value=ulVal;
   //PasientName Newsession area-ya elave olunur
     document.getElementById('patientSessiaId').value=ulVal;
    
 });

//patient list search
 $(document).on("keyup",'#pasientInput', function (e) {
    var input, filter, a, i;
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

  $(document).on("click",'.patient_li', function (e) {
    $(this).addClass('active-patient');
  })
// "pasient add modal" Mandatory input
  $(document).on("keyup",'.patientMandatory', function (e) {
    $(this).css('border','none');
    $('.mandatoryIcon').css('display','none')
  })

  $(document).on("click",'.patientMandatoryDate', function (e) {
    $('.patientMandatoryDate').css('border','none')
    $('.mandatoryIcon').css('display','none')
  })
  $(document).on("keyup",'.patientMandatoryTime1', function (e) {
    $('.patientMandatoryTime1').css('border','none')
    $('.mandatoryIcon').css('display','none')
  })
  $(document).on("keyup",'.patientMandatoryTime2', function (e) {
    $('.patientMandatoryTime2').css('border','none')
    $('.mandatoryIcon').css('display','none')
  })



//  AJAX CODING

// start ADD NEW PASIENT-------------------------------------------------
function patientList(e) {
       var patientİd=$("#patientId").val();

        var json = { kv: {} };
        console.log(json)
        try {
            json.kv.cookie = getToken();
        } catch (err) {
       
        }
        json.kv.patientName = $("#patientId").val();
        json.kv.patientSurname = $("#param1").val();
        json.kv.patientMiddleName = $("#param2").val();
        
        json.kv.city = $("#city").val();
        json.kv.description = $("#PasientNote").val();

        json.kv.occupationOther = $("#occupationOther").val();
        json.kv.maritualStatus = $("#maritalStatus").val();
        json.kv.education = $("#edu").val();
        json.kv.bloodGroup = $("#bloodGroup").val();
        json.kv.patientBirthDate = $("#birthDate").val();
        json.kv.occupation = $("#occupation").val();
        json.kv.sex = $("#gender").val();
        json.kv.rhFactor = $("#rhFactor").val();
    
        var data = JSON.stringify(json);
        $.ajax({
            url: urlGl+"api/post/srv/serviceCrInsertNewPatient",
            type: "POST",
            data: data,
            contentType: "application/json",
            crossDomain: true,
            async: false,
            success: function (res) {
                if(patientİd==''){
                    $('.mandatoryIcon').css('display','block')
                    $('.patientMandatory').css('border','2px solid red')
                  
                 }else{
                     $('.mandatoryIcon').css('display','none')
                     $('.patientMandatory').css('border','none')
                  
                 }
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
    for (var i = 0; i < obj.length; i++) {
        var p = $('<li>').addClass('patient_li').append($('<input>').attr('type','hidden').attr( 'value', obj[i].patientName))
        .append($('<a>').attr('href','#').attr('data-value', obj[i].patientName ).append(obj[i].patientName).attr('id','patentID'+obj[i].id).attr('onclick','addNewSessiaArea(this,"'+obj[i].id+'")'));                        
        patientList.append(p); 
 } 

}


function getpatientList(e) {
    var json = { kv: {} };
 
    try {
        json.kv.cookie = getToken();
    } catch (err) {
   
    }

    json.kv.patientName = $("#patientId").val();
    json.kv.patientSurname = $("#param1").val();
    json.kv.patientMiddleName = $("#param2").val();
    
    json.kv.city = $("#city").val();
    json.kv.description = $("#PasientNote").val();
    json.kv.occupationOther = $("#occupationOther").val();
    json.kv.maritualStatus = $("#maritalStatus").val();
    json.kv.education = $("#edu").val();
    json.kv.bloodGroup = $("#bloodGroup").val();
    json.kv.patientBirthDate = $("#birthDate").val();
    json.kv.occupation = $("#occupation").val();
    json.kv.sex = $("#gender").val();
    json.kv.rhFactor = $("#rhFactor").val();

   // PasientNote
    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl+"api/post/srv/serviceCrGetPatientList",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false,
        success: function (res) {
             pasientListCombo(res)
             $("#patientId").val('');
        },
        error: function (res, status) {
        }
    });
    
}

function pasientFilter() {
    var json = { kv: {} };
 
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

             pasientListCombo(res)
        },
        error: function (res, status) {
        //  lert(getMessage('somethingww'));
        }
    });
    
}
// end ADD NEW PASIENT----------------------------------------------

// start MAIN TABLE-------------------------------------------------
function GetAppointmentList(e) {
    
    var json = { kv: {} };
   
    try {
        json.kv.cookie = getToken();
    } catch (err) {
   
    }

    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl+"api/post/srv/serviceCrGetAppointmentList",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false,
        success: function (res) {
           doctorDataTable(res);
           dataTable()
        },
        error: function (res, status) {
        //  lert(getMessage('somethingww'));
        }
    });      
}
  

function doctorDataTable(res){
    var thead=$('#DoctorDataTableHeader')
    var p=$('<tr>')
        .append($('<th>').append('№'))
        .append($('<th>').append('Suallar'))
        .append($('<th>').append('Status'))
        .append($('<th>').append('Təyinat'))
        .append($('<th>').append('Tarix'))
        .append($('<th>').append('Saat(dan)'))
        .append($('<th>').append('Saat(a)'))
        .append($('<th>').append('Status'))
        .append($('<th>').append('Patient ID'))
        .append($('<th>').append('Həkim'))
        .append($('<th>').append('Izahat')) 
        .append($('<th>').append('Cinsiyyət'))
        .append($('<th>').append('Modul adı'))
        .append($('<th>').append('Delete'))

  thead.append(p); 

   var table=$('#DoctorDataTable');
   var obj = res.tbl[0].r;
   for (var i = 0; i < obj.length; i++) {
       var o=obj[i];
       var t=($('<tr>')
           .append($('<td>').addClass('apd-table-td').append(i+1))
           .append($('<td>').addClass('apd-table-td').append($('<a>').addClass('question-icon dropdown-toggle').attr('id','apdQuestions'+obj[i].id).attr('href','#').attr('data-toggle','dropdown').attr('aria-haspopup','true').attr('aria-expanded','false')
           .append($('<i>').addClass('fa fa-question')) )
           .append($('<div>').addClass('dropdown-menu dropMenuQues').attr('aria-labelledby','apdQuestions'+obj[i].id)
   
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal1').append('Şikayət'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal2').append('Anamnez'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal3').append('An.Vitae'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal4').append('Səs gigiyenası'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal5').append('Akustik Analiz'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal6').append('Aerodinamik qiymətləndirmə (Spirometry test)'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal7').append('Perseptual qiymətləndirmə'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal8').append('VHI'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal9').append('Səs ilə əlaqəli həyat keyfiyyət indeksi'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal10').append('RSI'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal11').append('RFS'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal12').append('SVHI'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal13').append('PVHI Part I-F'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal14').append('PVHI Part II-P'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal15').append('PVHI Part III-E'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal16').append('DI'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal17').append('CSI'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal18').append('EAT'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal19').append('Ümumi Lor müayinəsi'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal20').append('VLS nəticələri'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal21').append('EMG'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal22').append('Video əlavə et'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal23').append('Şəkil əlavə et'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal24').append('Digər'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal25').append('Diaqnoz'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal26').append('Müalicə (Konservativ)'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal27').append('Müalicə (Səs terapiyası)'))
           .append($('<a>').addClass('dropdown-item').attr('href','#').attr('data-toggle','modal').attr('data-target','#myModal28').append('Müalicə (Cərrahi)'))
              
           
           )  )

           .append($('<td>').addClass('_0c').append(o.status))
           .append($('<td>').addClass('_1c').append(o.purpose))
           .append($('<td>').addClass('_2c').append(o.insertDate))
           .append($('<td>').addClass('_3c').append(o.appointmentTime1))
           .append($('<td>').addClass('_4c').append(o.appointmentTime2))
           .append($('<td>').addClass('_5c').append(o.appointmentStatusName))
           .append($('<td>').addClass('_6c').append(o.patientName))
           .append($('<td>').addClass('_7c').append(o.doctorFullname))
           .append($('<td>').addClass('_8c').append(o.description))
           .append($('<td>').addClass('_9c').append(o.sexName))
           .append($('<td>').addClass('_10c').append(o.moduleName))
           .append($('<td>').addClass('_11c').append($('<i>').addClass('fa fa-trash trash-icon')))
    
           )
         
         table.append(t); 

    }
 }

// end MAIN TABLE-----------------------------------------------


// start NEW SESSIA----------------------------------------------

function addNewSessiaArea(){

    var doctor=GetNewSessiaDoctor().tbl[0].r;
    var purposes=GetNewSessiaPurpose().tbl[0].r;
//    var testPasent=testPasient().tbl[0].r[0];
    
    var table=$('#addNewSessia');
 
        var t=($('<div>').addClass('row')
         .append($('<div>').addClass('form-group col-md-4 patientSelectBox')
         .append($('<label>').append('Həkim'))
         .append($('<select>').addClass('noSearch selectStyle').attr('id','doctor')
        //  .append($('<option>').append(doctor.userPersonName,  doctor.userPersonSurname, doctor.userPersonMiddlename))
         ))
      
         .append($('<div>').addClass('form-group apd-form col-md-4')
         .append($('<label>').append('Patient'))
         .append($('<input>').addClass('form-control apd-form-input').attr('id','patientSessiaId').attr('type','text').prop('disabled',true)) )

         .append($('<div>').addClass('form-group apd-form col-md-4 patientSelectBox')
         .append($('<label>').append('Təyinat'))
         .append($('<select>').addClass('noSearch selectStyle').attr('id','purposeSessia')
        //  .append($('<option>').append(o.paymentName))
         ))

         .append($('<div>').addClass('form-group apd-form col-md-4')
         .append($('<label>').addClass('timesLabel Star1').append('Tarix').append($('<span>').addClass('mandatoryIcon').append('*')))
         .append($('<input>').addClass('form-control apd-form-input patientMandatoryDate').attr('type','date').attr('id','dateSessia').prop('disabled',true)) )

         .append($('<div>').addClass('form-group apd-form col-md-2')
         .append($('<label>').addClass('timesLabel  Star2').append('Saat (dan)').append($('<span>').addClass('mandatoryIcon').append('*')))
         .append($('<input>').addClass('form-control apd-form-input patientMandatoryTime1').attr('type','time').attr('id','time1').prop('disabled',true)) )

         .append($('<div>').addClass('form-group apd-form col-md-2')
         .append($('<label>').addClass('timesLabel Star3').append('Saat (a)').append($('<span>').addClass('mandatoryIcon ').append('*')))
         .append($('<input>').addClass('form-control apd-form-input patientMandatoryTime2').attr('type','time').attr('id','time2').prop('disabled',true)) )

         .append($('<div>').addClass('form-group apd-form col-md-2')
         .append($('<label>').addClass('isNowLabel').append($('<input>').attr('type','checkbox').addClass('toDoLi').attr('id','currentTime').prop('checked',true).attr('onclick','toggleSessionDate(this)'))
         .append($('<span>').addClass('okay'))  
         .append($('<label>').append('İndi'))
         ))

         .append($('<div>').addClass('form-group apd-form col-md-12')
         .append($('<label>').append('İzahat'))
         .append($('<input>').addClass('form-control apd-form-input').attr('type','text').attr('id','sessiaText')) )     
       
         )
             
    table.append(t); 

    var List = $('#purposeSessia');
    for (var i = 0; i < purposes.length; i++) {
        var p = $('<option>').attr('value', i).append(purposes[i].paymentName); 
        List.append(p); 
    }

    var doc = $('#doctor');
    for (var i = 0; i < doctor.length; i++) {
        var d = $('<option>').attr('value', i).append(doctor[i].userPersonName,  doctor[i].userPersonSurname, doctor[i].userPersonMiddlename); 
        doc.append(d); 
    }
   
}


function GetNewSessiaDoctor() {  

    var json = { kv: {} };  
    try {
        json.kv.cookie = getToken();
    } catch (err) {   
    }

    json.kv.userPersonName =  $( "#doctor" ).val();
    json.kv.userPersonSurname =  $( "#doctor" ).val();
    json.kv.userPersonMiddlename =  $( "#doctor" ).val();

    var data = JSON.stringify(json);
    var resData=$.ajax({
        url: urlGl+"api/post/srv/serviceCrGetDoctorList",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false
    });      

   return resData.responseJSON;
}

function GetNewSessiaPurpose() {  

    var json = { kv: {} };  
    try {
        json.kv.cookie = getToken();
    } catch (err) {   
    }

    json.kv.paymentName = $('#purposeSessia').val();

    var data = JSON.stringify(json);
    var resData=$.ajax({
        url: urlGl+"api/post/srv/serviceCrGetPriceListList",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false
    }); 
    
    return resData.responseJSON
}


function InsertNewSessia() {
    var isNow = $("#currentTime").prop('checked');
    var date =$('#dateSessia').val()
    var Time1 =  $('#time1').val();
    var Time2 =  $('#time2').val();
    var json = { kv: {} };
   
    try {
        json.kv.cookie = getToken();
    } catch (err) {
   
    }
  
    json.kv.fkPatientId = $("#patientSessiaId").val();
    json.kv.fkDoctorUserId = $( "#doctor option:selected" ).val();
    json.kv.appointmentDate = $('#dateSessia').val();
    json.kv.appointmentTime1 =  $('#time1').val();
    json.kv.appointmentTime2 =  $('#time2').val();
    json.kv.isNow = $("#currentTime").prop('checked');
    json.kv.description = $('#sessiaText').val();
    json.kv.fkPriceListId = $('#purposeSessia option:selected').val();

    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl+"api/post/srv/serviceCrInsertNewAppointment",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false,
        success: function (res) {
            console.log("ugurlu emeliyyat get", JSON.stringify(res));

            if(isNow==false && (date=='' || Time1=='' || Time2=='' )){
               $('.mandatoryIcon').css('display','block')
               $('.patientMandatoryDate').css('border','2px solid red')
               $('.patientMandatoryTime1').css('border','2px solid red')
               $('.patientMandatoryTime2').css('border','2px solid red')
             
            }else{
                $('.patientMandatoryDate').css('border','none')
                $('.patientMandatoryTime1').css('border','none')
                $('.patientMandatoryTime2').css('border','none')
                $('.patientMandatory').css('none')
            }
        },
        error: function (res, status) {
        //  lert(getMessage('somethingww'));
        }
    });      
}

function toggleSessionDate(el) {


    var isnow = $(el).closest(".apd-form").find("#currentTime").prop('checked');
    console.log(isnow)
    if (isnow===false) {
        $("#dateSessia").prop('disabled',false);
        $("#time1").prop('disabled',false);
        $("#time2").prop('disabled',false);

    } else {
        $("#dateSessia").prop('disabled',true);
        $("#time1").prop('disabled',true);
        $("#time2").prop('disabled',true);
        $('#dateSessia').val('');
        $('#time1').val('');
        $('#time2').val('');
    }
   
}



// end NEW SESSIA-------------------------------------------

// start All pasientList add-------------------------------


function AddNewPasientArea(){

    var patientadd=$('#patinetAddModalBody').html('');;
    var p=$('<div>').addClass('row')
    
        .append($('<div>').addClass('form-group col-md-4').append($('<label>').addClass('pasientLabel').append('Patient ID').append($('<span>').addClass('mandatoryIcon').append('*')))
        .append($('<input>').addClass('form-control  apd-form-input patientMandatory').attr('type','text').attr('id','patientId')))
         
        .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Param 1'))
        .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','param1')))
   
        .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Param 2'))
        .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','param2')))
   
        .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Doğum Tarixi'))
        .append($('<input>').addClass('form-control  apd-form-input').attr('type','date').attr('id','birthDate')))
   
   
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Ailə Vəziyyəti'))
       .append($('<select>').addClass('noSearch selectStyle').attr('id','maritalStatus')
       .append($('<option>').addClass('active').append(''))
       .append($('<option>').append('Evli'))
       .append($('<option>').append('Subay'))
       .append($('<option>').append('Dul'))
       .append($('<option>').append('---')) ) )
   
   
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('İxtisas'))
       .append($('<select>').addClass('noSearch selectStyle').attr('id','occupation')
       .append($('<option>').addClass('active').append(''))
       .append($('<option>').append('Müəllim'))
       .append($('<option>').append('Həkim'))
       .append($('<option>').append('Aktyor (Aktrisa)'))
       .append($('<option>').append('Diktor')) 
       .append($('<option>').append('Çağırı mərkəzi'))
       .append($('<option>').append('Digər'))  ) )
   
       .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Occupation (Other)'))
       .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','occupationOther')))
   
   
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Təhsil'))
       .append($('<select>').addClass('noSearch selectStyle').attr('id','edu')
       .append($('<option>').addClass('active').append(''))
       .append($('<option>').append('Akademik'))
       .append($('<option>').append('Orta'))
       .append($('<option>').append('Natamam Ali'))
       .append($('<option>').append('Ali'))   ) )
    
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Cinsiyyət'))
       .append($('<select>').addClass('noSearch selectStyle').attr('id','gender')
       .append($('<option>').addClass('active').append(''))
       .append($('<option>').append('Qadın'))
       .append($('<option>').append('Kişi'))
       .append($('<option>').append('Digər'))))

       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Qan qrupu'))
       .append($('<select>').addClass('noSearch selectStyle').attr('id','bloodGroup')
       .append($('<option>').addClass('active').append(''))
       .append($('<option>').append('O ( Ⅰ )'))
       .append($('<option>').append('A ( Ⅱ )'))
       .append($('<option>').append('B ( Ⅲ )')) 
       .append($('<option>').append('AB (Ⅳ )')) ) )
     
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('RH faktor'))
       .append($('<select>').addClass('noSearch selectStyle').attr('id','rhFactor')
       .append($('<option>').addClass('active').append(''))
       .append($('<option>').append('-'))
       .append($('<option>').append('+')) ) )
   
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Şəhər'))
       .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','city')))
   
       .append($('<div>').addClass('form-group col-md-12 patientSelectBox').append($('<label>').append('İzahat'))
       .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','PasientNote')))
   
   
       patientadd.append(p); 
}


// end All pasientList add---------------------------------


// start Pasient DataTable----------------------------------------
function dataTable2(){
    $('#example2',).DataTable({             
        "dom": 'Bfrltip',
        responsive: true,
        "paging": true,
        "autoWidth": true,
        "buttons": [
            {
                extend: 'colvis',
                text: function (dt, button, config) {
                    return dt.i18n('buttons.colvis', 'Column');
                }
            }
            ,
            'copyHtml5',
            'excelHtml5',
            'pdfHtml5',
            'print',
        ],

        initComplete: function () {
            $('.buttons-copy').html('<i class="fa fa-copy" />')

            $('.buttons-excel').html('<i class="fa fa-file-excel-o" />')
            $('.buttons-pdf').html('<i class="fa fa-file-pdf-o" />')
            $('.buttons-print').html('<i class="fa fa-print" />')

        },
        "language": {
            "lengthMenu": " _MENU_ ",
            "search": "",

            paginate: {
                next: '<i class="fa fa-angle-double-right">',
                previous: '<i class="fa fa-angle-double-left">'
            }
        },
     

    });
    
}
function GetAppointmentListPasient(e) {
    
    var json = { kv: {} };
   
    try {
        json.kv.cookie = getToken();
    } catch (err) {
   
    }

    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl+"api/post/srv/serviceCrGetPatientList",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false,
        success: function (res) {
            PasientDataTable(res);
           dataTable2()
        },
        error: function (res, status) {
        //  lert(getMessage('somethingww'));
        }
    });      
}
function PasientDataTable(res){
    var PasientThead=$('#PasinetTableThead')
    var pT=$('<tr>')
            .append($('<th>').append('№'))
            .append($('<th>').append('Patient ID'))
            .append($('<th>').append('Cinsiyyet'))
            .append($('<th>').append('İxtisas'))
            .append($('<th>').append('Occupation (Other)'))
            .append($('<th>').append('Ailə vəziyyəti'))
            .append($('<th>').append('Təhsil'))
            .append($('<th>').append('Qan qrupu'))
            .append($('<th>').append('Rh Faktor'))
            .append($('<th>').append('Ölkə'))
            .append($('<th>').append('Şəhər'))
            .append($('<th>').append('İzahat')) 

            PasientThead.append(pT); 

   var table=$('#PasinetTableBody');
   var obj = res.tbl[0].r;
   for (var i = 0; i < obj.length; i++) {
       var o=obj[i];
       var t=($('<tr>')
           .append($('<td>').addClass('apd-table-td').append(i+1))
           .append($('<td>').addClass('_0p').append(obj[i].patientName))
           .append($('<td>').addClass('_1p').append(obj[i].sex))
           .append($('<td>').addClass('_2p').append(obj[i].occupation))

           .append($('<td>').addClass('_3p').append(obj[i].occupationOther))
           .append($('<td>').addClass('_4p').append(o.maritualStatus))
           .append($('<td>').addClass('_5p').append(o.education))
           .append($('<td>').addClass('_6p').append(o.bloodGroup))
           .append($('<td>').addClass('_7p').append(o.rhFactor))
           .append($('<td>').addClass('_8p').append(''))
           .append($('<td>').addClass('_9p').append(o.city))
           .append($('<td>').addClass('_10p').append(o.description))
    
    
           )
         
         table.append(t); 

    }
 }
// start Pasient DataTable----------------------------------------

