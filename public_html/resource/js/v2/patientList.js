// LOAD


//    -----------------------------------------------------------------------------------------------------------------------------
// ConvertDate
function convertDate(date) {
    date = date.substring(0, 4) +'-'+ date.substring(4, 6) +'-'+ date.substring(6, 8);
    return date;
}

function convertTime(date) {
    date2 = date.substring(0, 2) +':'+ date.substring(2, 4);
    return date;
}
function convertTimeSeconds(date) {
    date = date.substring(0, 2) +':'+ date.substring(2, 4)+ ':' +date.substring(4);
    return date;
}

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
            },
            
            {
                extend: 'copyHtml5',
                exportOptions: {
                columns: "thead th:not(.noExport)",
                
                }
               },
               {
            
                extend: 'excelHtml5',
                exportOptions: {
                columns: "thead th:not(.noExport)",
                pageSize: 'A4'
                
                }
               },
            {
                extend: 'pdfHtml5',
                orientation: 'landscape',
                pageSize: 'LEGAL',
                pageSize: 'A4',
                exportOptions: {
                columns: "thead th:not(.noExport)",
               
            }
            
           },
           {
            extend: 'print',
            exportOptions: {
            columns: "thead th:not(.noExport)",
            pageSize: 'A4',
            
            }
           },
            
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
        }
     

    });
    
}

// Pasient Data Table
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
            },
            {
                extend: 'copyHtml5',
                exportOptions: {
                columns: "thead th:not(.noExport)",
          
                
                }
               },
               {
            
                extend: 'excelHtml5',
                exportOptions: {
                columns: "thead th:not(.noExport)",
                pageSize: 'A4',
                
                }
               },
            {
                extend: 'pdfHtml5',
                orientation: 'landscape',
                pageSize: 'LEGAL',
                exportOptions: {
                columns: "thead th:not(.noExport)",
                pageSize: 'A4',
               
            }
           },
           {
            extend: 'print',
            exportOptions: {
            columns: "thead th:not(.noExport)",
            pageSize: 'A4',
            
            }
           },
            
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
        }
     

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
// otherOption input toggle

$(document).on("click",'.edit-btn', function () {
    console.log('ok')
    $('.addBtn').css('display','none')
  })
  $(document).on("click",'.add-patinet-btn', function () {
    $('.updateBtn').css('display','none')
  })

//  AJAX CODING

//1. start ADD NEW PASIENT-------------------------------------------------
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
        .append($('<a>').attr('href','#').attr('data-value', obj[i].patientName ).append(obj[i].patientName).attr('id','patentID'+obj[i].id).attr('onclick','generalPatientFn("'+obj[i].id+'")'));                        
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
             $("#param1").val('');
             $("#param2").val('');          
             $("#city").val('');
             $("#PasientNote").val('');
             $("#occupationOther").val('');
             $("#maritalStatus").val('');
             $("#edu").val('');
             $("#bloodGroup").val('');
             $("#birthDate").val('');
             $("#occupation").val('');
             $("#gender").val('');
             $("#rhFactor").val('');
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

//2. start MAIN TABLE-------------------------------------------------
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
        .append($('<th>').addClass('noExport').append('Suallar'))
        .append($('<th>').append('Status'))
        .append($('<th>').append('Təyinat'))
        .append($('<th>').append('Tarix&nbsp;&nbsp;&nbsp;&nbsp;'))
        .append($('<th>').append('Saat(dan)'))
        .append($('<th>').append('Saat(a)'))
        .append($('<th>').append('Status'))
        .append($('<th>').append('Patient ID'))
        .append($('<th>').append('Həkim'))
        .append($('<th>').append('Izahat')) 
        .append($('<th>').append('Cinsiyyət'))
        .append($('<th>').append('Modul adı'))
        .append($('<th>').addClass('noExport').append('Delete'))

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
           .append($('<td>').addClass('_2c').append(convertDate(o.insertDate)))
           .append($('<td>').addClass('_3c').append(convertTimeSeconds(o.appointmentTime1)))
           .append($('<td>').addClass('_4c').append(convertTimeSeconds(o.appointmentTime2)))
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


//3. start NEW SESSIA----------------------------------------------

function addNewSessiaArea(){

    console.log(GetNewSessiaDoctor());
    var doctor=GetNewSessiaDoctor().tbl[0].r;
    var purposes=GetNewSessiaPurpose().tbl[0].r;
//    var testPasent=testPasient().tbl[0].r[0];
    
    var table=$('#addNewSessia').html('');
 
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
        var p = $('<option>').attr('value', purposes[i].id).append(purposes[i].paymentName); 
        List.append(p); 
    }

    var doc = $('#doctor');
    for (var i = 0; i < doctor.length; i++) {
        var d = $('<option>').attr('value', doctor[i].id).append(doctor[i].userPersonName,  doctor[i].userPersonSurname, doctor[i].userPersonMiddlename); 
        doc.append(d); 
    }
   
}


function GetNewSessiaDoctor() {  

    var json = { kv: {} };  
    try {
        json.kv.cookie = getToken();
    } catch (err) {   
    }

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
    json.kv.fkDoctorUserId = $( "#doctor" ).val();
    json.kv.appointmentDate = $('#dateSessia').val();
    json.kv.appointmentTime1 =  $('#time1').val();
    json.kv.appointmentTime2 =  $('#time2').val();
    json.kv.isNow = $("#currentTime").prop('checked');
    json.kv.description = $('#sessiaText').val();
    json.kv.fkPriceListId = $('#purposeSessia').val();

    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl+"api/post/srv/serviceCrInsertNewAppointment",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false,
        success: function (res) {

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

            $("#patientSessiaId").val('');
            $( "#doctor option:selected" ).val('');
            $('#dateSessia').val('');
            $('#time1').val('');
            $('#time2').val('');
            $('#sessiaText').val('');
            $('#purposeSessia option:selected').val('');
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


//4. start All pasientList add-------------------------------
function updatePasientNew(_id){

    var json = { kv: {} };
   
    try {
        json.kv.cookie = getToken();
       
    } catch (err) {
   
    }
 
        json.kv.id=_id
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
        url: urlGl+"api/post/srv/serviceCrUpdatePatient",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false,
        success: function (res) {
           
           $("#patientId").val('');
           $("#param1").val('');
           $("#param2").val('');          
           $("#city").val('');
           $("#PasientNote").val('');
           $("#occupationOther").val('');
           $("#maritalStatus").val('');
           $("#edu").val('');
           $("#bloodGroup").val('');
           $("#birthDate").val('');
           $("#occupation").val('');
           $("#gender").val('');
           $("#rhFactor").val('');
          
        },
        error: function (res, status) {
        //  lert(getMessage('somethingww'));
        }
    });      
  
   
}
function updatePasient(_id){
    var json = { kv: {} };
   
    try {
        json.kv.cookie = getToken();
        json.kv.id=_id;
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
            AddNewPasientArea(res.tbl[0].r)
        },
        error: function (res, status) {
        //  lert(getMessage('somethingww'));
        }
    });      
  
   
}

function AddNewPasientArea(resData){
    var patient='';
    var patientSurname2='';
    var patientMiddleName2='';
    var patientBirthDate2 ='';
    var maritualStatus2='';
    var occupation2='';
    var occupationOther2='';
    var sex2='';
    var bloodGroup2='';
    var rhFactor2='';
    var city2='';
    var desc2='';
    var edu2='';
    var _id='';

    if(resData!==undefined){
        patient=resData[0].patientName;
        patientSurname2=resData[0].patientSurname;
        patientMiddleName2=resData[0].patientMiddleName;
        patientBirthDate2=resData[0].patientBirthDate;
        maritualStatus2=resData[0].maritualStatus;
        occupation2=resData[0].occupation;
        occupationOther2=resData[0].occupationOther;
        sex2=resData[0].sex;
        bloodGroup2=resData[0].bloodGroup;
        rhFactor2=resData[0].rhFactor;
        city2=resData[0].city;
        desc2=resData[0].description;
        edu2=resData[0].education;
        _id=resData[0].id
        
    }

    var maritual=maritalStatusFn().tbl[0].r;
    var occupatio=occupationFn().tbl[0].r;
    var edu=educationFn().tbl[0].r;
    var gender=genderFn().tbl[0].r;
    var bloodGroup=bloodGroupFn().tbl[0].r;
    var rhFactor=rhFactorFn().tbl[0].r;

   
    var patientadd=$('#patinetAddModalBody').html('');
    var p=$('<div>').addClass('row')
    
        .append($('<div>').addClass('form-group col-md-4').append($('<label>').addClass('pasientLabel').append('Patient ID').append($('<span>').addClass('mandatoryIcon').append('*')))
        .append($('<input>').addClass('form-control  apd-form-input patientMandatory').attr('type','text').attr('id','patientId').attr('value', patient)))
         
        .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Param 1'))
        .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','param1').attr('value',patientSurname2)))
   
        .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Param 2'))
        .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','param2').attr('value', patientMiddleName2))) 
   
        .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Doğum Tarixi'))
        .append($('<input>').addClass('form-control  apd-form-input').attr('type','date').attr('id','birthDate').attr('value', patientBirthDate2)))
   
   
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox ').append($('<label>').append('Ailə Vəziyyəti'))
       .append($('<select>').addClass('noSearch selectStyle apd-form-select-back').attr('id','maritalStatus')
       .append($('<option>').addClass('active').append(maritualStatus2))

    //    .append($('<option>').append('Subay'))
    //    .append($('<option>').append('Dul'))
    //    .append($('<option>').append('---')) 
       ) )
   
   
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('İxtisas'))
       .append($('<select>').addClass('noSearch selectStyle apd-form-select-back').attr('id','occupation')
       .append($('<option>').addClass('active').append(occupation2))
    //    .append($('<option>').append('Müəllim'))
    //    .append($('<option>').append('Həkim'))
    //    .append($('<option>').append('Aktyor (Aktrisa)'))
    //    .append($('<option>').append('Diktor')) 
    //    .append($('<option>').append('Çağırı mərkəzi'))
     
         ) )
   
       .append($('<div>').addClass('form-group col-md-4').append($('<label>').append('Occupation (Other)'))
       .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','occupationOther').prop('disabled',true).attr('value', occupationOther2)))
   
   
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Təhsil'))
       .append($('<select>').addClass('noSearch selectStyle apd-form-select-back').attr('id','edu')
       .append($('<option>').addClass('active').append(edu2))        ) )
    
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Cinsiyyət'))
       .append($('<select>').addClass('noSearch selectStyle apd-form-select-back').attr('id','gender')
       .append($('<option>').addClass('active').append(sex2))
    //    .append($('<option>').append('Qadın'))
    //    .append($('<option>').append('Kişi'))
    //    .append($('<option>').append('Digər'))
       ))

       .append($('<div>').addClass('form-group col-md-4 patientSelectBox ').append($('<label>').append('Qan qrupu'))
       .append($('<select>').addClass('noSearch selectStyle apd-form-select-back').attr('id','bloodGroup')
       .append($('<option>').addClass('active').append(bloodGroup2))
    //    .append($('<option>').append('O ( Ⅰ )'))
    //    .append($('<option>').append('A ( Ⅱ )'))
    //    .append($('<option>').append('B ( Ⅲ )')) 
    //    .append($('<option>').append('AB (Ⅳ )')) 
       ) )
     
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('RH faktor'))
       .append($('<select>').addClass('noSearch selectStyle apd-form-select-back').attr('id','rhFactor')
       .append($('<option>').addClass('active').append(rhFactor2))
    //    .append($('<option>').append('-'))
    //    .append($('<option>').append('+'))
        ) )
   
       .append($('<div>').addClass('form-group col-md-4 patientSelectBox').append($('<label>').append('Şəhər'))
       .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','city').attr('value', city2)))
   
       .append($('<div>').addClass('form-group col-md-12 patientSelectBox').append($('<label>').append('İzahat'))
       .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('id','PasientNote').attr('value', desc2)))

     
   
   
       patientadd.append(p); 

       var List2 = $('#maritalStatus');
       for (var i = 0; i < maritual.length; i++) {
           var p = $('<option>').attr('value',maritual[i].id ).append(maritual[i].itemValue); 
           List2.append(p); 
       }

       var List3 = $('#occupation');
       for (var i = 0; i < occupatio.length; i++) {
           var p = $('<option>').attr('value',occupatio[i].id ).append(occupatio[i].itemValue); 
           List3.append(p); 
       }

       var List4 = $('#edu');
       for (var i = 0; i < edu.length; i++) {
           var p = $('<option>').attr('value', edu[i].id ).append(edu[i].itemValue); 
           List4.append(p); 
       }

       var List5 = $('#gender');
       for (var i = 0; i < gender.length; i++) {
           var p = $('<option>').attr('value',gender[i].id ).append(gender[i].itemValue); 
           List5.append(p); 
       }

       var List6 = $('#bloodGroup');
       for (var i = 0; i < bloodGroup.length; i++) {
           var p = $('<option>').attr('value',bloodGroup[i].id ).append(bloodGroup[i].itemValue); 
           List6.append(p); 
       }
       var List7 = $('#rhFactor');
       for (var i = 0; i < rhFactor.length; i++) {
           var p = $('<option>').attr('value',rhFactor[i].id ).append(rhFactor[i].itemValue); 
           List7.append(p); 
       }

       var  footerBtn=$('#patientAddFooter').html('');
       var btn=$('<div>')
       .append($('<button>').addClass('btn btn-secondary apd-form-btn addBtn').attr('onclick','patientList("'+_id+'")').append('Əlavə et!'))
       .append($('<button>').addClass('btn btn-secondary apd-form-btn updateBtn').attr('onclick','updatePasientNew("'+_id+'")').append('Dəyiş'))
       .append($('<button>').addClass('btn btn-light').attr('data-dismiss','modal').append('Bağla'))

       footerBtn.append(btn)
}

function maritalStatusFn() {  

    var json = { kv: {} };  
    try {
        json.kv.cookie = getToken();
    } catch (err) {   
    }
   json.kv.itemValue = $("#maritalStatus").val();

    var data = JSON.stringify(json);
    var resData=$.ajax({
        url: urlGl+"api/post/li/maritualStatus",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false
    });      

   return resData.responseJSON;
}
function occupationFn() {  

    var json = { kv: {} };  
    try {
        json.kv.cookie = getToken();
    } catch (err) {   
    }
  json.kv.occupation = $("#occupation").val();

    var data = JSON.stringify(json);
    var resData=$.ajax({
        url: urlGl+"api/post/li/occupation",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false
    });      

   return resData.responseJSON;
}

function educationFn() {  

    var json = { kv: {} };  
    try {
        json.kv.cookie = getToken();
    } catch (err) {   
    }
  json.kv.education = $("#edu").val();

    var data = JSON.stringify(json);
    var resData=$.ajax({
        url: urlGl+"api/post/li/educationType",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false
    });      

   return resData.responseJSON;
}

function genderFn() {  

    var json = { kv: {} };  
    try {
        json.kv.cookie = getToken();
    } catch (err) {   
    }
     json.kv.sex = $("#gender").val();

    var data = JSON.stringify(json);
    var resData=$.ajax({
        url: urlGl+"api/post/li/sex",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false
    });      

   return resData.responseJSON;
}

function bloodGroupFn() {  

    var json = { kv: {} };  
    try {
        json.kv.cookie = getToken();
    } catch (err) {   
    }
    json.kv.bloodGroup = $("#bloodGroup").val();

    var data = JSON.stringify(json);
    var resData=$.ajax({
        url: urlGl+"api/post/li/bloodGroup",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false
    });      

   return resData.responseJSON;
}

function rhFactorFn() {  

    var json = { kv: {} };  
    try {
        json.kv.cookie = getToken();
    } catch (err) {   
    }

    json.kv.rhFactor = $("#rhFactor").val();


    var data = JSON.stringify(json);
    var resData=$.ajax({
        url: urlGl+"api/post/li/rhFactor",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false
    });      

   return resData.responseJSON;
}


// end All pasientList add---------------------------------


//5. start Pasient DataTable----------------------------------------

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
            .append($('<th>').append('Ətraflı')) 
            .append($('<th>').addClass('noExport').append('Silmək')) 

            PasientThead.append(pT); 

        var table=$('#PasinetTableBody');
        var obj = res.tbl[0].r;
        for (var i = 0; i < obj.length; i++) {
       var o=obj[i];
       var t=($('<tr>')
           .append($('<td>').addClass('apd-table-td').append(i+1))
           .append($('<td>').addClass('_0p').append(o.patientName))
           .append($('<td>').addClass('_1p').append(o.sex))
           .append($('<td>').addClass('_2p ').append(o.occupation))

           .append($('<td>').addClass('_3p ').append(o.occupationOther))
           .append($('<td>').addClass('_4p').append(o.maritualStatus))
           .append($('<td>').addClass('_5p').append(o.education))
           .append($('<td>').addClass('_6p').append(o.bloodGroup))
           .append($('<td>').addClass('_7p').append(o.rhFactor))
           .append($('<td>').addClass('_8p').append(''))
           .append($('<td>').addClass('_9p').append(o.city))
           .append($('<td>').addClass('_10p').append(o.description))
           .append($('<td>').addClass('_11p').append($('<a>').attr('data-toggle','modal').attr('data-target','#pasientAddModal').attr("onclick"," updatePasient('"+o.id+"')").append($('<i>').addClass('fa fa-pencil-square-o edit-icon edit-btn'))))
           .append($('<td>').addClass('_12p').append($('<i>').addClass('fa fa-trash trash-icon')))
   
           )
       
         table.append(t);

    }
 }
 
// start Pasient DataTable----------------------------------------


// 6. Seessia - Nurse (TibbBacısı) Question

// function questionNurse(){
//     console.log('ok')
//     var question=$('#questionContent')

//     var q=($('<div>').addClass('modal-content')
//         .append($('<div>').addClass('modal-header')
//         .append($('<div>').addClass('col-3 d-flex justify-content-left').append($('<h3>').append('2 / 3')))
        
//         .append($("<div>").addClass('form-group col-md-6 patientSelectBox  d-flex justify-content-center')
//         .append($('<select>').addClass('noSearch selectStyle w-100')
//         .append($('<option>').addClass('active').append(''))
//         .append($('<option>').append('Şikayət'))
//         .append($('<option>').append('Anamnez')) ))

//         .append($('<button>').attr('type', 'button').addClass('close').attr('data-dismiss', 'modal').attr('aria-label','Close')
//         .append($('<span>').attr('aria-hidden', true).append('&times;'))
//         ))  

//         .append($('<div>').addClass('modal-body')
//         .append($("<fieldset>")
//         .append($('<div>').addClass('form-bottom')
//         .append($('<div>').addClass('row')

//         .append($('<div>').addClass('form-group col-md-12').append($('<label>').append($('<i>').addClass('fa fa-user').append('Patient ID')))
//         .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').prop('disabled', true).attr('value','34FF'))  )

//         .append($('<div>').addClass('form-group col-md-4 patientSelectBox')
//         .append($("<label>").append('Necə başladı'))
//         .append($('<select>').addClass('noSearch selectStyle')
//         .append($('<option>').addClass('active').append(''))
//         .append($('<option>').append('Ani'))) )

//         .append($('<div>').addClass('form-group col-md-4 patientSelectBox')
//         .append($("<label>").append('Sonrakı gedişi'))
//         .append($('<select>').addClass('noSearch selectStyle')
//         .append($('<option>').addClass('active').append(''))
//         .append($('<option>').append('Pisləşdi'))) )

//         .append($('<div>').addClass('form-group col-md-4 patientSelectBox')
//         .append($("<label>").append('Şikayətlərinizi nə ilə əlaqələndirirsiniz ?'))
//         .append($('<select>').addClass('noSearch selectStyle')
//         .append($('<option>').addClass('active').append(''))
//         .append($('<option>').append('Çox danışmaq'))) )

//         .append($('<div>').addClass('form-group col-md-4 patientSelectBox')
//         .append($("<label>").append('Bu şikayətinizlə bağlı müayinə olmusunuz mu ?'))
//         .append($('<select>').addClass('noSearch selectStyle')
//         .append($('<option>').addClass('active').append(''))
//         .append($('<option>').append('Xeyir'))) )
        
//         .append($('<div>').addClass('form-group col-md-4 patientSelectBox')
//         .append($("<label>").append('Bu şikayətinizlə bağlı aldığınız müalicələri qeyd edin '))
//         .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('value', '')))

//         .append($('<div>').addClass('form-group col-md-4 patientSelectBox')
//         .append($("<label>").append('Şikayətiniz nə zaman başlayıb?'))
//         .append($('<input>').addClass('form-control  apd-form-input').attr('type','text').attr('value', '')))    ))))
        
//         .append($('<div>').addClass('modal-footer col-12')
//         .append($('<button>').attr('type','button').addClass('btn btn-default btn-prev').append('Prev'))
//         .append($('<button>').attr('type','button').addClass('btn btn-default btn-next').append('Next'))
//         .append($('<button>').attr('type','button').addClass('btn btn-default').attr('data-dismiss','modal').append('Close'))
        
//         )
        
        
//         )
        
//     question.append(q)

// }

function generalPatientFn(id){

    var json = { kv: {} };

    try {
        json.kv.cookie = getTokenDiff();
        json.kv.fkPatientId = id;
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
           addNewSessiaArea()
           questioFnArea(res.tbl[0].r[0].id) 
        },
        error: function (res, status) {
        
        }
    }); 
   
}
function bodyFn(res){
    var bodyFn=$('#bodyDiv')
    var b=$('<div>').append(res.kv.body)
    bodyFn.append(b)
}

function questioFnArea(id) {   
    var json = { kv: {} };
   
    try {
        json.kv.cookie = getTokenDiff();

    } catch (err) {
   
    }
  
   json.kv.fkSessionId=id;
  

    var data = JSON.stringify(json);
    $.ajax({
        url: urlGl+"api/post/srv/serviceCrGenSubmoduleButtonList",
        type: "POST",
        data: data,
        contentType: "application/json",
        crossDomain: true,
        async: false,
        success: function (res) {
            bodyFn(res)
            // console.log('===>',res.kv.body)
        },
        error: function (res, status) {
        //  lert(getMessage('somethingww'));
        }
    });      
}

// $('#popup1').on('show.bs.modal', function (e) {
//     console.log(e);
// })


// function questionBody(){
//     var bodyFn2=$('#questionBody')
//     var b2=$('<div>').append(res.kv.body)
//     .append($('<label>').append(res.kv.header))
//     bodyFn2.append(b2)
// }

// function questioModal(id) {   
//     var json = { kv: {} };
   
//     try {
//         json.kv.cookie = getTokenDiff();

//     } catch (err) {
   
//     }
  
//    json.kv.fkSessionId=id;

   
//     var data = JSON.stringify(json);
//     $.ajax({
//         url: urlGl+"api/post/srv/serviceCrGetSubmoduleFormBody",
//         type: "POST",
//         data: data,
//         contentType: "application/json",
//         crossDomain: true,
//         async: false,
//         success: function (res) {
//             questionBody(res)
//             console.log('-------->', res)
//             console.log('===>', res.kv.body)
//         },
//         error: function (res, status) {
//         //  lert(getMessage('somethingww'));
//         }
//     });      
// }


// Müayinə Siyahisi
function incspectionTable(res){

    
    var obj = res.tbl[0].r;
   var tableConst=$('#constHeader').html('');
   var c=$('<div>').addClass('row constHeader')

   .append($('<div>').addClass('form-group apd-form col-md-6')
   .append($('<label>').addClass('').append('Patient ID'))
   .append($('<div>').addClass('form-control apd-form-input_constHeader ').append( obj[0].patientName)) )

   
   .append($('<div>').addClass('form-group apd-form col-md-6')
   .append($('<label>').addClass('').append('Həkim'))
   .append($('<div>').addClass('form-control apd-form-input_constHeader ').append( obj[0].doctorFullname)) )


   .append($('<div>').addClass('form-group apd-form col-md-6')
   .append($('<label>').addClass('').append('Modul adı'))
   .append($('<div>').addClass('form-control apd-form-input_constHeader ').append( obj[0].moduleName)) )

   .append($('<div>').addClass('form-group apd-form col-md-4')
   .append($('<label>').addClass('').append('Tarix'))
   .append($('<div>').addClass('form-control apd-form-input_constHeader ').append(convertDate(obj[0].inspectionDate))) )


   .append($('<div>').addClass('form-group apd-form col-md-2')
   .append($('<label>').addClass('timsLabel').append('Saat'))
   .append($('<div>').addClass('form-control apd-form-input_constHeader ').append(convertTime(obj[0].inspectionTime))) )

   tableConst.append(c)

    var incTable=$('#incHead').html('')
    var inc=$('<tr>')
    .append($('<th>').append('№'))
    .append($('<th>').append('Attribute'))
    .append($('<th>').append('Final Dəyər'))
    .append($('<th>').append('Submodul adı'))
   
    incTable.append(inc)

    var incBodytable=$('#incBody').html('');
    var obj = res.tbl[0].r;
    for (var i = 0; i < obj.length; i++) {
        var o=obj[i];
        var t=($('<tr>')
            .append($('<td>').addClass('apd-table-td').append(i+1))
            .append($('<td>').addClass('apd-table-td').append(o.attributeName))
            .append($('<td>').addClass('apd-table-td').append(o.finalValue))  
            .append($('<td>').addClass('apd-table-td').append(o.submoduleName))            
           
            )
          
            incBodytable.append(t); 
 
     }


}

function getIncspection() {   
        var json = { kv: {} };
       
        try {
            json.kv.cookie = getToken();
    
        } catch (err) {
       
        }
      
      
        var data = JSON.stringify(json);
        $.ajax({
            url: urlGl+"api/post/srv/serviceCrGetInspectionList",
            type: "POST",
            data: data,
            contentType: "application/json",
            crossDomain: true,
            async: false,
            success: function (res) {
                incspectionTable(res)
            },
            error: function (res, status) {
            //  lert(getMessage('somethingww'));
            }
        });      
    }
    